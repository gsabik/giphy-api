import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import AppRouter from "./router/AppRouter";

const GiphyApp = () => {
    return (
        <FavoritesProvider>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>        
        </FavoritesProvider>
    )
}

export default GiphyApp