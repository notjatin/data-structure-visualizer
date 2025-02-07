import React from "react";

interface ItemBoxProps {
  text: string;
}

const ItemBox: React.FC<ItemBoxProps> = ({ text }) => {
  if (text.length !== 2) {
    return null;
  }

  return (
    <div className="flex items-center justify-center w-16 h-16 bg-gray-200 text-gray-800 font-bold text-xl">
      {text}
    </div>
  );
};

export default ItemBox;
