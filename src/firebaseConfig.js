// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYhaQa_DQaD8rZeyhcXWuQrSFpzLgEDtY",
    authDomain: "sadaneera-38cc8.firebaseapp.com",
    projectId: "sadaneera-38cc8",
    storageBucket: "sadaneera-38cc8.appspot.com",
    messagingSenderId: "580392324688",
    appId: "1:580392324688:web:3c6c426a4b023072d70b55",
    measurementId: "G-53Z9YFJYQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// db connection
export const db = getFirestore(app)
// storage connection
export const storage = getStorage(app)
//authentication service
export const auth = getAuth(app);