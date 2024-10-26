interface Props {
    handleNewNodeClick: () => void;
    handleStructureChange: (structure: string) => void;
}

const DataInput: React.FC<Props> = ({
    handleNewNodeClick,
    handleStructureChange,
}) => {
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        handleStructureChange(e.target.value);
    };

    return (
        <>
            <ul className="flex space-x-8">
                <li>
                    <select
                        className="text-white bg-Black-olive mt-1 ml-1 border-none"
                        name="structure"
                        id="structure"
                        onChange={handleSelectChange}
                    >
                        <option
                            className="text-white bg-Black-olive"
                            value="Array"
                        >
                            Arrays
                        </option>
                        <option
                            className="text-white bg-Black-olive"
                            value="Linked-List"
                        >
                            Linked-List
                        </option>
                        <option
                            className="text-white bg-Black-olive"
                            value="Stack"
                        >
                            Stack
                        </option>
                    </select>
                </li>
                <li>
                    <button
                        type="button"
                        className="bg-black p-2 rounded-md mt-1 hover:bg-gray-800 uppercase font-black tracking-wider"
                    >
                        Done
                    </button>
                </li>
                <li>
                    <button
                        className="bg-black p-2 rounded-md mt-1 hover:bg-gray-800 uppercase font-black tracking-wider"
                        type="button"
                        onClick={handleNewNodeClick}
                    >
                        New Node
                    </button>
                </li>
                <li>Something...</li>
            </ul>
        </>
    );
};

export default DataInput;
