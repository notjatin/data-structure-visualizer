interface Props {
    item: string | null;
};

const DataNode: React.FC<Props> = ({ item }) => {
    return (
        <div className="bg-Ecru w-14 h-14 text-center content-center rounded-md text-black text-xl font-bold border-[5px] border-l-Keppel">
            <span>{item}</span>
        </div>
    );
};

export default DataNode;
