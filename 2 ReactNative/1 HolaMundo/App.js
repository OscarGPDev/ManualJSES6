import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export default function App() { // Este es nuestro functional component llamado App, es una simple función de JavaScript,
                                // y sí, podemos usar una función flecha también, como mencioné, en el return usamos
    // una plantilla de etiquetas que representa los elementos de la interfaz que queremos mostrar, tal como con HTML
    return (
        <View style={styles.container}>
            {/*View, es un componente que como su nombre indica, representa una vista o contenedor,
            el componente nativo que utiliza view, al que es traducido en Android es ViewGroup, para iOS UIView y para
            web, un div*/}
            <Text>Hola mundo!s🐺</Text>
            {/* Text es un componente creado para mostrar texto en su interior, igual que view, Text se traduce a
            componentes nativos, en el caso de android,	TextView, con iOS UITextView y para web, una etiqueta de
            párrafo <p>*/}
            <StatusBar style="auto"/>
        </View>
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
