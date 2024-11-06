import { useState } from "react";
import "./App.css";
// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MyArray } from "./structures/MyArray";
import { Frame } from "./components/ShowcaseComponents";
import { v4 as uuidv4 } from "uuid";

function App() {
    const [array, setArray] = useState<MyArray<number>>(() => new MyArray(8));
    const items = array.getArray();

    return (
        <>
            <div className="">
                {items.map((item) => {
                    return (
                        <Frame type="square" key={uuidv4()} size={"md"}>
                            {item}
                        </Frame>
                    );
                })}
            </div>
        </>
    );
}

export default App;
