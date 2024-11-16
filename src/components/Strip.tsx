import clsx from "clsx";

interface StripProps {
    className: string;
    value: "insert" | "modify" | "delete" | "search" | undefined;
    onClick: () => void;
}
export const Strip: React.FC<StripProps> = ({ className, value }) => {
    return (
        <div
            className={clsx(
                "font-mono text-center capitalize tracking-wider font-semibold", 
                "h-fit w-fit border-2 p-2 content-center",
                "transition-all cursor-pointer select-none rounded-sm",
                className
            )}
        >
            {value}
        </div>
    );
};
