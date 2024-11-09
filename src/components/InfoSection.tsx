// component to display static info (pseudo code, time & space complexities, additional info etc.)

import clsx from "clsx";
import { useState } from "react";
import { BsArrowRight, BsArrowRightSquare, BsArrowRightSquareFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { TbSquareArrowRight, TbSquareRoundedArrowRight } from "react-icons/tb";

// NOTES:
// 1. Make a tabbed screen, two options currently, complexity and pseudo code
// 2. Array first, so no selection section needed

const listItems = [
    { label: "Complexity", value: "complexity" },
    { label: "Pseudo Code", value: "pseudo-code" },
];

const InfoSection = () => {
    const [activeSection, setActiveSection] = useState("");

    const handleTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const value = e.currentTarget.dataset.value;
        if (value) {
            setActiveSection(e.currentTarget.dataset.value!);
        }
    };

    return (
        <section className="bg-green-100 size-64">
            <header className="h-10 flex">
                <div className="flex-1">
                    <ul className="flex h-full w-full items-center">
                        {/* to be mapped later */}
                        {listItems.map((listItem, index) => {
                            return (
                                <li
                                    className={clsx(
                                        "min-w-28 h-full text-center content-center p-2 rounded-md shadow-md hover:shadow-slate-700 bg-green-200 transition-all font-sans text-sm tracking-wider text-slate-700 hover:underline font-semibold cursor-pointer",
                                        listItem.value === activeSection &&
                                            "bg-green-300 text-green-800 hover:normal-case"
                                    )}
                                    data-value={listItem.value}
                                    onClick={handleTabClick}
                                    key={index}
                                >
                                    {listItem.label}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex justify-center items-center bg-slate-700 hover:bg-slate-950 rounded-sm cursor-pointer">
                    <TbSquareRoundedArrowRight size={30} className="text-green-100 bg-inherit" />
                </div>
            </header>
            <div>{activeSection}</div>
        </section>
    );
};

export default InfoSection;
