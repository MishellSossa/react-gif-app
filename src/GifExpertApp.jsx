import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// Function component that renders the GifExpertApp
const GifExpertApp = () => {
    // State variable to store the categories
    const [categories, setCategories] = useState(['Cyberpunk']);

    // Function to add a new category to the list
    const onAddCategory = (value) => {
        // Check if the category already exists in the list
        if (!categories.includes(value)) {
            // Add the new category at the beginning of the list
            setCategories([value, ...categories]);
        }
    };

    // Render the component
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};

export default GifExpertApp;
