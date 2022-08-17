import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
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