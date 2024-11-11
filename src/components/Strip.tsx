import clsx from "clsx";

interface StripProps {
    className: string;
    value: string;
}
export const Strip: React.FC<StripProps> = ({ className, value }) => {
    return (
        <div
            className={clsx(
                "h-fit min-w-24 border-2 hover:border-4 rounded-sm m-2 font-sans text-center content-center uppercase tracking-widest hover:text-lg hover:font-bold transition-all cursor-pointer",
                className
            )}
        >
            {value}
        </div>
    );
};
