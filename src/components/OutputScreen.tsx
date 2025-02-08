import ItemBox from "./ItemBox";

interface OutputScreenProps {
  items: string[];
}

const OutputScreen: React.FC<OutputScreenProps> = ({ items }) => {
  return (
    <div className="bg-gray-600 h-full grid-background flex flex-wrap gap-2 p-2 justify-center items-center">
      {items.length &&
        items.map((item, index) => <ItemBox key={index} text={item} />)}
    </div>
  );
};

export default OutputScreen;
