import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
/**
 * GifGrid component renders a grid of GIFs for a specific category.
 *
 * @param {string} category - The category of GIFs to display.
 * @returns {JSX.Element} - The GifGrid component.
 */
export const GifGrid = ({ category }) => {
    // Call the useFetchGifs custom hook to fetch GIFs and loading state
    const { gifs, isLoading } = useFetchGifs(category);

    return (
        <>
            {/* Render the category as a heading */}
            <h3>{category}</h3>

            {/* Render the GIFs in a grid */}
            <div className="card-grid">
                {gifs.map((gif) => (
                    <GifItem key={gif.id} {...gif} />
                ))}
            </div>
        </>
    );
};
