import ItemBox from "./ItemBox";

interface OutputScreenProps {
  items: string[];
  onBoxDelete: (text: string) => void;
  onBoxUpdate: (text: string, newValue: string) => void;
}

const OutputScreen: React.FC<OutputScreenProps> = ({
  items,
  onBoxDelete,
  onBoxUpdate,
}) => {
  const handleBoxUpdate = (oldValue: string, newValue: string) => {
    if (oldValue === newValue) {
      return;
    }
    onBoxUpdate(oldValue, newValue);
  };
  return (
    <div className="bg-gray-600 h-full grid-background flex flex-wrap gap-2 p-2 justify-center items-center">
      {items.length &&
        items.map((item, index) => (
          <ItemBox
            key={index}
            text={item}
            onBoxDelete={onBoxDelete}
            onBoxUpdate={handleBoxUpdate}
          />
        ))}
    </div>
  );
};

export default OutputScreen;
