import { authSlice, checkingCredentials, login, logout } from '../../../store/auth/authSlice';
import { authenticatedState, demoUser, initialState } from '../../fixtures/authFixtures';

describe('Pruebas en el authSlice', () => {
    test('retornar estado inicial y llamarse auth', () => {
        expect(authSlice.name).toBe('auth');
        const state = authSlice.reducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test('debe realizar la autenticacion', () => {
        const state = authSlice.reducer(initialState, login(demoUser));
        expect(state).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null
        });
    });

    test('debe realizar el logout sin argumentos', () => {
        const state = authSlice.reducer(authenticatedState, logout());
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        });
    });

    test('debe realizar el logout con argumentos', () => {
        const errorMessage = 'Credenciales incorrectas';
        const state = authSlice.reducer(authenticatedState, logout({ errorMessage }));
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage
        });
    });

    test('debe cambiar estado a checking', () => {
        const state = authSlice.reducer(authenticatedState, checkingCredentials());
        expect(state.status).toBe('checking');
    });
});
