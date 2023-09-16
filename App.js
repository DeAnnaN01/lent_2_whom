import Main from './screens/MainComponent';
import { SafeAreaProvider } from 'react-native-safe-area-context';




export default function App() {
    return (
        <SafeAreaProvider style={{margin: 25, flex: 1}} >
            <Main/>    
        </SafeAreaProvider>
    );
}

