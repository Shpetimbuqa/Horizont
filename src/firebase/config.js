// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMiZ_V1DKDTzBW-r564ackaiOBCuMT1yM",
  authDomain: "horizont-8698a.firebaseapp.com",
  projectId: "horizont-8698a",
  storageBucket: "horizont-8698a.appspot.com",
  messagingSenderId: "87426073729",
  appId: "1:87426073729:web:a5f7f29ba4dfe599eff980",
};

// Initialize Firebase
const firebase = firebase.initializeApp(firebaseConfig);

export default firebase;
