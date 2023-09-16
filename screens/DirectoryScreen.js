import { FlatList, View } from "react-native";
import { ListItem } from "react-native-elements";



const DirectoryScreen = (props) => {

    const renderDirectoryItem = ({item: record}) => {
        return (
            <ListItem onPress={() => props.onPress(record.id)} >
                <ListItem.Content>
                    <ListItem.Title>{record.item}</ListItem.Title>
                    <ListItem.Subtitle>{record.name}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <FlatList  
            data={props.records}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />

    )
};


export default DirectoryScreen;