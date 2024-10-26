import { useState } from "react";
import ArrayInteractionComponent from "../components/ArrayInteractionComponent";
import Button from "../components/interaction/Button";

interface Props {
    current: string;
}

const InterectionSection: React.FC<Props> = ({ current }) => {
    const [interecting, setInterecting] = useState(false);
    const [operation, setOperation] = useState("");

    const handleInterection = (currentOperation: string) => {
        setInterecting(!interecting);
        setOperation(currentOperation);
    };

    return (
        <>
            {interecting ? (
                <div className="p-4">
                    <Button
                        size={10}
                        onClick={() => {
                            setInterecting(false);
                        }}
                    >
                        Go Back
                    </Button>
                    {operation === "insert" ? (
                        <div>
                            <input
                                type="text"
                                placeholder="type in a unique value"
                            />
                            <Button
                                size={10}
                                onClick={() => {
                                    console.log("do something");
                                }}
                            >
                                Insert
                            </Button>
                        </div>
                    ) : (
                        <span>Some other Operation</span>
                    )}
                </div>
            ) : (
                <ArrayInteractionComponent
                    handleInterection={handleInterection}
                />
            )}
        </>
    );
};

export default InterectionSection;
