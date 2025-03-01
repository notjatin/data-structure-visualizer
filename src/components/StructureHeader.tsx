import { StructureType, SubStructureType } from "../types/headerData";
import DropDown from "./DropDown";

interface StructureHeaderProps {
  headerData: StructureType[];
  selectedStructure: StructureType;
  onStructureChange: React.Dispatch<React.SetStateAction<StructureType>>;
  selectedSubStructure: SubStructureType;
  onSubStructureChange: React.Dispatch<React.SetStateAction<SubStructureType>>;
}
const StructureHeader: React.FC<StructureHeaderProps> = ({
  headerData,
  selectedStructure,
  onStructureChange,
  onSubStructureChange,
}) => {
  return (
    <div className="w-1/3 flex justify-evenly items-center p-2">
      <DropDown
        label="Main Structure"
        options={headerData}
        onChange={onStructureChange}
        getLabel={(item) => item.label}
      />
      {selectedStructure.types.length > 0 && (
        <DropDown
          label="Sub Structure"
          options={selectedStructure.types}
          onChange={onSubStructureChange}
          getLabel={(item) => item.label}
        />
      )}
    </div>
  );
};

export default StructureHeader;
