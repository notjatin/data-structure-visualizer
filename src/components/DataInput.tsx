interface Props {
    handleNewNodeClick: () => void;
}

const DataInput: React.FC<Props> = ({ handleNewNodeClick }) => {
    return (
        <div className="bg-Black-olive text-white h-12">
            <ul className="flex space-x-8">
                <li>
                    <select name="structure" id="structure">
                        <option value="Array">Arrays</option>
                        <option value="Linked-List">Linked-List</option>
                        <option value="Stack">Stack</option>
                    </select>
                </li>
                <li>Challenge</li>
                <li>
                    <button type="button" onClick={handleNewNodeClick}>New Node</button>
                </li>
                <li>Something...</li>
            </ul>
        </div>
    );
};

export default DataInput;
