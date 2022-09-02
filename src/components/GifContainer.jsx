import useFetch from "../hooks/useFetch";
import GifCard from "./GifCard";
import Spinner from "./Spinner";

const GifGrid = ({ category }) => {
    const { gifs, isLoading } = useFetch(category);

    console.log(gifs);
    
    return (
        <div className="flex flex-col py-4">
            <h2 className="text-2xl font-semibold pt-4">Trending</h2>
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
        </div >
    )
}

export default GifGrid