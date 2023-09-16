import { useState } from "react";
import { View } from "react-native";
import RECORDS from '../shared/RECORDS';
import DirectoryScreen from './DirectoryScreen';
import RecordInfoScreen from './RecordInfoScreen';



const Main = () => {
    const [records, setRecords] = useState(RECORDS);
    const [selectedRecordId, setSelectedRecordId] = useState();

    return (
        <View style={{flex: 1}} >
            <DirectoryScreen 
                records={records} 
                onPress={recordId => setSelectedRecordId(recordId)}
            />
            <RecordInfoScreen record={records.filter(record => record.id === selectedRecordId)[0]} />
        </View>
    );
};


export default Main;