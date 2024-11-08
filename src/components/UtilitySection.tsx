// component which will maintain interective components in the side

import { useState } from "react";
import { Strip } from "./Strip";

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
const UtilitySection = () => {
    const [utility, setUtility] = useState<utilityType>({
        utility: "",
        data: "",
    });

    return (
        // replace the vertical scrollbar with an arrow later
        <section className="bg-green-200 size-[length:16rem] h-fit overflow-auto overflow-x-hidden">
            {/* feed these strips through a map */}
            <Strip
                className="border-green-500 bg-green-300 text-green-900"
                value="insert"
                utility={utility}
                setUtility={setUtility}
                />
            <Strip
                className="border-red-500 bg-red-300 text-red-900"
                value="delete"
                utility={utility}
                setUtility={setUtility}
                />
            <Strip
                className="border-blue-500 bg-blue-300 text-blue-900"
                value="modify"
                utility={utility}
                setUtility={setUtility}
                />
            <Strip
                className="border-yellow-500 bg-yellow-300 text-yellow-900"
                value="search"
                utility={utility}
                setUtility={setUtility}
            />
        </section>
    );
};

export default UtilitySection;
