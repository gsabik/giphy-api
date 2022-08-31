import useFetch from "../hooks/useFetch";
import GifCard from "./GifCard";

const GifGrid = ({ category }) => {
    const { gifs, isLoading } = useFetch(category);

    console.log(gifs);
    
    return (
        <div className="max-w-screen-xl mx-auto">
            {
                gifs.map(gif => (
                    <GifCard
                        key={gif.id}
                        {...gif}
                    />
                ))
            }
        </div>
    )
}

export default GifGrid