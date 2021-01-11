import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAdwYowxoCndjib7rgNXQpwDpC_pVufm7w",
  authDomain: "instagram-clone-7256c.firebaseapp.com",
  databaseURL:
    "https://instagram-clone-7256c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "instagram-clone-7256c",
  storageBucket: "instagram-clone-7256c.appspot.com",
  messagingSenderId: "385440441526",
  appId: "1:385440441526:web:b0d2fa0ec681ecc8d6b217",
  measurementId: "G-DWNG2YLGRC",
});

const db = firebaseConfig.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
