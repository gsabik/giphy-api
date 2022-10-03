import { useState } from "react";
import InputCategory from "./InputCategory";
import GifContainer from "./GifContainer";
import NavBar from "./NavBar";

const Home = () => {
    const [category, setCategory] = useState("");

    return (
        <div className="max-w-screen-lg mx-auto">
            <NavBar/>
            <div className="flex justify-center w-full">
                <InputCategory
                    category={category}
                    setCategory={setCategory}
                />
            </div>
            <GifContainer
                category={category}
            />
        </div>
    );
}

export default Home