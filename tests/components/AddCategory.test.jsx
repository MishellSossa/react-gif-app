import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';
describe('Test suite for AddCategory', () => {
    test('Should change the value of the input', () => {
        render(<AddCategory onNewCategory={() => {}}/>);
        //screen.debug(); 
        const inputText = screen.getByRole('textbox');
        //here we are calling the function handleInputChange from the component which trigger the setInputValue of the state
        fireEvent.input(inputText, {
            target: { value: 'Hola' }
        })
        expect(inputText.value).toBe('Hola');
    })

    test('Should call onNewCategory prop when the input has a value', () => {
        const inputValue = 'Hola';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
        
        const inputText = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(inputText, {
            target: { value: inputValue }
        })
        fireEvent.submit(form);
        
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        expect(inputText.value).toBe('');
    })

    test('Should not call onNewCategory prop when the input is empty', () => {
        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');
      
        fireEvent.submit(form);
        
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });

    test('Should not call onNewCategory prop when the input is less than 2 chars', () => {
        const onNewCategory = jest.fn();
        const inputValue = 'a';

        render(<AddCategory onNewCategory={onNewCategory}/>);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {
            target: { value: inputValue }
        });
        fireEvent.submit(form);
        expect(onNewCategory).not.toHaveBeenCalled();
    })
})