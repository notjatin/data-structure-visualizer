import { ReactNode } from "react";

interface FrameProps {
    type: "square" | "rectangle";
    children: ReactNode;
}
export const Frame: React.FC<FrameProps> = ({ type, children }) => {
    return (
        <div
            className="inline-block bg-green-200 text-slate-500 h-24 rounded-sm m-2 p-2 text-center content-center text-4xl font-mono shadow-2xl"
            // update once clsx is installed
            style={type === "square" ? { width: "6rem" } : { width: "12rem" }}
        >
            {children}
        </div>
    );
};