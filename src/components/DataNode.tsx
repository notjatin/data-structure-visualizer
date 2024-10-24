import { MdDelete } from "react-icons/md";

interface Props {
    item: number;
    handleItemClick: () => void;
};

const DataNode: React.FC<Props> = ({ item, handleItemClick }) => {
    return (
        <div className="bg-Ecru w-14 h-14 text-center content-center rounded-md text-black text-xl font-bold border-[5px] border-l-Keppel">
            <span>{item}</span>
            <MdDelete className="cursor-pointer" onClick={handleItemClick}/>
        </div>
    );
};

export default DataNode;
