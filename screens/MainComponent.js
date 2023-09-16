import {Platform, View} from 'react-native';
import  Constants  from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';


import DirectoryScreen from './DirectoryScreen';
import RecordInfoScreen from './RecordInfoScreen';
import HomeScreen from './HomeScreen';


const Drawer = createDrawerNavigator();


const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: {backgroundColor: '#5637DD'}
};


const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions} >
            <Stack.Screen  
                name='Home'
                component={HomeScreen}
                options={{title: 'Home'}}
            />
        </Stack.Navigator>
    )
}


const DirectoryNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator  
            initialRouteName='Directory'
            screenOptions={screenOptions}
        >
            <Stack.Screen 
                name='Directory'
                component={DirectoryScreen}
                options={{title: 'Record Directory'}}
            />
            <Stack.Screen 
                name='RecordInfo'
                component={RecordInfoScreen}
                options={({route}) => ({
                    title: route.params.record.item
                })}
            />
        </Stack.Navigator>
    )
};

const Main = () => {

    return (
        <View 
            style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }} 
        >
            <Drawer.Navigator  
                initialRouteName='Home'
                drawerStyle={{backgroundColor: '#CEC8FF'}}
            >
                <Drawer.Screen  
                    name='Home'
                    component={HomeNavigator}
                    options={{title: 'Home'}}
                />
                <Drawer.Screen  
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{title: 'Directory'}}
                />
            </Drawer.Navigator>
        </View>
    );
};


export default Main;