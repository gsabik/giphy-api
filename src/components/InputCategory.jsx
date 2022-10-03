import { useState } from "react";

const InputCategory = ({ setCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = e => {
        setInputValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setCategory(inputValue);
        setInputValue("");
    }

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <input
                className="p-2 rounded-md bg-gray-700 w-full"
                type="text"
                onChange={handleInputChange}
                placeholder="Search gif"
                value={inputValue}
            />
        </form>
    );
}

export default InputCategory