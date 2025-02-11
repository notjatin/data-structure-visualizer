import { useState } from "react";
import "./App.css";
import FunctionHeader from "./components/FunctionHeader";
import OutputScreen from "./components/OutputScreen";

function App() {
  const [itemArray, setItemArray] = useState<string[]>([]);

  const handleInsertBox = (value: string) => {
    console.log("Inserting new box...");
    let newItemArray = itemArray.slice();
    if (itemArray.includes(value)) {
      console.log("Item already exists in the array.");
      return;
    }
    newItemArray.push(value);
    setItemArray(newItemArray);
  };

  const handleBoxDelete = (value: string) => {
    console.log("Delete a box...");
    let newItemArray = itemArray.filter((item) => item !== value);
    setItemArray(newItemArray);
  };

  const handleBoxUpdate = (oldValue: string, newValue: string) => {
    console.log(`Update value ${oldValue}`);
    if (itemArray.includes(newValue)) {
      console.log(newValue + " already exists in the array.");
      return;
    }
    let newItemArray = itemArray.map((item) =>
      item === oldValue ? newValue : item
    );
    setItemArray(newItemArray);
  };

  return (
    <div className="h-lvh flex flex-col font-mono">
      <FunctionHeader onInsertBox={handleInsertBox} />
      <OutputScreen
        items={itemArray}
        onBoxDelete={handleBoxDelete}
        onBoxUpdate={handleBoxUpdate}
      />
    </div>
  );
}

export default App;
