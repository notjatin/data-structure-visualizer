import React from "react";
import { AiFillDelete } from "react-icons/ai";

interface ItemBoxProps {
  text: string;
  onBoxDelete: (text: string) => void;
}

const ItemBox: React.FC<ItemBoxProps> = ({ text, onBoxDelete }) => {
  if (text.length !== 2) {
    return null;
  }
  function handleBoxDelete() {
    onBoxDelete(text);
  }

  return (
    <div className="relative flex items-center justify-center w-16 h-16 bg-gray-200 text-gray-800 font-bold text-xl">
      {text}
      <button
        className="h-auto w-fit absolute top-0 right-0 p-1 text-red-500 hover:text-red-700"
        onClick={handleBoxDelete}
      >
        <AiFillDelete />
      </button>
    </div>
  );
};

export default ItemBox;
