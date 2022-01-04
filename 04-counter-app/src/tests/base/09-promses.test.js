import '@testing-library/jest-dom'
import heroes from '../../data/heroes'

import { getHeroeByIdAsync } from '../../base-pruebas/base-pruebas/09-promesas'

describe('Pruebas con 09-promesas', () => {
    test('retornar heroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        });
    })

    // test('Retornar error si el heroe no existe', (done) => {
    //     const id = 10;
    //     getHeroeByIdAsync(id).catch(error => {
    //         expect(error).toBe('No se pudo encontrar al héroe');
    //         done();
    //     });
    // })
})