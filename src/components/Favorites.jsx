import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import NavBar from "./NavBar";
import NothingInFavorites from "./NothingInFavorites";
import { AiFillStar } from "react-icons/ai";

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
                            <a 
                                href={url} 
                                className="text-lg text-center text-gray-500 truncate w-2/6" 
                                rel="noopener" 
                                target="_blank"
                            >{url}</a>
                                <button 
                                    onClick={() => deleteGif(id)}
                                >
                                    <AiFillStar size={20}/>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Favorites