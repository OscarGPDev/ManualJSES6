import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import firestore from "@react-native-firebase/firestore";

const SendMessage = ({user}) => {
    const [userMessage, setUserMessage] = useState("");
    /**
     Función encargada de enviar el mensaje del usuario con su correo electrónico
     * */
    const sendMessage = () => {
        firestore()
            .collection("Mensajes")
            .add({email: user.email, mensaje: userMessage})
            .then(() => setUserMessage(""))
            .catch(() => {
                alert("Ocurrió un error al enviar tu mensaje")
            })
    };
    const setMessage = (newText) => setUserMessage(newText);
    return <View><Text>Escribe:</Text>
        <TextInput
            onChangeText={setMessage}
            defaultValue={userMessage}
            textContentType="name"
            style={styles.input}/>
        <Button title="Enviar" onPress={sendMessage}/>
    </View>
};
const styles = StyleSheet.create({
    input: {

        borderColor: "#8498A3",
        borderRadius: 13,
    },

});
export default SendMessage;