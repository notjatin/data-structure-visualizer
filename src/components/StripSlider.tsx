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
  setCurrentOperation: (
    currentOperation: "insert" | "modify" | "delete" | "search" | undefined,
  ) => void;
}
export const StripSlider: React.FC<StripSliderProps> = ({
  strips,
  setCurrentOperation,
}) => {
  return (
    <div className="flex justify-evenly items-center h-full w-full">
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
