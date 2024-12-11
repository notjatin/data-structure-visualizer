import clsx from "clsx";

interface StripProps {
  className: string;
  value: "insert" | "modify" | "delete" | "search" | undefined;
  setCurrentOperation: (
    currentOperation: "insert" | "modify" | "delete" | "search" | undefined,
  ) => void;
}

export const Strip: React.FC<StripProps> = ({
  className,
  value,
  setCurrentOperation,
}) => {
  const handleStripClick = (
    value: "insert" | "modify" | "delete" | "search" | undefined,
  ) => {
    setCurrentOperation(value);
  };

  return (
    <div
      className={clsx(
        "font-mono text-center capitalize tracking-wider font-semibold md:text-lg",
        "h-fit md:h-full w-fit md:w-full border-2 p-2 content-center",
        "transition-all cursor-pointer select-none rounded-sm",
        className,
      )}
      onClick={() => handleStripClick(value)}
    >
      {value}
    </div>
  );
};
