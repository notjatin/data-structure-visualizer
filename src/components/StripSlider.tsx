import clsx from "clsx";
import { useState } from "react";
import { Strip } from "./Strip";
import { FcNext, FcPrevious } from "react-icons/fc";
import { v4 } from "uuid";

interface StripSliderProps {
    strips: { value: string; label: string; tone: string }[];
}
export const StripSlider: React.FC<StripSliderProps> = ({ strips }) => {
    const [currentStrip, setCurrentStrip] = useState(0);

    return (
        <div className="flex justify-center items-center h-full w-1/2">
            <FcPrevious
                size={30}
                title="previous-operation"
                onClick={() => setCurrentStrip((prev) => prev - 1)}
            />
            {strips.map((stripItem, index) => {
                return (
                    <Strip
                        className={clsx(
                            stripItem.tone,
                            !(currentStrip === index) && "hidden"
                        )}
                        value={stripItem.value}
                        key={v4()}
                    />
                );
            })}
            <FcNext
                size={30}
                title="next-operation"
                onClick={() => setCurrentStrip((prev) => prev + 1)}
            />
        </div>
    );
};
