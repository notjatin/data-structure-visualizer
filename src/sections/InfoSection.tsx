interface Props {
    current: string;
}

const InfoSection : React.FC<Props> = ({ current } ) => {
    return (
        <>
            Some Info about { current }.
        </>
    )
}

export default InfoSection;