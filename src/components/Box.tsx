import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CgEnter } from "react-icons/cg";

interface BoxProps {
  type: string;
  placeholder: string;
}

const Box: React.FC<BoxProps> = ({ type, placeholder }) => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="flex justify-center items-center border-4 border-gray-600 w-36 h-10 rounded-md">
      <input
        placeholder={placeholder}
        className="border-none text-center"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="button"
        className="w-10"
        onClick={() => console.log(`${value} passed.`)}
      >
        {type === "search" && <BiSearch size={30} />}
        {type === "insert" && <CgEnter size={30} />}
      </button>
    </div>
  );
};

export default Box;
