import { useState } from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({target}) => {
        setInputValue(target.value);
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
        <form onSubmit={handleSubmit} aria-label='form'>
            <input
                type="text"
                placeholder="Buscar Gif"
                onChange={handleInputChange}
                value={inputValue}
            />
        </form>
    );
};
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}