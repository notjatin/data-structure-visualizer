import { useState } from "react";
import "./App.css";
import InfoSection from "./components/InfoSection";
import ShowCase from "./components/ShowCase";
import UtilitySection from "./components/UtilitySection";
import { InputProvider } from "./contexts/InputContext";
import { operationType } from "./Types";

function App() {
  const [structure, setStructure] = useState("array");
  const [array, setArray] = useState<Array<number>>([]);

  // method to handle key according to the operation
  const handleOperation = (operation: operationType, value: string): void => {
    if (parseInt(value) > 0) {
      console.log(`validated ${value}`);

      console.log(`using operation ${operation} with key ${value}.`);
      switch (operation) {
        case "insert":
          if (array.includes(parseInt(value))) {
            console.log(`${value} already there. Give a unique one`);
          } else {
            setArray((oldArray) => [...oldArray, parseInt(value)]);
          }
          break;
        case "search":
          console.log(`searching for ${value}`);
          break;
        case "delete":
          console.log(`deleting ${value}`);
          break;
        case "modify":
          console.log(`modifying ${value}`);
          break;
        default:
          throw new Error("Specify valid operation.");
      }
    } else {
      console.log(`${value} not valid.`);
    }
  };

  return (
    <>
      {/* just use the default three window style. */}
      <main className="w-lvw h-lvh md:grid md:grid-rows-[1fr_1fr] md:grid-cols-[5fr_2fr] md:gap-1 md:p-1">
        <section className="row-span-2 w-full h-5/6 md:h-full bg-green-50 bg-gradient-to-r from-gray-300 from-[1px] to-transparent to-[1px] bg-[length:2rem_2rem] bg-centershadow shadow-sm shadow-green-900 ">
          <ShowCase
            structure={structure}
            setStructure={setStructure}
            array={array}
          />
        </section>
        <section className="shadow-sm shadow-green-300 h-1/6 md:h-full w-full flex flex-col rounded-sm">
          <div className="hidden bg-green-100">
            <InfoSection />
          </div>
          <div className="h-full w-full bg-green-200 flex items-center overflow-auto">
            <InputProvider>
              <UtilitySection handleOperation={handleOperation} />
            </InputProvider>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
