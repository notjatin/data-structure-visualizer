import DataNode from "./DataNode";

interface Props {
    dataItems: number[];
    handleItemClick: (item: number) => void;
}

const DataDisplay: React.FC<Props> = ({ dataItems, handleItemClick }) => {
    return dataItems.map((item: number) => {
        return (
            <DataNode
                item={item}
                handleItemClick={() => handleItemClick(item)}
                key={
                    item * Math.floor(Math.random() * 1000) +
                    Math.floor(Math.random() * 10)
                }
            />
        );
    });
};

export default DataDisplay;
