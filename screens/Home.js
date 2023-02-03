import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'


const YELP_API_KEY = "GfRYXxUDVRfRLcvGgV6MM16zyN7uSkI2BtimLrbQPedk_jdhvF9E_Cp5_YDns3ZJmqqjKAHWOdvW5gcuA1eURTX0dKLu9NHpw6Ke1eWYmmeliGeqks60P0WQjWfRY3Yx";


export default function Home() {
  const [restaurantsData, setRestaurantsData] = useState(localRestaurants);
  const [city, setCity] = useState('San Francisco');
  const [activeTab, setActiveTab] = useState('Delivery');

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantsData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLocaleLowerCase())
          )
        )
      ).catch(err => console.log(err));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15, marginTop: 30 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantsData={restaurantsData} />
      </ScrollView>
      <Divider width={1}/>
      <BottomTabs/>
    </SafeAreaView>
  )
};