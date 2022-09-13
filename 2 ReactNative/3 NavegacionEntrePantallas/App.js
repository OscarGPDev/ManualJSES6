import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from "./Screens/Profile";
import Home from "./Screens/Home";


export default function App() {
    /*
    Este objeto lo necesitamos para crear el esquema de navegación.
    * */
    const Stack = createNativeStackNavigator();
    return (<NavigationContainer>
            {/*
            Este objeto tiene como componentes Navigator y Screen, los cuales crean un contexto que permite
            desplazarse a través de las pantallas, tienes que respetar la estructura
            (NavigationContainer > Stack.Navigator > Stack.Screen). Tienen varias propiedades como mostrar u ocultar el
            botón de volver, lee más y experimenta por ti mismo, la información la encuentras en:
            https://reactnavigation.org/docs/getting-started
            experimentar es una buena forma de conocer una tecnología, utiliza la documentación que esta API,
            en general es donde suele estar la información más directa de cada componente/contexto :)
            */}
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{title: 'Welcome'}}
                />
                <Stack.Screen name="Profile" component={Profile}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
