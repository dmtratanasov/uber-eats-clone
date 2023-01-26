import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function SearchBar({cityHandler}) {
    return (
        <View style={{ marginTop: 15, flexDirection: "row" }}>
            <GooglePlacesAutocomplete
                query={{ key: "AIzaSyB7RTThYTaoOmwKREfEwDf3teZt8lfUwgk" }}
                onPress={(data, details = null) => {
                    const city = data.description.split(',')[0];
                }}
                placeholder='Search'
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10
                    }
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <>
                        <View style={{ flexDirection: "row" }}>
                            <Ionicons name="close-circle" style={{ alignSelf: 'center', marginRight: 10, color: 'grey' }} size={20}></Ionicons>
                            <View style={{ marginRight: 10, backgroundColor: 'white', padding: 10, borderRadius: 20 }}>
                                <Ionicons onPress={()=>cityHandler("New York")} name="time" size={20}><Text style={{ fontSize: 20 }}>Search</Text></Ionicons>
                            </View>
                        </View>
                    </>
                )}

            />
        </View>
    )
}