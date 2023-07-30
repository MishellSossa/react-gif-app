import {render, screen, fireEvent} from '@testing-library/react';
import GifExpertApp from '../src/GifExpertApp';

describe('Test Suite for GifExpertApp', () => {
    test('should match the snapshot', () => {
        render(<GifExpertApp />);
        expect(screen).toMatchSnapshot();

    });
    test('It should render the GifExpertApp', () => {
        render(<GifExpertApp />);
        expect(screen.getByText('GifExpertApp')).toBeTruthy();
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain('GifExpertApp');
        expect(screen.getByRole('form')).toBeTruthy();
    })

    test('It should call onAddCategory when the user types a new category', () => {
        render(<GifExpertApp />);
        expect(screen.getByText('Cyberpunk')).toBeTruthy();

        const newCategory = 'Animals';
        const inputElement = screen.getByRole('textbox');
        const formElement = screen.getByRole('form');
        fireEvent.input(inputElement, {
            target: { value: newCategory }
        })
        fireEvent.submit(formElement);
        expect(screen.getByText(newCategory)).toBeTruthy();
    })
    test('It should not add duplicate categories', () => {
        render(<GifExpertApp />);
        
        const initialCategory = 'Cyberpunk';
        expect(screen.getByText(initialCategory)).toBeTruthy();
        
        const inputElement = screen.getByRole('textbox');
        const formElement = screen.getByRole('form');
        fireEvent.input(inputElement, {
            target: { value: initialCategory }
        })
        fireEvent.submit(formElement);
        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(1);
    })
})