import React, { useState } from "react";
import Box from "../Box";
interface ArrayProps {
  methods: string[];
}
const Array: React.FC<ArrayProps> = ({ methods }) => {
  const [items, setItems] = useState<string[]>([]);
  const noOfItems = items.length;

  function insertItem() {}
  function updateItem() {}
  function deleteItem() {}
  function searchItem() {}

  function handleMethodClick(method: string) {
    console.log(`${method} clicked`);

    switch (method) {
      case "insert":
        break;
      case "delete":
        break;
      case "update":
        break;
      case "search":
        break;
      default:
        console.error("No such method !");
    }
  }

  return (
    <section>
      <div className="bg-gray-700 text-white flex gap-10 w-full h-24 justify-center items-center">
        {methods.map((method, index) => {
          return (
            <button
              key={index}
              onClick={() => handleMethodClick(method)}
              className="bg-gray-800 rounded-md p-2 pl-4 pr-4 hover:bg-gray-200 hover:text-gray-800 transition-all h-fit w-fit"
            >
              {method}
            </button>
          );
        })}
      </div>
      <div>
        <Box type="search" placeholder="search ..." />
        <Box type="insert" placeholder="insert ..." />
      </div>
    </section>
  );
};

export default Array;
