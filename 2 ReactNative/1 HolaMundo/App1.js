import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text>Hola mundo!s🐺</Text>
            <StatusBar style="auto"/>
        </View>
    );
}
export default App();// Así se vería nuestro hola mundo como una función flecha.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
