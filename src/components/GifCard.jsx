import { useContext } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FavoritesContext } from "../context/FavoritesContext";

const GifCard = ({ id, title, img, url }) => {
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
    );
}

export default GifCard