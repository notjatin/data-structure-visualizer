// component which will maintain interective components in the side

import { StripSlider } from "./StripSlider";
import { BiSearch, BiUndo } from "react-icons/bi";
import { TbReplaceFilled } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPlusSquare } from "react-icons/fi";
import { ReactElement, useState } from "react";
import { Button, Input } from "./InterectiveComponents";

// NOTES:
// 1. Will use buttons with input elements. ❌
// 2. Should display as follows: strips of light colors to ditate to common functionalities. ✅
//      green -> entry, red -> remove, blue -> modify, yellow -> search
// 3. Strips as modified buttons with colors. ✅
// 4. On next screen, the input box, and a validate button. ❌
// 5. (optional) an animation to show the data being sent to dhanchu bot in the bottom right corner of showcase. ❌

export type stripItemsType = {
    value: "insert" | "modify" | "delete" | "search" | undefined;
    label: ReactElement | null;
    tone: string
};

// consider using icons instead of labels (more interactive? yes/no)
const stripItems: stripItemsType[] = [
    {
        value: "insert",
        label: <FiPlusSquare />,
        tone: "border-green-500 bg-green-300 text-green-900",
    },
    {
        value: "delete",
        label: <RiDeleteBin6Line />,
        tone: "border-red-500 bg-red-300 text-red-900",
    },
    {
        value: "modify",
        label: <TbReplaceFilled />,
        tone: "border-blue-500 bg-blue-300 text-blue-900",
    },
    {
        value: "search",
        label: <BiSearch />,
        tone: "border-yellow-500 bg-yellow-300 text-yellow-900",
    },
];
const UtilitySection = () => {
    const [inInputMode, setInInputMode] = useState(false);
    const [currentOperation, setCurrentOperation] = useState<
        "insert" | "modify" | "delete" | "search" | undefined
    >("insert");

    return (
        // replace the vertical scrollbar with an arrow later in medium/large
        // on small devices show one strip at a time with side arrows to switch
        <>
            {inInputMode ? (
                <div className="w-full h-full bg-green-300 flex">
                    <div className="w-3/6 h-full inline-flex justify-center items-center">
                        <Input placeHolder="new value here" />
                    </div>
                    <div className="w-2/6 h-full inline-flex justify-center items-center">
                        <Button>{currentOperation}</Button>
                    </div>
                    <div className="w-1/6 inline-flex justify-center items-center">
                        <BiUndo
                            size={50}
                            className="text-green-200 border-4 border-green-200 rounded-md bg-slate-500"
                            onClick={() => setInInputMode(false)}
                        />
                    </div>
                </div>
            ) : (
                <StripSlider
                    strips={stripItems}
                    setInInputMode={setInInputMode}
                    setCurrentOperation={setCurrentOperation}
                />
            )}
        </>
    );
};

export default UtilitySection;
