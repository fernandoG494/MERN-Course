import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('GifGridItem component', () => {
    const title = "title";
    const url = "url";
    const wrapper = shallow(<GifGridItem title={title} url= {url} />)

    test('match snapshot', () => {    
        expect(wrapper).toMatchSnapshot();
    })

    test('debe tener title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('debe tener img con props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe tener el className correcto', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    });
});
