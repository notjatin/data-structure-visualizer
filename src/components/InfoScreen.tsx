interface InfoScreenProps {
  structureDesc: string;
  subStructureDesc: string;
}
const InfoScreen: React.FC<InfoScreenProps> = ({
  structureDesc,
  subStructureDesc,
}) => {
  return (
    <aside className="min-w-80 bg-gray-300 text-gray-800 p-8 text-justify">
      <p>{structureDesc}</p>
      {subStructureDesc && (
        <>
          <hr className="h-1 mt-2 mb-2 bg-gray-600" /> <p>{subStructureDesc}</p>{" "}
        </>
      )}
    </aside>
  );
};

export default InfoScreen;
