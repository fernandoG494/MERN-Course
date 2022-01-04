import '@testing-library/jest-dom'

import { getUser, getUsuarioActivo } from '../../base-pruebas/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        // console.log(user);
        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC567',
            username: 'Juan'
        };
        const nombre = 'Juan';
        const user = getUsuarioActivo(nombre);
        expect(user).toEqual(userTest); 
    })
})