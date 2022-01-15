import React from "react";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");


describe('tests in GifGrid', () => {
    const category = 'death';

    test('should match snapshot', () => {
        const gifs = {
            id: 'ABC',
            url: 'https://localhost/something.jpg',
            title: 'title'
        };
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show items when useFetchGifs', () => {
        const gifs = {
            id: 'ABC',
            url: 'https://localhost/something.jpg',
            title: 'title'
        };
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);
    });
});