import clsx from "clsx";
import { utilityType } from "./UtilitySection";

interface StripProps {
    className: string;
    value: string;
    utility: utilityType;
    setUtility: (utility: utilityType) => void;
}
export const Strip: React.FC<StripProps> = ({ className, value, utility, setUtility }) => {
    const handleClick = () => {
        setUtility({...utility, utility: value})
    }

    return (
        <div
            onClick={handleClick}
            className={clsx(
                "border-2 hover:border-4 rounded-sm m-2 h-14 font-sans text-center content-center uppercase tracking-widest hover:text-lg hover:font-semibold transition-all cursor-pointer",
                className
            )}
        >
            {value}
        </div>
    );
};
