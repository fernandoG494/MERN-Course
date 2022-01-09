import { getGifs } from "../../helpers/getGifs";

describe('getGifs testing', () => {
    test('should have 10 elements', () => {
        const gifs = await getGifs('hacker');
        expect(gifs.length).toBe(10);
    })
});