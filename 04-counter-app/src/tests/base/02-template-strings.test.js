import '@testing-library/jest-dom';

import { getSaludo } from '../../base-pruebas/base-pruebas/02-template-string';

describe('Pruebas en 02-template-strings', () => {
    test('prueba de getSaludo', () => {
        const nombre = 'Fernando';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    });

    test('prueba getSaludo por defect', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos');
    });
});
