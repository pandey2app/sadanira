// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnaCPH8nUKnUhqOkn8P7lZCPiuBb9t6HY",
    authDomain: "sadaneera-15fac.firebaseapp.com",
    projectId: "sadaneera-15fac",
    storageBucket: "sadaneera-15fac.appspot.com",
    messagingSenderId: "982910592877",
    appId: "1:982910592877:web:16370b0dd16a8d6f455c64"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// db connection
export const db = getFirestore(app)
// storage connection
export const storage = getStorage(app)
//authentication service
export const auth = getAuth(app);