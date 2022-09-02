import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext([]);
export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");
        const parsedFavorites = JSON.parse(savedFavorites);
        return parsedFavorites || [];
    });

    //Add gif to facorites
    const addToFavorites = (gif) => {
        setFavorites([...favorites, gif])
    }

    //Check that a gif is already in favorites
    const isInFavorites = (id) => {
        return favorites.some(gif => gif.id === id)
    }

    //Delete all favorites
    const deleteAllFavorites = () => {
        return setFavorites([]);
    }

    //Delete unique gif
    const deleteGif = (id) => {
        return setFavorites(favorites.filter(gif => gif.id !== id))
    }

    //Set favorites in local storage
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    return (
        <FavoritesContext.Provider value={{
            addToFavorites,
            deleteAllFavorites,
            deleteGif,
            favorites, 
            isInFavorites,

        }}>
            {children}
        </FavoritesContext.Provider>
    )
}