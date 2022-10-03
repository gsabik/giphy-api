import { Link } from "react-router-dom";

const NothingInFavorites = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center space-y-4">
            <h2 className="text-3xl">Nothing in favorites!</h2>
            <Link className="underline text-gray-500" to="/">View gifs</Link>
        </div>
    );
}

export default NothingInFavorites