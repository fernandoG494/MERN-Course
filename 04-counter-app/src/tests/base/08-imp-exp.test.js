import '@testing-library/jest-dom'

import { getHeroesByOwner, getHeroeById } from '../../base-pruebas/base-pruebas/08-imp-exp'
import heroes from '../../data/heroes';

describe('Pruebas en 08-imp-exp', () => {
    test('Debe de retornar un heroe por Id', () => {
        const id = 2;
        const heroe = getHeroeById(id);
        
        const heroeData = heroes.find(heroe => heroe.id === id);
        expect(heroe).toEqual(heroeData);
    })

    test('Debe de retornar undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    })

    test('heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesTest = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ]

        expect(heroes).toEqual(heroesTest)
    })

    test('heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    })
})
