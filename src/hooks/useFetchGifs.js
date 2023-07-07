import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
/**
 * Custom hook that fetches gifs based on a given category.
 *
 * @param {string} category - The category of gifs to fetch.
 * @return {object} An object containing the fetched gifs and a loading state.
 */
export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([]); // Initialize state for gifs
    const [isLoading, setIsLoading] = useState(true); // Initialize state for loading

    // Define fetchGifs function to fetch gifs asynchronously
    const fetchGifs = async () => {
        const newGifs = await getGifs(category); // Call getGifs function to fetch gifs
        setGifs(newGifs); // Update gifs state with fetched gifs
        setIsLoading(false); // Set loading state to false
    };

    // Use useEffect hook to fetch gifs when component mounts
    useEffect(() => {
        fetchGifs(); // Call fetchGifs function
    }, []);

    return {
        gifs, // Return gifs state
        isLoading, // Return loading state
    };
};
