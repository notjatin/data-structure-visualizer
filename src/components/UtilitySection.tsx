// component which will maintain interective components in the side

import { useState } from "react";
import { StripSlider } from "./StripSlider";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { v4 } from "uuid";
import { GiCardRandom } from "react-icons/gi";

// NOTES:
// 1. Will use buttons with input elements. ❌
// 2. Should display as follows: strips of light colors to ditate to common functionalities. ✅
//      green -> entry, red -> remove, blue -> modify, yellow -> search
// 3. Strips as modified buttons with colors. ✅
// 4. On next screen, the input box, and send for validation button. ❌
// 5. (later) an animation to show the data being sent to dhanchu bot in the bottom right corner of showcase. ❌

export type utilityType = {
    utility: string;
    data: string;
};

// consider using icons instead of labels (more interactive? yes/no)
const stripItems = [
    {
        value: "insert",
        label: "Insert",
        tone: "border-green-500 bg-green-300 text-green-900",
    },
    {
        value: "delete",
        label: "Delete",
        tone: "border-red-500 bg-red-300 text-red-900",
    },
    {
        value: "modify",
        label: "Modify",
        tone: "border-blue-500 bg-blue-300 text-blue-900",
    },
    {
        value: "search",
        label: "Search",
        tone: "border-yellow-500 bg-yellow-300 text-yellow-900",
    },
];
const UtilitySection = () => {
    const [inInputMode, setInInputMode] = useState(false);
    const [randomNo, setRandomNo] = useState<number>();
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    function handleRandomFill(): void {
        setRandomNo(Math.floor(Math.random()*99));
    }

    return (
        // replace the vertical scrollbar with an arrow later in medium/large
        // on small devices show one strip at a time with side arrows to switch

        <>
            {inInputMode ? (
                <>
                    <div className="w-1/2 h-full flex justify-evenly items-start even">
                        <div className="h-1/2 w-full flex justify-center items-center gap-2 bg-slate-50 border-4 border-slate-800 p-1 rounded-sm"
                        onClick={handleRandomFill}>
                            <span className="text-slate-800 text-sm uppercase tracking-wider font-sans font-bold">
                                Random
                            </span>
                            <GiCardRandom
                                size={35}
                                className=" text-slate-800"
                            />
                        </div>
                        <div className="h-1/2 w-full bg-slate-50 border-4 border-slate-600 text-slate-600 rounded-r-md text-center content-center tracking-wider font-mono text-lg font-semibold">
                            {randomNo}
                        </div>
                        {/* <ol className="w-full flex-1 grid grid-cols-4 grid-rows-3 bg-blue-50">
                            {
                                array.map(item => <li className="content-center text-center bg-slate-200 m-1" key={v4()}>{item}</li>)
                            }
                        </ol>
                        <div className="h-8">Down here</div> */}
                    </div>
                    <div className="w-1/2 h-full flex justify-center items-center">
                        <div className="bg-slate-300 border-4 border-slate-600 flex justify-center items-center rounded-sm pl-2 pr-2">
                            <span className="font-sans uppercase tracking-widest text-lg font-bold text-slate-900">
                                back
                            </span>
                            <GoArrowLeft
                                size={25}
                                className="text-slate-900"
                                onClick={() => setInInputMode(false)}
                            />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <StripSlider strips={stripItems} />
                    <div className="w-1/2 h-full flex justify-center items-center">
                        <div className="bg-slate-300 border-4 border-slate-600 flex justify-center items-center rounded-sm pl-2 pr-2">
                            <span className="font-sans uppercase tracking-widest text-lg font-bold text-slate-900">
                                GO
                            </span>
                            <GoArrowRight
                                size={25}
                                className="text-slate-900"
                                onClick={() => setInInputMode(true)}
                            />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default UtilitySection;
