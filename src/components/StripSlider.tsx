import clsx from "clsx";
import { Strip } from "./Strip";
import { v4 } from "uuid";
import { ReactElement } from "react";
import { operationType } from "../Types";

interface StripSliderProps {
  strips: {
    value: operationType;
    label: ReactElement | null;
    tone: string;
  }[];
  setCurrentOperation: (currentOperation: operationType) => void;
}
export const StripSlider: React.FC<StripSliderProps> = ({
  strips,
  setCurrentOperation,
}) => {
  return (
    <div className="flex md:flex-col md:p-2 md:gap-2 justify-evenly items-center h-full w-full">
      {strips.map((stripItem) => {
        return (
          <Strip
            className={clsx(stripItem.tone)}
            value={stripItem.value}
            key={v4()}
            setCurrentOperation={setCurrentOperation}
          />
        );
      })}
    </div>
  );
};
