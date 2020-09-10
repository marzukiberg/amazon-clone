import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZOWDIf8wpT-aSvfbp-lzTzPdqsR9iv7g",
  authDomain: "challenge-a6438.firebaseapp.com",
  databaseURL: "https://challenge-a6438.firebaseio.com",
  projectId: "challenge-a6438",
  storageBucket: "challenge-a6438.appspot.com",
  messagingSenderId: "422212701967",
  appId: "1:422212701967:web:c6f0b9335b6950867b387a",
  measurementId: "G-JSGCC9TLCY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
