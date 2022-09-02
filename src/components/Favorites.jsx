import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import NavBar from "./NavBar";
import NothingInFavorites from "./NothingInFavorites";
import { AiFillStar } from "react-icons/ai";

const Favorites = () => {
    const { favorites, deleteAllFavorites, deleteGif } = useContext(FavoritesContext);

    return (
        <div className="max-w-screen-lg mx-auto">
            <NavBar/>
            {
                favorites.length === 0
                ?
                <NothingInFavorites/>
                :
                <div className="pt-4">
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="text-2xl font-semibold">Your favorites</h2>
                        <button className="bg-gray-700 p-2 rounded-lg" onClick={deleteAllFavorites}>Delete all</button>
                    </div>
                    {
                        favorites.map(({ id, title, img, url }) => (
                            <div key={id} className="flex flex-col items-center py-4 space-y-4">
                                <img
                                    alt={title}
                                    className="w-full rounded-lg"
                                    src={img}
                                />
                                <div className="flex flex-row justify-between w-full">
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
            }
        </div>
    )
}

export default Favorites