import { useState } from "react";
import "./App.css";
import DataDisplay from "./sections/DataDisplay";
import DataInput from "./components/DataInput";
import InterectionSection from "./sections/InterectionSection";
import { FixedArray } from "./Types";
import InfoSection from "./sections/InfoSection";
// import { FixedArray } from "./wrappers/FixedArray";

function App() {
    const [array, setArray] = useState<FixedArray<string>>({
        items: [],
        size: 0,
    });

    const [selectedStructure, setSelectedStructure] = useState("Array");

    const handleStructureChange = (structure: string) => {
        setSelectedStructure(structure);
    };

    const handleInsert = (value: string) => {
        console.log(`tried to insert ${value}`);
        const newItems = [...array.items, value];

        console.log(`before array: ${array.items}`);

        const newArray: FixedArray<string> = {
            items: newItems,
            size: newItems.length,
        };
        setArray(newArray);
        console.log(`after array: ${array.items}`);
    };

    const handleDelete = (checkIndex: string) => {
        const index = Number.parseInt(checkIndex);

        if (index !== null && index >= 0 && index <= array.items.length) {
            const newItems = [...array.items];
            newItems.splice(index, 1);

            const newArray: FixedArray<string> = {
                items: newItems,
                size: newItems.length,
            };

            setArray(newArray);
        }
    };

    return (
        <div className="w-lvw h-lvh grid grid-cols-[5fr_2fr] grid-rows-[1fr_1fr]">
            <main className="bg-Almond m-4 mr-2 rounded-lg flex flex-col row-span-2">
                <header className="m-4 bg-Black-olive text-white h-12 rounded-md">
                    <DataInput handleStructureChange={handleStructureChange} />
                </header>
                <section className="flex-1 bg-Ecru m-4 mt-0 rounded-lg">
                    <DataDisplay items={array.items} size={array.size} />
                </section>
            </main>
            <aside className="bg-Almond m-4 ml-2 mb-2 rounded-lg flex flex-col">
                <header className="bg-Black-olive text-white h-12 m-4 rounded-md p-2">
                    Some header details...
                </header>
                <section className="bg-Ecru flex-1 m-4 mt-0 rounded-md p-2">
                    Complexity section
                </section>
                <section className="bg-Ecru flex-1 m-4 mt-0 rounded-md p-2">
                    Pseudo Code section (expandable)
                </section>
            </aside>
            <section className="bg-Almond m-4 mt-2 ml-2 rounded-lg flex flex-row">
                <div className="flex-1 m-2 bg-Ecru rounded-lg">
                    <InterectionSection
                        onInsert={handleInsert}
                        onDelete={handleDelete}
                    />
                </div>
                <div className="bg-Ecru m-2 rounded-lg">
                    <InfoSection current={selectedStructure} />
                </div>
            </section>
        </div>
    );
}

export default App;
