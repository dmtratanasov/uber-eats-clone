import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBv8QirgOsnIP9t_ipLza-siupy9t16HG4",
    authDomain: "uber-eats-clone-f6968.firebaseapp.com",
    projectId: "uber-eats-clone-f6968",
    storageBucket: "uber-eats-clone-f6968.appspot.com",
    messagingSenderId: "196726843818",
    appId: "1:196726843818:web:944d0918723ec723ab63d3"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db
const db = firebaseApp.firestore();

export { db };