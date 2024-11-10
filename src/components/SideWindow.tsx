// a generic component which displays other components on one side of the screen
// will essentially be used to layout InfoSection and UtilitySection

import clsx from "clsx";
import { ReactNode } from "react";

interface SideWindowProps {
    className: string;
    children: ReactNode;
}
const SideWindow: React.FC<SideWindowProps> = ({ className, children }) => {
    return <section className={clsx("", className)}>{children}</section>;
};

export default SideWindow;
