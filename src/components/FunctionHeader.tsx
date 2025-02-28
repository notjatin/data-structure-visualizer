interface FunctionHeaderProps {
  methods: string[];
}
const FunctionHeader: React.FC<FunctionHeaderProps> = ({ methods }) => {
  return (
    <ul className="w-2/3 h-full flex items-center justify-start">
      {methods.map((item, index) => (
        <li
          key={index}
          className="bg-gray-700 text-gray-300 border-4 border-gray-500 w-24 h-12 ml-8 text-center content-center rounded-lg"
        >
          <button
            className="h-full w-full tracking-wider hover:tracking-widest transition-all"
            onClick={() => {
              console.log(`${item} clicked`);
            }}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FunctionHeader;
