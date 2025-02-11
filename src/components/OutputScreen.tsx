import ItemBox from "./ItemBox";

interface OutputScreenProps {
  items: string[];
  onBoxDelete: (text: string) => void;
}

const OutputScreen: React.FC<OutputScreenProps> = ({ items, onBoxDelete }) => {
  return (
    <div className="bg-gray-600 h-full grid-background flex flex-wrap gap-2 p-2 justify-center items-center">
      {items.length &&
        items.map((item, index) => (
          <ItemBox key={index} text={item} onBoxDelete={onBoxDelete} />
        ))}
    </div>
  );
};

export default OutputScreen;
