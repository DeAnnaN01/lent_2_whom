import {Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import { StyleSheet } from 'react-native';



const RenderRecord = ({record}) => {
    if (record) {
        return (
            <Card containerStyle={{padding: 0}} >
                {/* <Card.Image source={record.image}>
                    <View style={{justifyContent: 'center', flex: 1}} >
                        <Text 
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }} 
                        >
                            {record.item}
                        </Text>
                    </View>
                </Card.Image> */}
                <Text style={styles.text}>
                    item: 
                </Text>
                    <Text style={styles.object} >
                        {record.item}
                    </Text>
                <Text style={styles.text}>
                    name: 
                </Text>
                    <Text style={styles.object} >
                        {record.name}
                    </Text>
                <Text style={styles.text}>
                    phone: 
                </Text>
                    <Text style={styles.object} >
                        {record.phone}
                    </Text>
                <Text style={styles.text}>
                    date: 
                </Text>
                    <Text style={styles.object} >
                        {record.date}
                    </Text>
                <Text style={styles.text}>
                    description: 
                </Text>
                    <Text style={styles.object} >
                        {record.description}
                    </Text>
                <Text style={styles.text}>
                    returnDate: 
                </Text>
                    <Text style={styles.object} >
                        {record.returnDate ? record.returnDate.toISOString() : ' '}
                    </Text>
                <Text style={styles.text}>
                    returned?: 
                </Text>
                    <Text style={styles.object} >
                        {record.returned ? 'yes' : 'no'}
                    </Text>
            </Card>
        );
    };
    return <View  />;
};

const styles = StyleSheet.create({
    object: {
        fontSize: 20, 
        fontWeight: '500', 
        color: 'purple',
        paddingLeft: 20,
        paddingBottom: 10
    },
    text: {
        marginTop: 20, 
        fontSize: 16,
        paddingLeft: 10
    },
});

export default RenderRecord;