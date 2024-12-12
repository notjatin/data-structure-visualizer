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
  const [value, setValue] = useState("value");

  return (
    <div className="h-full w-full grid grid-cols-2 grid-rows-2">
      <div className="row-span-2 md:col-span-2 flex items-center justify-center">
        <Input value={value} setValue={setValue} />
      </div>
      <div className="flex items-center justify-center">
        <Button onClick={() => handleOperation(currentOperation, value)}>
          {currentOperation}
        </Button>
      </div>
      <div className="flex items-center justify-center">
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
