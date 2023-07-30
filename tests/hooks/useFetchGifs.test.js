import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { renderHook, waitFor } from '@testing-library/react';

describe('Test suite for useFetchGifs hook', () => { 
    test('should return initial state', () => { 
        const {result} = renderHook(()=> useFetchGifs('Cyberpunk'));
        //the renderHook return the result with a current property.
        const {gifs, isLoading} = result.current;
        expect(gifs.length).toBe(0);
        expect(isLoading).toBe(true);
     });
     test('It should return an array of gif objects and isLoading should be false', async () => {
        const {result} = renderHook(()=> useFetchGifs('Cyberpunk'));
        await waitFor(() => {
            expect(result.current.gifs.length).toBeGreaterThan(0);
        })
        const {gifs, isLoading} = result.current;
        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBe(false);
     })
 })