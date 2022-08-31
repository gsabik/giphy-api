import { useState } from "react";
import { Link } from "react-router-dom";
import InputCategory from "./InputCategory";
import GifContainer from "./GifContainer";
import NavBar from "./NavBar";

const Home = () => {
    const [category, setCategory] = useState("");

    return (
        <>
            <NavBar/>
            <div className="flex flex-col justify-center items-center py-4 w-full">
                <InputCategory
                    category={category}
                    setCategory={setCategory}
                />
            </div>
            <GifContainer
                category={category}
            />
        </>
    )
}

export default Home