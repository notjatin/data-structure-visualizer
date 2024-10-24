import { useState } from "react";
import "./App.css";
import DataDisplay from "./components/DataDisplay";
import DataInput from "./components/DataInput";

function App() {
    const [dataItems, setDataItems] = useState<number[]>([]);

    const handleNewNodeClick = () => {
        const newNum = Math.floor(Math.random() * 100);
        setDataItems([...dataItems, newNum]);
    };

    const handleItemClick = (item: number) => {
        setDataItems(
            dataItems.filter((dataItem: number) => {
                return dataItem !== item;
            })
        );
    };

    return (
        <div className="w-full h-lvh grid grid-cols-[5fr_2fr] grid-rows-[3fr_1fr]">
            <main className="bg-Almond m-4 mb-2 mr-2 rounded-lg">
                <header className="m-4">
                    <DataInput handleNewNodeClick={handleNewNodeClick} />
                </header>
                <section className="">
                    <DataDisplay
                        dataItems={dataItems}
                        handleItemClick={handleItemClick}
                    />
                </section>
            </main>
            <aside className="bg-Almond m-4 ml-2 mb-2 rounded-lg">
                Side Content will be here ...
            </aside>
            <footer className="col-span-2 bg-Almond m-4 mt-2 rounded-lg">
                Footer content here ...
            </footer>
        </div>
    );
}

export default App;
