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
  selectedSubStructure,
  onSubStructureChange,
}) => {
  return (
    <>
      <DropDown
        label="Main Structure"
        options={headerData}
        selected={selectedStructure}
        onChange={onStructureChange}
        getLabel={(item) => item.label}
      />
      {selectedStructure.types.length > 0 && (
        <DropDown
          label="Sub Structure"
          options={selectedStructure.types}
          selected={selectedSubStructure}
          onChange={onSubStructureChange}
          getLabel={(item) => item.label}
        />
      )}
    </>
  );
};

export default StructureHeader;
