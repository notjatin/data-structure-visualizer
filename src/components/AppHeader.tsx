import { StructureType, SubStructureType } from "../types/headerData";
import StructureHeader from "./StructureHeader";
import FunctionHeader from "./FunctionHeader";

interface AppHeaderProps {
  headerData: StructureType[];
  selectedStructure: StructureType;
  // onStructureChange: (selectedItem: SubStructureType) => void;
  onStructureChange: React.Dispatch<React.SetStateAction<StructureType>>;
  selectedSubStructure: SubStructureType;
  onSubStructureChange: React.Dispatch<React.SetStateAction<SubStructureType>>;
}
const AppHeader: React.FC<AppHeaderProps> = ({
  headerData,
  selectedStructure,
  onStructureChange,
  selectedSubStructure,
  onSubStructureChange,
}) => {
  return (
    <header className="bg-gray-800 col-span-2 flex h-full">
      <StructureHeader
        headerData={headerData}
        selectedStructure={selectedStructure}
        onStructureChange={onStructureChange}
        selectedSubStructure={selectedSubStructure}
        onSubStructureChange={onSubStructureChange}
      />
      <FunctionHeader methods={selectedStructure.methods} />
    </header>
  );
};

export default AppHeader;
