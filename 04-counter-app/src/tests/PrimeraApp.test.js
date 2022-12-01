import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import PrimeraApp from '../PrimeraApp'

describe('Pruebas del componente PrimeraApp', () => {
    test('debe mostrar el componente <PrimeraApp />', () => {
        const saludo = "Hola soy Goku"
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
        expect(wrapper).toMatchSnapshot();

    })

    test('debe mostrar el subtitulo enviado por props', () => {
        const saludo = "Hola soy Goku"
        const subtitulo = "soy un subtitulo"
        const wrapper = shallow(<PrimeraApp
            saludo={saludo}
            subtitulo={subtitulo}
        />);

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);      
    })
});
