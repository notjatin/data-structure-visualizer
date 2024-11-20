// Component to cover the entire screen to facilitate mobile input perfectly
// specifically for the on-screen keyboard usecase

import { Input } from "../InterectiveComponents";

const InputCover = () => {
    return <div className="w-lvw w-lvh z-20 bg-black">
        <Input placeHolder={"Enter here:"} />
    </div>;
};

export default InputCover;
