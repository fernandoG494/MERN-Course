import React from 'react';
import '@testing-library/jest-dom';
import { getGifs } from "../../helpers/getGifs";

describe('getGifs testing', () => {
    test('should match snapshot', () => {
        const gifs = await getGifs('hacker');
        expect(gifs).toMatchSnapshot();
    });

    test('should have 10 elements', () => {
        const gifs = await getGifs('hacker');
        expect(gifs.length).toBe(10);
    })
});