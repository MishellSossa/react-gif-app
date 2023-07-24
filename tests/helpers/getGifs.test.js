import { getGifs } from '../../src/helpers/getGifs';
describe('Test Suite for Gif Item', () => {
    test('should return a list of gifs', async () => {
        const gifs = await getGifs('cyberpunk');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    })
})