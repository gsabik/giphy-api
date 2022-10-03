import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="flex flex-row items-center justify-between py-4 w-full">
            <Link className="text-3xl font-bold" to="/">Giphy API</Link>
            <Link className="text-lg font-semibold" to="/favorites">Favorites</Link>
        </div>
    );
}

export default NavBar