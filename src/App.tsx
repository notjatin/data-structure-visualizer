import { useState } from "react";
import "./App.css";
import DataDisplay from "./sections/DataDisplay";
import DataInput from "./components/DataInput";
import InterectionSection from "./sections/InterectionSection";
import { FixedArray, structure } from "./Types";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FixedArray } from "./wrappers/FixedArray";

function App() {
    const [selectedStructure, setSelectedStructure] = useState<structure>();

    const [array, setArray] = useState<FixedArray<string>>({
        items: [],
        size: 0,
    });
    
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

    const handleSearch = (key: string) => {
        let flag = false;
        array.items.map((item, index) => {
            if (key === item) {
                console.log(`item found at position at index ${index}`);
                flag = true;
            }
        });
        if (flag === false) {
            console.log(`${key} not found in the array.`);
        }
    };

    return (
        <div className="w-lvw h-lvh grid grid-cols-[5fr_2fr] grid-rows-[1fr_1fr]">
            <main className="bg-secondary m-4 mr-2 rounded-lg flex flex-col row-span-2">
                <header className="bg-primary m-4 h-12 rounded-md">
                    <div className="flex flex-row-reverse gap-2">
                        <a href="#">
                            <FaGithub
                                size={25}
                                className="m-3 mr-5 hover:cursor-pointer"
                            />
                        </a>
                        <a href="#">
                            <FaLinkedin
                                size={25}
                                className="m-3 hover:cursor-pointer"
                            />
                        </a>
                        <a href="#">
                            <FaInstagram
                                size={25}
                                className="m-3 hover:cursor-pointer"
                            />
                        </a>
                    </div>
                </header>
                <section className="flex-1 bg-Ecru m-4 mt-0 rounded-lg relative h-full">
                    <DataDisplay items={array.items} size={array.size} />
                </section>
            </main>
            <aside className="bg-secondary m-4 ml-2 mb-2 rounded-lg flex flex-col">
                <header className="bg-primary h-12 m-4 rounded-md p-2">
                    <DataInput />
                </header>
                <section className="bg-primary flex-1 m-4 mt-0 rounded-md p-2">
                    Complexity section
                </section>
                <section className="bg-primary flex-1 m-4 mt-0 rounded-md p-2">
                    Pseudo Code section (expandable)
                </section>
            </aside>
            <section className="bg-primary m-4 mt-2 ml-2 rounded-lg flex flex-row">
                <div className="m-4 rounded-lg w-full">
                    <InterectionSection
                        onInsert={handleInsert}
                        onDelete={handleDelete}
                        onSearch={handleSearch}
                    />
                </div>
            </section>
        </div>
    );
}

export default App;
