import { FormEvent, useState } from "react";
import { BiUndo } from "react-icons/bi";
import { operationType } from "../Types";

interface DataHolderProps {
  handleOperation: (currentOperation: operationType, value: string) => void;
  currentOperation: operationType;
  setCurrentOperation: React.Dispatch<React.SetStateAction<operationType>>;
}
const DataHolder: React.FC<DataHolderProps> = ({
  handleOperation,
  currentOperation,
  setCurrentOperation,
}) => {
  const [value, setValue] = useState("value");

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleOperation(currentOperation, value);
  };

  const buttonClasses =
    "border-4 border-green-200 rounded-sm text-green-200 bg-slate-500 hover:bg-slate-600 transition-all p-2";

  return (
    <div className="h-full w-full grid grid-cols-2 grid-rows-2">
      <form onSubmit={onFormSubmit}>
        <div className="row-span-2 md:col-span-2">
          <input
            className="p-2 rounded-sm border-4 border-slate-500"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button className={buttonClasses} type="submit">
            {currentOperation}
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center">
        <button
          type="button"
          className={buttonClasses}
          onClick={() => setCurrentOperation(undefined)}
        >
          <BiUndo size={30} />
        </button>
      </div>
    </div>
  );
};
export default DataHolder;
