import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

const AppFuncionalComponent = () => {
    return (
        <View style={styles.container}>
            <Text>Hola mundo!🐺</Text>
            <StatusBar style="auto"/>
        </View>
    );
}
export default AppFuncionalComponent();// Así se vería nuestro hola mundo como una función flecha.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
