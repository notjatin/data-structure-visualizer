// component which will maintain interective components in the side

import { StripSlider } from "./StripSlider";
import { GoArrowRight } from "react-icons/go";

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
    { value: "insert", label: "Insert", tone: "green" },
    { value: "delete", label: "Delete", tone: "red" },
    { value: "modify", label: "Modify", tone: "blue" },
    { value: "search", label: "Search", tone: "yellow" },
];
const UtilitySection = () => {
    return (
        // replace the vertical scrollbar with an arrow later in medium/large
        // on small devices show one strip at a time with side arrows to switch

        <>
            <StripSlider strips={stripItems} />
            <div className="w-1/2 h-full flex justify-center items-center">
                <div className="bg-slate-300 border-2 border-slate-600 flex justify-center items-center rounded-sm p-2 pl-4 pr-4">
                    <span className="font-sans uppercase tracking-widest text-lg font-bold text-slate-900">
                        GO
                    </span>
                    <GoArrowRight size={25} className="text-slate-900" />
                </div>
            </div>
        </>
    );
};

export default UtilitySection;
