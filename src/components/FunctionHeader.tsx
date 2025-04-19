interface FunctionHeaderProps {
  methods: string[];
}
const FunctionHeader: React.FC<FunctionHeaderProps> = ({ methods }) => {
  function handleMethodClick(method: string) {}
  return (
    <ul className="h-20 flex items-center justify-start">
      {/* map over the methods and display them */}
      {methods.map((method, index) => (
        <li
          key={index}
          className="bg-gray-700 text-gray-300 border-4 border-gray-500 w-24 h-12 ml-8 text-center content-center rounded-lg"
        >
          <button
            className="h-full w-full tracking-wider hover:tracking-widest transition-all"
            onClick={() => {
              console.log(`${method} clicked`);
              handleMethodClick(method);
            }}
          >
            {method}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FunctionHeader;
