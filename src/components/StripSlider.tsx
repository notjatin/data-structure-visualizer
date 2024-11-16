import clsx from "clsx";
import { Strip } from "./Strip";
import { v4 } from "uuid";
import { ReactElement } from "react";

interface StripSliderProps {
    strips: {
        value: "insert" | "modify" | "delete" | "search" | undefined;
        label: ReactElement | null;
        tone: string;
    }[];
    setInInputMode: (inInputMode: boolean) => void;
    setCurrentOperation: (
        currentOperation: "insert" | "modify" | "delete" | "search" | undefined
    ) => void;
}
export const StripSlider: React.FC<StripSliderProps> = ({
    strips,
    setInInputMode,
    setCurrentOperation,
}) => {
    const handleStripClick = (
        value: "insert" | "modify" | "delete" | "search" | undefined
    ) => {
        setCurrentOperation(value);
        setInInputMode(true);
    };

    return (
        <div className="flex justify-evenly items-center h-full w-full">
            {strips.map((stripItem) => {
                return (
                    <Strip
                        className={clsx(stripItem.tone)}
                        value={stripItem.value}
                        key={v4()}
                        onClick={() => handleStripClick(stripItem.value)}
                    />
                );
            })}
        </div>
    );
};
