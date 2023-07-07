import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        //comunica con el padre aqui
        event.preventDefault();
        const cleanValue = inputValue.trim();
        if (cleanValue.length < 2) return;
        onNewCategory(cleanValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar Gif"
                onChange={handleInputChange}
                value={inputValue}
            />
        </form>
    );
};
