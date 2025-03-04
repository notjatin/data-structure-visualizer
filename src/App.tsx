import "./App.css";
import headerData from "./data/headerData.json";
import AppHeader from "./components/AppHeader";
import InfoScreen from "./components/InfoScreen";
import OutputScreen from "./components/OutputScreen";
import { useEffect, useState } from "react";
import { StructureType, SubStructureType } from "./types/headerData";

function App() {
  const [selectedStructure, setSelectedStructure] = useState<StructureType>(
    headerData[0]
  );
  const [selectedSubStructure, setSelectedSubStructure] =
    useState<SubStructureType>(headerData[0].types[0] || null);

  // reset sub-structure when main structure changes
  useEffect(() => {
    setSelectedSubStructure(selectedStructure.types[0] || null);
  }, [selectedStructure]);

  return (
    <main className="h-lvh w-full grid grid-cols-[1fr_2fr] grid-rows-[1fr_9fr] font-mono">
      <AppHeader
        headerData={headerData}
        selectedStructure={selectedStructure}
        onStructureChange={setSelectedStructure}
        selectedSubStructure={selectedSubStructure}
        onSubStructureChange={setSelectedSubStructure}
      />
      <InfoScreen
        structureDesc={selectedStructure.desc}
        subStructureDesc={selectedSubStructure ? selectedSubStructure.desc : ""}
      />
      <OutputScreen />
    </main>
  );
}

export default App;
