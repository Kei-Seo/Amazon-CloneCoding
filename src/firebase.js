import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBdhLImrLkFmENXmZP7smpdyRB0rFbox8",
    authDomain: "clone-da61f.firebaseapp.com",
    projectId: "clone-da61f",
    storageBucket: "clone-da61f.appspot.com",
    messagingSenderId: "606430175033",
    appId: "1:606430175033:web:16dcbc891fedb1acfad2e8",
    measurementId: "G-M2TGEJBMHD"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
