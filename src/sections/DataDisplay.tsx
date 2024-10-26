import DataNode from "../components/DataNode";
import { FixedArray } from "../wrappers/fixedArray";

interface Props {
    dataItems: FixedArray<number>;
    handleItemClick: (item: number) => void;
}

const DataDisplay: React.FC<Props> = ({ dataItems, handleItemClick }) => {
    const array = dataItems.getAllElements();

    return (
        <div className="relative">
            <div className="bg-white text-Black-olive font-mono font-extrabold text-3xl z-10 absolute right-0 m-4 w-16 h-16 rounded-md">
                <span className="m-6 mt-5">{dataItems.getSpace()}</span>
            </div>
            <div>
                {
                    array.map((item, index) => {
                        return <DataNode item={item} key={index}/>
                    })
                }
            </div>
        </div>
    );
};

export default DataDisplay;
