const getGifs = async(category) => {
    const url = category ? `https://api.giphy.com/v1/gifs/search?api_key=ZfRjbKSUJ64RYmmX81gs8bkytKcN2M6I&q=${category}&limit=20` : "https://api.giphy.com/v1/gifs/trending?api_key=ZfRjbKSUJ64RYmmX81gs8bkytKcN2M6I&limit=20";
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(gif => ({
        id: gif.id,
        url: gif.url,
        img: gif.images.downsized_medium.url
    }));

    return gifs;
}

export default getGifs