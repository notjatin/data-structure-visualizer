import { ReactNode, useRef } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}
export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <div onClick={onClick} className="cursor-pointer select-none bg-slate-500 hover:bg-slate-600 transition-all text-green-200 max-w-fit p-2 rounded-sm m-2 text-lg font-mono font-semibold tracking-widest">
            {children}
        </div>
    );
};

interface InputProps {
    onInputChange: (value: string) => void;
}
export const Input: React.FC<InputProps> = ({ onInputChange }) => {
    const inputRef = useRef<HTMLDivElement>(null);

    const handleBlur = () => {
        onInputChange(inputRef.current?.innerText || "");
    }

    return (
        <div
            ref={inputRef}
            className="bg-slate-100 inline-block min-w-24 h-8 rounded-sm text-green-700 text-center content-center font-mono font-semibold tracking-wider"
            contentEditable
            // check if working and look for a better way
            onBlur={handleBlur}
        >
        </div>
    );
};
