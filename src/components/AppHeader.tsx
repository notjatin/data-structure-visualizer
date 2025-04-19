import { StructureType, SubStructureType } from "../types/headerData";
import StructureHeader from "./StructureHeader";

// to type the AppHeader props
interface AppHeaderProps {
  headerData: StructureType[];
  selectedStructure: StructureType;
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
    <header className="bg-gray-800 flex h-full">
      {/* Header to display the structure and substructure */}
      <StructureHeader
        headerData={headerData}
        selectedStructure={selectedStructure}
        onStructureChange={onStructureChange}
        selectedSubStructure={selectedSubStructure}
        onSubStructureChange={onSubStructureChange}
      />
    </header>
  );
};

export default AppHeader;
