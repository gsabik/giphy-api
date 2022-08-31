import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import NavBar from "./NavBar";
import NothingInFavorites from "./NothingInFavorites";

const Favorites = () => {
    const { favorites, deleteAllFavorites, deleteGif } = useContext(FavoritesContext);

    return (
        <>
            <NavBar/>

            <div className="max-w-screen-xl mx-auto">
                {
                    favorites.length === 0
                    ?
                    <NothingInFavorites/>
                    :
                    favorites.map(({ id, img, url }) => (
                        <div key={id} className="flex flex-col items-center py-4 space-y-4">
                            <img
                                className="w-3/4 rounded-lg"
                                src={img}
                            />
                            <div className="flex flex-row  justify-between w-3/4">
                                <p className="text-lg text-center text-gray-500 truncate w-2/6">{url}</p>
                                <button onClick={() => deleteGif(id)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Favorites