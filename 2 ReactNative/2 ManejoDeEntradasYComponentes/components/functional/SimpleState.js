import {Text, TextInput, View} from "react-native";
import {useState} from "react";

const SimpleState = () => {
    // Esto de aquí es un estado :D, nos devuelve un array, al desestructurarlo, el primer elemento es la variable, y
    // el segundo es un método set que utilizaremos para actualizar su valor. NO PODEMOS SIMPLEMENTE ASIGNARLA,
    // forzosamente tenemos que usar el setter, usualmente la nomenclatura es simplemente ponerle el prefijo set al
    // nombre del estado, useState recibe un parámetro que es el valor inicial, es importante que este sea del mismo
    // tipo todo el tiempo, es decir, que siempre sea una cadena, un numero, un objeto, o un array, pero no cambiar
    // de un array a una cadena por ejemplo.
    const [text, setText] = useState('');
    // Podemos declarar multiples estados a la vez
    return <><View style={{marginTop: 50}}>
        <Text>Inversor de texto 📜🔄</Text>
        <TextInput
            style={{height: 40}}
            placeholder="Escribe aquí"
            onChangeText={
                /*
                onChangeText es un método de textInput que recibe una función que se manda a llamar cuando su valor
                cambia, le pasa a la función como primer parámetro el valor actualizado
                El set funciona de dos maneras, la forma más simple de usarlo es asi, proporcionándole un nuevo valor,
                tal como está aquí.
                * */
                newText => setText(newText)
                /*
                set también puede recibir una función, cuyo parámetro es el valor actual del estado, la siguiente es un
                equivalente de lo de arriba, su uso suele ser cuando nuestro estado requiere una manipulación o validación
                adicional.
                   newText => setText((actualText) => {
                    return newText;
                   })

                * */
            }
            defaultValue={text}
        />

    </View>
        <View>
            <Text style={{padding: 10, fontSize: 42}}>
                {Array.from(text).reverse().join('')}
            </Text>
        </View></>
}
export default SimpleState;