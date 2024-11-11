import clsx from "clsx";
import { useState } from "react";
import { Strip } from "./Strip";
import { FcNext, FcPrevious } from "react-icons/fc";

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
                            `border-${stripItem.tone}-500 bg-${stripItem.tone}-300 text-${stripItem.tone}-900`,
                            !(currentStrip === index) && "hidden"
                        )}
                        value={stripItem.value}
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
