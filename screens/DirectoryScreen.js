import { FlatList, View } from "react-native";
import { ListItem } from "react-native-elements";
import { useState } from "react";

import RECORDS from '../shared/RECORDS';



const DirectoryScreen = ({navigation}) => {
    const [records, setRecords] = useState(RECORDS);


    const renderDirectoryItem = ({item: record}) => {
        return (
            <ListItem onPress={() => navigation.navigate('RecordInfo', {record})} >
                <ListItem.Content>
                    <ListItem.Title>
                        ◄ № {record.id} ►
                    </ListItem.Title>
                    <ListItem.Title style={{marginLeft: 5, color: 'purple'}} >
                        {record.item}
                    </ListItem.Title>
                    <ListItem.Subtitle style={{marginLeft: 15}} >
                        {record.name}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <FlatList  
            data={records}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />

    )
};


export default DirectoryScreen;