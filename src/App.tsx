import { useState } from "react";
import "./App.css";
import FunctionHeader from "./components/FunctionHeader";
import OutputScreen from "./components/OutputScreen";

function App() {
  const [itemArray, setItemArray] = useState<string[]>([]);

  const handleInsertBox = () => {
    console.log("Inserting new box...");
    let newItemArray = itemArray.slice();
    newItemArray.push("hi");
    setItemArray(newItemArray);
  };

  return (
    <div className="h-lvh flex flex-col font-mono">
      <FunctionHeader onInsertBox={handleInsertBox} />
      <OutputScreen items={itemArray} />
    </div>
  );
}

export default App;
