import RenderRecord from '../features/records/RenderRecord';



const RecordInfoScreen = ({route}) => {
    const {record} = route.params;

    return (
        <RenderRecord  record={record} />
    );
};


export default RecordInfoScreen;