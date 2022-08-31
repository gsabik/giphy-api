import { Routes, Route } from "react-router-dom"
import Favorites from "../components/Favorites"
import Home from "../components/Home"

const AppRouter = () => {
    return (
        <div className="text-white bg-slate-900">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
            </Routes>
        </div>
    )
}

export default AppRouter