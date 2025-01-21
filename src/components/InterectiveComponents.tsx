import clsx from "clsx";
import { ChangeEvent, ReactNode } from "react";

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
  onSubmit,
}: {
  value: string;
  setValue: (value: string) => void;
  onSubmit: React.FormEventHandler<HTMLInputElement> | undefined;
}) => {
  return (
    <input
      className={clsx(
        "size-24 p-2 rounded-sm",
        "bg-slate-100 text-green-700 border-4 border-slate-500",
        "inline-flex justify-center items-center",
        "font-mono font-semibold tracking-wider",
      )}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      onClick={() => setValue("")}
      onSubmit={onSubmit}
    />
  );
};
