import { useState } from "react";
import ArrayInteractionComponent from "../components/ArrayInteractionComponent";
import Button from "../components/interaction/Button";

interface Props {
    onInsert: (value: string) => void;
    onDelete: (index: string) => void;
}

const InterectionSection: React.FC<Props> = ({ onInsert, onDelete }) => {
    const [currentValue, setCurrentValue] = useState("");
    const [deleteIndex, setDeleteIndex] = useState<string>("");

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
                    <div>
                        <Button
                            size={10}
                            onClick={() => {
                                setInterecting(false);
                            }}
                        >
                            Go Back
                        </Button>
                    </div>
                    {operation === "insert" ? (
                        <div>
                            <input
                                type="text"
                                placeholder="type in a unique value"
                                name="data-item"
                                value={currentValue}
                                onChange={(e) =>
                                    setCurrentValue(e.target.value)
                                }
                            />
                            <div>
                                <Button
                                    size={10}
                                    onClick={() => {
                                        // send the data to validate
                                        onInsert(currentValue);
                                    }}
                                >
                                    Insert
                                </Button>
                            </div>
                        </div>
                    ) : operation === "delete" ? (
                        <div>
                            <input
                                type="text"
                                placeholder="type in the index to delete"
                                name="index"
                                value={deleteIndex?.toString()}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    console.log(val);
                                    setDeleteIndex(val);
                                }}
                            />
                            <div>
                                <Button
                                    size={10}
                                    onClick={() => {
                                        // send the index to validate
                                        onDelete(deleteIndex);
                                    }}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    ) : operation === "insert" ? (
                        <div>
                            <span>The insert function.</span>
                        </div>
                    ) : (
                        <div>not yet implemented</div>
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
