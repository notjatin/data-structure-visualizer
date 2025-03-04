import { useState } from "react";

interface DropDownProps<T> {
  label: string;
  options: T[];
  onChange: (item: T) => void;
  // onChange: React.Dispatch<React.SetStateAction<T>>;
  getLabel: (item: T) => string;
  placeHolder?: string;
}
const DropDown = <T,>({
  label,
  options,
  onChange,
  getLabel,
  placeHolder = `Select ${label}`,
}: DropDownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  function onOptionClick(label: string) {
    // find the label in the options using getLabel method
    const selectedOption = options.find((option) => getLabel(option) === label);
    selectedOption && onChange(selectedOption);
    // update the selected option UI
    setSelectedOption(label);
    setIsOpen(false);
  }
  return (
    <div className="w-36 p-2 rounded-md text-gray-200 bg-gray-600">
      <div
        className="relative text-center cursor-pointer font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || placeHolder}
      </div>
      {isOpen && (
        <div className="absolute w-36 mt-4 -ml-2 rounded-md text-center bg-gray-600 text-gray-200">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-4 rounded-md border-b-2 border-gray-100 hover:bg-gray-800 cursor-pointer"
              onClick={() => onOptionClick(getLabel(option))}
            >
              {getLabel(option)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default DropDown;
