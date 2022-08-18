import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Component} from "react";

class App extends Component {// Así se vería nuestro hola mundo como class component.
    render() { // En el caso de una clase, tiene que extender de Component, y tenemos que usar el método render
        // para poner el return con nuestra plantilla
        return (
            <View style={styles.container}>
                <Text>Hola mundo!s🐺</Text>
                <StatusBar style="auto"/>
            </View>
        );
    }
}

export default App();
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
