import React from "react";
import { AiFillCheckSquare, AiFillDelete, AiOutlineEdit } from "react-icons/ai";

interface ItemBoxProps {
  text: string;
  onBoxDelete: (text: string) => void;
  onBoxUpdate: (item: string, newValue: string) => void;
}

const ItemBox: React.FC<ItemBoxProps> = ({
  text,
  onBoxDelete,
  onBoxUpdate,
}) => {
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(text);

  if (text.length !== 2) {
    return null;
  }

  function handleBoxDelete() {
    onBoxDelete(text);
  }

  function handleBoxUpdate() {
    setIsUpdating(false);
    console.log(`try to update ${text} to ${inputValue}`);
    onBoxUpdate(text, inputValue);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    if (event.target.value.length > 2 || event.target.value.includes(" ")) {
      return;
    }
    setInputValue(event.target.value);
  }

  return (
    <div className="relative flex items-center justify-center w-16 h-16 bg-gray-200 text-gray-800 font-bold text-xl">
      {isUpdating ? (
        <>
          {" "}
          <input
            value={inputValue}
            type="text"
            className="max-w-12 h-8 border-none text-center text-black p-2 rounded-md"
            onChange={handleInputChange}
          />
          <AiFillCheckSquare
            className="absolute top-0 left-0 text-green-500 cursor-pointer"
            onClick={handleBoxUpdate}
          />
        </>
      ) : (
        <>
          <AiFillDelete
            className="absolute top-0 right-0 text-red-500 cursor-pointer"
            onClick={handleBoxDelete}
          />
          <AiOutlineEdit
            className="absolute top-0 left-0 text-blue-500 cursor-pointer"
            onClick={() => setIsUpdating(true)}
          />
          {text}
        </>
      )}
    </div>
  );
};

export default ItemBox;
