export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=B7eQB82kA2va89VpHj7Mm5QhQ83l9oGd&q=${category}&limit=5`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifsInfo = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url,
        };
    });
    return gifsInfo;
};
