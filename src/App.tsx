import "./App.css";
import headerData from "./data/headerData.json";
import AppHeader from "./components/AppHeader";
import InfoScreen from "./components/InfoScreen";
import RenderStructure from "./components/RenderStructure";
import { useEffect, useState } from "react";
import { StructureType, SubStructureType } from "./types/headerData";

function App() {
  // state to store the structure on which we apply operation
  const [structure, setStructure] = useState<StructureType>(
    headerData[1] || null
  );

  // state to store the substructure on which we apply operation
  const [subStructure, setSubStructure] = useState<SubStructureType>(
    structure.types[0] || null
  );

  // reset sub-structure when main structure changes
  useEffect(() => {
    setSubStructure(structure.types[0]);
  }, [structure]);

  function handleSubStructureChange(
    value: React.SetStateAction<SubStructureType>
  ) {
    setSubStructure(value);
    if (value.name === "singly-linked-list") {
      // render linked-list component
    }
  }

  return (
    <main className="h-lvh w-full grid grid-cols-[1fr_2fr] grid-rows-[1fr_9fr] font-mono">
      {/* AppHeader renderds all the headers available to us. */}
      <AppHeader
        headerData={headerData}
        selectedStructure={structure}
        onStructureChange={setStructure}
        selectedSubStructure={subStructure}
        onSubStructureChange={handleSubStructureChange}
      />
      {/* This is where all the visible animations and dom manipulation take place. */}
      <RenderStructure structure={structure} />
      {/* InfoScreen displays important text information on the page. */}
      <InfoScreen
        structureDesc={structure.desc}
        subStructureDesc={subStructure ? subStructure.desc : ""}
      />
    </main>
  );
}

export default App;
