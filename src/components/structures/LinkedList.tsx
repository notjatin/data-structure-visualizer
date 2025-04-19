import { useState } from "react";
import { FaCircle, FaLongArrowAltRight } from "react-icons/fa";

interface LinkedListProps {
  methods: string[];
}

const LinkedList: React.FC<LinkedListProps> = ({ methods }) => {
  // state to store current elements
  const [items, setItems] = useState<string[]>([]);
  // variable to store count of elements
  const itemCount = items.length;

  function insert(item: string) {
    const newItems = [...items];
    newItems.push(item);
    setItems(newItems);
  }

  function deleteItem() {
    const newItems = [...items];
    newItems.shift();
    setItems(newItems);
  }

  function handleMethodClick(method: string) {
    console.log(method);
    switch (method) {
      case "insert":
        insert("hi");
        break;
      case "delete":
        deleteItem();
        break;
      default:
        console.error("No such method !");
    }
  }
  return (
    <div className="bg-blue-400 flex items-center">
      <div className="">
        {methods.map((method, index) => (
          <button
            className="bg-gray-600 text-white rounded-sm"
            onClick={() => handleMethodClick(method)}
            key={index}
          >
            {method}
          </button>
        ))}
      </div>
      <div className="bg-gray-500 w-full h-32 m-20 flex items-center">
        {/* render insertions in the div below. */}
        <div className="flex flex-row gap-2">
          {Array.from({ length: itemCount }).map((_, index) => {
            return <FaLongArrowAltRight key={index} size={50} />;
          })}
        </div>
        {/* never changes */}
        <FaCircle size={100} className="m-5" />
      </div>
    </div>
  );
};

export default LinkedList;
