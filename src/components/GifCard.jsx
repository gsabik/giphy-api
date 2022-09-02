import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const GifCard = ({ id, user, url, img }) => {
    const { addToFavorites, isInFavorites, deleteGif } = useContext(FavoritesContext);

    const handleAddToFavorites = () => {
        if (!isInFavorites(id)) {
            const addGif = {
                id, 
                url,
                img
            }
            addToFavorites(addGif);
        }
    }
   
    return (
        <div className="flex flex-col items-center py-4 space-y-4">
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
                {
                    isInFavorites(id)
                    ?
                    <button
                        onClick={() => {deleteGif(id)}}
                    >
                        <AiFillStar size={20}/>
                    </button>
                    :
                    <button
                        onClick={handleAddToFavorites}
                    >
                        <AiOutlineStar size={20}/>
                    </button>
                }
            </div>
        </div>
    )
}

export default GifCard