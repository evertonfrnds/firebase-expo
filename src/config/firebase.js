import * as firebase from 'firebase'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAO1Kp98w_ACgZryWUlw9JDeWHDK8QMvm8",
    authDomain: "react-native-firebase-e861e.firebaseapp.com",
    databaseURL: "https://react-native-firebase-e861e.firebaseio.com",
    projectId: "react-native-firebase-e861e",
    storageBucket: "react-native-firebase-e861e.appspot.com",
    messagingSenderId: "674802605050",
    appId: "1:674802605050:web:4b9ae660b11f135c35e243",
    measurementId: "G-X608SD64JX"
}

export default !firebase.apps.length?
    firebase.initializeApp(firebaseConfig):
    firebase.app();