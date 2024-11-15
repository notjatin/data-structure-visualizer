import { createContext, useState } from "react";

interface InputContextType {
    insertValue: string;
    setInsertValue: (value: string) => void;
    handleButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const InputContext = createContext<InputContextType | undefined>(undefined);

const InputProvider = ({ children }: { children: React.ReactNode }) => {
    const [insertValue, setInsertValue] = useState<string>("");

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.value;
        setInsertValue(value);
    };

    return (
        <InputContext.Provider
            value={{ insertValue, setInsertValue, handleButtonClick }}
        >
            {children}
        </InputContext.Provider>
    );
};

export { InputContext, InputProvider };
