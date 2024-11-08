import clsx from "clsx";
import { ReactNode } from "react";

interface FrameProps {
    type: "square" | "rectangle";
    className: string;
    children: ReactNode;
}
export const Frame: React.FC<FrameProps> = ({ type, className, children }) => {
    return (
        <div
            className={clsx(
                "inline-flex justify-center items-center bg-green-200 text-slate-600 h- rounded-sm m-2 p-2  text-md font-bold font-mono shadow-md shadow-slate-900 size-8",
                className,
                type === "rectangle" && "min-w-24 w-fit"
                // could be made better but no idea yet
            )}
        >
            {children}
        </div>
    );
};
