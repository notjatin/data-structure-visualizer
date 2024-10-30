import DataNode from "../components/DataNode";
import { FixedArray } from "../Types";
// import { FixedArray } from "../wrappers/FixedArray";

const DataDisplay: React.FC<FixedArray<string>> = ({ items, size }) => {
    return (
        <div className="relative h-full">
            <div className="bg-white text-Black-olive font-mono font-extrabold text-3xl z-10 absolute right-0 m-4 w-16 h-16 rounded-md">
                <span className="m-6 mt-5">{size}</span>
            </div>
            <div className="h-full flex justify-center items-center ">
                {items.map((item, index) => {
                    return <DataNode item={item} key={index} />;
                })}
                {/* <DataNode item={'32'} key={Date.now()}/>
                <DataNode item={'23'} key={Date.now()}/>
                <DataNode item={'15'} key={Date.now()}/>
                <DataNode item={'99'} key={Date.now()}/> */}
            </div>
        </div>
    );
};

export default DataDisplay;
