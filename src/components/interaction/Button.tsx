interface Props {
    size: number;
    onClick: () => void;
    children: React.ReactNode;
}
const Button: React.FC<Props> = ({ size, onClick, children }) => {
    return (
        <span
            className="cursor-pointer bg-Black-olive text-white p-2 m-2 rounded-md uppercase text-center hover:bg-black font-bold tracking-wider text-md"
            style={{ width: `${size}rem` }}
            onClick={onClick}
        >
            {children}
        </span>
    );
};

export default Button;
