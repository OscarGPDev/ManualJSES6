import {StatusBar} from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Item from "./components/Item";

export default function App() { // Este es nuestro functional component llamado App, es una simple función de JavaScript,
    // y sí, podemos usar una función flecha también, como mencioné, en el return usamos
    // una plantilla de etiquetas que representa los elementos de la interfaz que queremos mostrar, tal como con HTML
    const message = "Este mensaje esta en una variable!";
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/*View, es un componente que como su nombre indica, representa una vista o contenedor,
            el componente nativo que utiliza view, al que es traducido en Android es ViewGroup, para iOS UIView y para
            web, un div*/}
            <Text>Hola mundo!🐺</Text>
            {/* Text es un componente creado para mostrar texto en su interior, igual que view, Text se traduce a
            componentes nativos, en el caso de android,	TextView, con iOS UITextView y para web, una etiqueta de
            párrafo <p>*/
                // Para pintar el valor de una variable tenemos que abrir llaves y esta tiene que ser de un tipo
                // primitiva o simple, es decir, no podemos pintar un objeto, excepto que sea un componente
            }
            <Text>{message}</Text>
            {// Asi le ponemos las propiedades que requiere nuestro componente
                }
            <Item text="Crafting Kit" imagePath={require("./assets/crafting_kit_elden_ring_wiki_guide_200px.png")}/>
            <StatusBar style="auto"/>
        </ScrollView>
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
