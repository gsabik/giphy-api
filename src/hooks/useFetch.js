import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

const useFetch = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newGifs = await getGifs(category);
        setGifs(newGifs);
        setIsLoading(false);
    }

    useEffect(()=> {
        getImages();
    }, [category]);

    return {
        gifs,
        isLoading
    }
}

export default useFetch