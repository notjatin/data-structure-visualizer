import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
}
export const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <div className="cursor-pointer select-none bg-slate-500 hover:bg-slate-600 transition-all text-green-200 max-w-fit p-2 rounded-sm m-2 text-lg font-mono font-semibold tracking-widest">
            {children}
        </div>
    );
};

interface InputProps {
    type: string;
}
export const Input: React.FC<InputProps> = ({ type }) => {
    return (
        <div className="m-2 w-16 inline-block">
            <input
                type={type}
                className="border-none bg-slate-200 text-green-900 rounded-sm font-mono font-medium text-xl w-full"
                style={{ boxShadow: "none" }}
            />
        </div>
    );
};
