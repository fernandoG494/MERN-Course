import { useEffect } from 'react';
import { FirebaseAuth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../store/auth/authSlice';
import { startLoadingNotes } from '../store/journal/thunks'; 

const useCheckAuth = () => {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.auth);

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async( user ) => {
            if( !user ) return dispatch(logout());
            const { uid, email, displayName, photoURL } = user;

            dispatch(login({ uid, email, displayName, photoURL }));
            dispatch(startLoadingNotes());
        });
    }, []);

    return { status };
};

export default useCheckAuth;
