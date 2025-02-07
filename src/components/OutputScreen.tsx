interface OutputScreenProps {
  items: string[];
}

const OutputScreen: React.FC<OutputScreenProps> = ({ items }) => {
  return (
    <div className="bg-gray-600 h-full grid-background">
      {items.length &&
        items.map((item, index) => <div key={index}>{item}</div>)}
    </div>
  );
};

export default OutputScreen;
