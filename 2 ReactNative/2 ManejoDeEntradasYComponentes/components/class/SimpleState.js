import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Component} from "react";

export default class SimpleState extends Component {
    constructor(props) {
        super(props);
        // Esto de aquí es un estado :D. NO PODEMOS SIMPLEMENTE ASIGNARLA, forzosamente tenemos que usar el setter,
        // llamado siempre setState el valor inicial se coloca en el constructor de la clase, es importante que este
        // sea del mismo tipo todo el tiempo, es decir, que siempre sea una cadena, un numero, un objeto, o un array,
        // pero no cambiar de un array a una cadena por ejemplo.
        // En un class component, asi se usan los estados, o más bien, estado, ya que solo existe uno, no le podemos
        // cambiar el nombre tampoco
        this.state = {text: ""};
    }

    render() {

        return (
            <>
                <View style={{marginTop: 50}}>
                    <Text>Inversor de texto 📜🔄</Text>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Escribe aquí"
                        onChangeText={
                            /*
                            onChangeText es un método de textInput que recibe una función que se manda a llamar cuando
                            su valor cambia, le pasa a la función como primer parámetro el valor actualizado
                            El set vive en el contexto de la clase, por eso tenemos que ponerle "this" funciona de dos
                            maneras, la forma más simple de usarlo es asi, proporcionándole un nuevo valor, tal como está
                            aquí. En este caso tiene que ser un objeto.
                            * */
                            newText => this.setState({text:newText})
                            /*
                            set también puede recibir una función, cuyo parámetro es el valor actual del estado, la
                            siguiente es un equivalente de lo de arriba, su uso suele ser cuando nuestro estado requiere
                            una manipulación o validación adicional.
                               newText => this.setState((actualText) => {
                                return newText;
                               })

                            * */
                        }
                        defaultValue={this.state.text}
                    />

                </View>
                <View>
                    <Text style={{padding: 10, fontSize: 42}}>
                        {Array.from(this.state.text).reverse().join('')}
                    </Text>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
