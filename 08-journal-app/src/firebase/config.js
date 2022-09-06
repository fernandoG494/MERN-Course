import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers/getEnvironments';

const {
    VITE_APIKEY,
    VITE_AUTHDOMAIN,
    VITE_PROJECTID,
    VITE_STORAGEBUCKET,
    VITE_MESSAGINGSENDERID,
    VITE_APPID
} = getEnvironments();

//testing
const firebaseConfig = {
    apiKey: VITE_APIKEY,
    authDomain: VITE_AUTHDOMAIN,
    projectId: VITE_PROJECTID,
    storageBucket: VITE_STORAGEBUCKET,
    messagingSenderId: VITE_MESSAGINGSENDERID,
    appId: VITE_APPID
};

console.log(firebaseConfig);

// production
// const firebaseConfig = {
//     apiKey: "AIzaSyAkb-xCNE9fApRfdA04tRB4bv6AGBfX9BE",
//     authDomain: "react-journal-app-1197e.firebaseapp.com",
//     projectId: "react-journal-app-1197e",
//     storageBucket: "react-journal-app-1197e.appspot.com",
//     messagingSenderId: "731617202128",
//     appId: "1:731617202128:web:2f3907dc272a5d62db33d5"
// };

export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );
