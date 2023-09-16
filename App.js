import Main from './screens/MainComponent';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';




export default function App() {
    return (
        <SafeAreaProvider style={{margin: 25, flex: 1}} >
            <NavigationContainer>
                <Main/>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

