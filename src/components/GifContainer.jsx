import useFetch from "../hooks/useFetch";
import GifCard from "./GifCard";
import Spinner from "./Spinner";

const GifGrid = ({ category }) => {
    const { gifs, isLoading } = useFetch(category);

    console.log(gifs);
    
    return (
        <div className="max-w-screen-xl mx-auto">
            {
                isLoading
                ?
                <Spinner/>
                :
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