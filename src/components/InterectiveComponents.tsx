import clsx from "clsx";
import { ReactNode, useRef } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}
export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div
      className="cursor-pointer select-none border-4 border-green-200 bg-slate-500 hover:bg-slate-600 transition-all text-green-200 max-w-fit p-2 rounded-sm text-lg font-mono font-semibold tracking-widest"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const Input = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) => {
  const inputRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={inputRef}
      className={clsx(
        "min-w-32 h-10 p-2 rounded-sm",
        "bg-slate-100 text-green-700 border-4 border-slate-500",
        "inline-flex justify-center items-center",
        "font-mono font-semibold tracking-wider",
      )}
      contentEditable
      defaultValue={value}
      suppressContentEditableWarning
      onChange={() => setValue(value)}
      // check if working and look for a better way
    >
      {value}
    </div>
  );
};
