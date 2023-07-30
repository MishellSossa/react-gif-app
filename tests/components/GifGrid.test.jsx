import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test suite for GidGrid Component', () => {
    const category = 'Test Category';
    test('should show the loading when the component is loaded', () => {
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true,
        });
        render(<GifGrid category={category} />);
        expect(screen.getByText(category)).toBeTruthy();
        expect(screen.getByText('Loading...')).toBeTruthy();
    });

    test('should show the images when the component is loaded', () => {
        const category = 'Test Category';
        useFetchGifs.mockReturnValue({
            gifs: [
                {
                    id: 'ABC',
                    title: 'Test Title',
                    url: 'https://testurl.com',
                },
                {
                    id: 'DEF',
                    title: 'Test Title',
                    url: 'https://testurl.com', 
                },
            ],
            isLoading: false,
        });
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
    });
});
