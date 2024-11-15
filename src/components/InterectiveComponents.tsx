import clsx from "clsx";
import { ReactNode, useRef } from "react";

interface ButtonProps {
    children: ReactNode;
}
export const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <div className="cursor-pointer select-none border-4 border-green-200 bg-slate-500 hover:bg-slate-600 transition-all text-green-200 max-w-fit p-2 rounded-sm m-2 text-lg font-mono font-semibold tracking-widest">
            {children}
        </div>
    );
};

export const Input = ({ placeHolder }: { placeHolder: string }) => {
    const inputRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={inputRef}
            className={clsx(
                "min-w-32 h-10 p-2 rounded-sm",
                "bg-slate-100 text-green-700 border-4 border-slate-500",
                "inline-flex justify-center items-center",
                "font-mono font-semibold tracking-wider"
            )}
            contentEditable
            defaultValue={placeHolder}
            suppressContentEditableWarning
            // check if working and look for a better way
        >
            {placeHolder}
        </div>
    );
};
