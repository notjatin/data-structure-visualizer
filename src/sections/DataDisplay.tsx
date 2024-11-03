import DataNode from "../components/DataNode";
import { FixedArray } from "../Types";
// import { FixedArray } from "../wrappers/FixedArray";

const DataDisplay: React.FC<FixedArray<string>> = ({ items, size }) => {
    return (
        <>
            <div className="bg-primary text-primary z-10 absolute right-0 m-4 w-16 h-16 rounded-md place-content-center text-center shadow-md shadow-black">
                {size}
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
        </>
    );
};

export default DataDisplay;
