import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('test in useFetchGifs hooks', () => {
    test('should return initial state', () => {
        // const { data:images, loading } = useFetchGifs('death');
        const { result } = renderHook(() => useFetchGifs('death'));
        const { data:images, loading } = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
});