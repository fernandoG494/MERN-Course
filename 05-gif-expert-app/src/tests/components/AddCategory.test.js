import React from 'react';
import {shallow} from 'enzyme';
import AddCategory from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Pruebas en AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target:{value:value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No se debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';

        //simulacion del inputChange
        wrapper.find('input').simulate('change', {target:{value}});
        
        //simulacion del submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        
        //setCategories debe de ser llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(function));
        
        //el valor del input debe ser ''
        expect(wrapper.find('input').prop('value')).toBe('');
    })
});