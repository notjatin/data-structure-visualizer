import clsx from "clsx";
import { Strip } from "./Strip";
import { v4 } from "uuid";

interface StripSliderProps {
    strips: { value: string; label: JSX.Element; tone: string }[];
}
export const StripSlider: React.FC<StripSliderProps> = ({ strips }) => {
    return (
        <div className="flex justify-evenly items-center h-full w-full">
            {strips.map((stripItem) => {
                return (
                    <Strip
                        className={clsx(stripItem.tone)}
                        value={stripItem.value}
                        key={v4()}
                    />
                );
            })}
        </div>
    );
};
