import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import CounterApp from '../CounterApp'

describe('Pruebas de CounterApp', () => {
    test('match snapshot', () => {
        const wrapper = shallow(<CounterApp />)
        expect(wrapper).toMatchSnapshot();
    })

    test('render', () => {
        const titulo = "CounterApp";
        const defaultValue = "10";
        const wrapper = shallow(<CounterApp />);

        const textoTitulo = wrapper.find('h1').text().trim();
        expect(textoTitulo).toBe(titulo);

        const contador = wrapper.find('h2').text().trim();
        expect(contador).toBe(defaultValue);

        const botones = wrapper.find('button');
        expect(botones.length).toBe(3);
    })

    test('value props in 100', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value}/>)

        const returnedValue = wrapper.find('h2').text().trim();
        expect(returnedValue).toBe("100");
    });

    test('debe incrementar con "+1"', () => {
        const wrapper = shallow(<CounterApp />)
        wrapper.find('button').at(0).simulate('click');

        const returnedValue = wrapper.find('h2').text().trim();
        expect(returnedValue).toBe("11");
    })

    test('debe reiniciar con "reset"', () => {
        const wrapper = shallow(<CounterApp />)
        wrapper.find('button').at(1).simulate('click');

        const returnedValue = wrapper.find('h2').text().trim();
        expect(returnedValue).toBe("10");
    })

    test('debe decrementar con "-1"', () => {
        const wrapper = shallow(<CounterApp />)
        wrapper.find('button').at(2).simulate('click');

        const returnedValue = wrapper.find('h2').text().trim();
        expect(returnedValue).toBe("9");
    })
});