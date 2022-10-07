import BitcoinData from "./pages/BitcoinData";
import {NavigationContainer} from "@react-navigation/native";

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./pages/Home";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer initialRouteName="Home">
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Bitcoin" component={BitcoinData}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

