import '@testing-library/jest-dom'

import {getImagen} from '../../base-pruebas/base-pruebas/11-async-await'

describe('Pruebas de 11-async-await', () => {
    test('retornar promesa', async() => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    })
})