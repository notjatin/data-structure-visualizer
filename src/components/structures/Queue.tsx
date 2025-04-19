import { useState } from "react";
import { FaGripLinesVertical } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

interface QueueProps {
  methods: string[];
}

const Queue: React.FC<QueueProps> = ({ methods }) => {
  // state to store current elements
  const [items, setItems] = useState<string[]>([]);
  // variable to store count of elements
  const itemCount = items.length;

  function enqueue(item: string) {
    const newItems = [...items];
    newItems.push(item);
    setItems(newItems);
  }

  function dequeue() {
    const newItems = [...items];
    newItems.shift();
    setItems(newItems);
  }

  function handleMethodClick(method: string) {
    console.log(method);
    switch (method) {
      case "enqueue":
        enqueue("hi");
        break;
      case "dequeue":
        dequeue();
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
        <div className="flex flex-row-reverse gap-2 w-full">
          {Array.from({ length: itemCount }).map((_, index) => {
            return <FaPerson key={index} size={50} />;
          })}
        </div>
        {/* never changes */}
        <FaGripLinesVertical size={100} className="m-5" />
      </div>
    </div>
  );
};

export default Queue;
