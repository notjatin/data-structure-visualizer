import { useState } from "react";
import { Button, Input } from "./InterectiveComponents";
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
  const [value, setValue] = useState("enter value here");

  return (
    <div className="w-full h-full bg-green-300 flex">
      <div className="w-3/6 h-full flex flex-col justify-evenly items-center">
        <Input value={value} setValue={setValue} />
        <Button onClick={() => handleOperation(currentOperation, value)}>
          {currentOperation}
        </Button>
      </div>
      <div className="w-1/6 inline-flex justify-center items-center">
        <BiUndo
          size={50}
          className="text-green-200 border-4 border-green-200 rounded-md bg-slate-500"
          onClick={() => setCurrentOperation(undefined)}
        />
      </div>
    </div>
  );
};
export default DataHolder;
