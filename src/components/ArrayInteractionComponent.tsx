import Button from "./interaction/Button";
interface Props {
    handleInterection: (type: string) => void;
}

const ArrayInteractionComponent: React.FC<Props> = ({ handleInterection }) => {
    return (
        <>
            <div className="p-4">
                <Button size={10} onClick={() => handleInterection("search")}>
                    Search
                </Button>
                <Button size={10} onClick={() => handleInterection("insert")}>
                    Insert
                </Button>
                <Button size={10} onClick={() => handleInterection("delete")}>
                    Delete
                </Button>
                {/* <Button size={10}>Minimum</Button>
                <Button size={10}>Maximum</Button>
                <Button size={10}>Successor</Button>
                <Button size={10}>Predecessor</Button> */}
            </div>
        </>
    );
};

export default ArrayInteractionComponent;
