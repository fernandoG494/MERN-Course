import {
    signInWithGoogle,
    registerUserWithEmailPassword,
    loginWithEmailPassword,
} from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./authSlice";

export const checkingAuth = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleLogin = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

        const result = await signInWithGoogle();
        if(!result.ok) return dispatch(logout(result.errorMessage));
        
        dispatch(login(result));
    };
};

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

        const result = await registerUserWithEmailPassword({ email, password, displayName });
        console.log('1: ', result);
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ))
    };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword({ email, password });
        if( !result.ok ) return dispatch(logout(result));

        dispatch(login(result));
    };
};