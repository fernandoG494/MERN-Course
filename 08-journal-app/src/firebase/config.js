// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkb-xCNE9fApRfdA04tRB4bv6AGBfX9BE",
    authDomain: "react-journal-app-1197e.firebaseapp.com",
    projectId: "react-journal-app-1197e",
    storageBucket: "react-journal-app-1197e.appspot.com",
    messagingSenderId: "731617202128",
    appId: "1:731617202128:web:2f3907dc272a5d62db33d5"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
