import clsx from "clsx";
import { ReactNode } from "react";

interface FrameProps {
    size: "sm" | "md" | "lg";
    type: "square" | "rectangle";
    children: ReactNode;
}
export const Frame: React.FC<FrameProps> = ({ size, type, children }) => {
    return (
        <div
            className={clsx(
                "inline-block bg-green-200 text-slate-600 h- rounded-sm m-2 p-2 text-center content-center text-xl font-mono shadow-2xl size-12",
                size === "md" && "size-24",
                size === "lg" && "size-36",
                type === "rectangle" && "min-w-24 w-fit"
                // could be made better but no idea yet
            )}
        >
            {children}
        </div>
    );
};
