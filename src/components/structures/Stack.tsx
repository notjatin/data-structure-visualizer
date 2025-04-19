import { useState } from "react";
import { LuRectangleHorizontal } from "react-icons/lu";
import { TfiLineDouble } from "react-icons/tfi";

interface StackProps {
  methods: string[];
}

const Stack: React.FC<StackProps> = ({ methods }) => {
  // state to store stack elements
  const [items, setItems] = useState<string[]>([]);
  const noOfItems = items.length;

  function isEmpty() {
    return noOfItems === 0;
  }

  function push() {
    let newItems = [...items];
    newItems.push("hi");
    setItems(newItems);
  }

  function pop() {
    let newItems = [...items];
    newItems.pop();
    setItems(newItems);
  }

  function handleMethodClick(method: string) {
    console.log(method);
    switch (method) {
      case "isEmpty":
        return isEmpty();
      case "push":
        push();
        break;
      case "pop":
        pop();
        break;
      default:
        console.error("No such method !");
    }
  }

  return (
    <div className="bg-blue-400 w-full h-full flex flex-col items-center">
      <div className="bg-blue-700 h-[17%] w-full">
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
      <div className="bg-gray-400 m-20 flex flex-col h-full w-80 items-center">
        {/* div to render stack elements */}
        <div className="h-4/5 flex flex-col-reverse">
          {Array.from({ length: noOfItems }).map((_, index) => {
            return <LuRectangleHorizontal key={index} size={50} />;
          })}
        </div>
        <TfiLineDouble size={150} />
      </div>
    </div>
  );
};

export default Stack;
