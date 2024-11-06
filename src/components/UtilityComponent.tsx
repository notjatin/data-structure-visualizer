import { useRef } from "react";
import { Button, Input } from "./InterectiveComponents";

const UtilityComponent = () => {
    const inputValueRef = useRef<string>("");

    const handleInputChange = (value: string) => {
        inputValueRef.current = value;
    };

    const validateAndSubmit = () => {
        const value = inputValueRef.current;
        console.log(value);
    };

    return (
        <div className="size-96 bg-slate-400 rounded-md">
            {/* how to catch the input value on button click and send it to the parent */}
            {/* find a way to bind input and button together and use as a single component. */}
            <Button onClick={validateAndSubmit}>Insert</Button>
            <Input onInputChange={handleInputChange} />
        </div>
    );
};

export default UtilityComponent;
