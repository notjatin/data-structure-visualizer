import { StructureType } from "../types/headerData";
import LinkedList from "./structures/LinkedList";
import Queue from "./structures/Queue";
import Stack from "./structures/Stack";

// prop types
interface OutputScreenProps {
  structure: StructureType;
}

// component
const OutputScreen: React.FC<OutputScreenProps> = ({ structure }) => {
  console.log(structure.name);
  return (
    <div className="row-span-2">
      {/* render main component of the respective structure */}

      {structure.name === "queue" && <Queue methods={structure.methods} />}
      {structure.name === "stack" && <Stack methods={structure.methods} />}
      {structure.name === "linked-list" && (
        <LinkedList methods={structure.methods} />
      )}
      {/* {structure.name === "array" && <Array methods={structure.methods} />} */}
    </div>
  );
};

export default OutputScreen;
