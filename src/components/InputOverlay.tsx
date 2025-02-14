import React, { useState } from "react";
import { BiCheck, BiX } from "react-icons/bi";

interface InputOverlayProps {
  onDone: (value: string) => void;
  onCancel: (state: boolean) => void;
}

const InputOverlay: React.FC<InputOverlayProps> = ({ onDone, onCancel }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 2 || event.target.value.includes(" ")) {
      return;
    }
    setInputValue(event.target.value);
  };

  const handleDone = () => {
    console.log("Input Value:", inputValue);
    // Add your done logic here
    onDone(inputValue);
  };

  const handleCancel = () => {
    setInputValue("");
    // Add your cancel logic here
    onCancel(false);
  };

  return (
    <div className="bg-gray-200 p-4 min-w-48 grid grid-cols-1 grid-rows-2 mx-auto border rounded-lg items-center">
      <input
        type="text"
        placeholder="Enter"
        value={inputValue}
        onChange={handleInputChange}
        className="w-36 h-10 p-2 text-gray-700 border rounded-lg text-center m-auto"
      />
      <div className="flex justify-between m-4">
        <button
          onClick={handleDone}
          className="bg-gray-500 w-fit h-10 text-white px-4 py-2 rounded-lg"
        >
          <BiCheck />
        </button>
        <button
          onClick={handleCancel}
          className="bg-gray-500 w-fit h-10 text-white px-4 py-2 rounded-lg"
        >
          <BiX />
        </button>
      </div>
    </div>
  );
};

export default InputOverlay;
