import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCBDgzwMQtYEIKAApA-OA-rDJ4HLzCnbcM",
  authDomain: "clone-78e28.firebaseapp.com",
  databaseURL: "https://clone-78e28.firebaseio.com",
  projectId: "clone-78e28",
  storageBucket: "clone-78e28.appspot.com",
  messagingSenderId: "381235039123",
  appId: "1:381235039123:web:9668429251d2bab2407666",
  measurementId: "G-KC600W3N81",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
