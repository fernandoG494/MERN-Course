import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        };
    }catch(error){
        console.log(error);

        return {
            ok: false,
            error: error.message,
            code: error.code,
            email: error.email,
            credential: error.credential
        };
    };
};

export const registerUserWithEmailPassword = async({ email, password, display }) => {
    try{
        const createResponse = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = createResponse.user;
        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName: display
        };
    }catch(error){
        return {
            ok: false,
            errorMessage: error.message
        };
    };
};

export const loginWithEmailPassword = async({ email, password }) => {
    try{
        const signResponse = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = signResponse.user;

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        };
    }catch(error){
        return {
            ok: false,
            errorMessage: error.message
        };
    };
};