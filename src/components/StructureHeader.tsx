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
    <div className="min-w-80 w-1/3 flex justify-evenly items-center p-2">
      <div>
        <label className="text-gray-800 text-center rounded-md bg-gray-300 mb-2">
          Structure
        </label>
        {/* Dropdown to selecte structure from */}
        <DropDown
          label="Main Structure"
          options={headerData}
          onChange={onStructureChange}
          getLabel={(item) => item.label}
        />
      </div>
      {selectedStructure.types.length > 0 && (
        <div>
          <label className="text-gray-800 text-center rounded-md bg-gray-300 mb-2">
            Structure Type
          </label>
          {/* Dropdown to selecte sub-structure from */}
          <DropDown
            label="Sub Structure"
            options={selectedStructure.types}
            onChange={onSubStructureChange}
            getLabel={(item) => item.label}
          />
        </div>
      )}
    </div>
  );
};

export default StructureHeader;
