import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import firestore from "@react-native-firebase/firestore";
import DocumentPicker from "react-native-document-picker";
import storage from '@react-native-firebase/storage';

const SendMessage = ({user}) => {
    const [userMessage, setUserMessage] = useState("");
    const [uploadUrl, setUploadUrl] = useState("");
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
    const pickFile = async () => {
        try {
            /*
            Asi es como hacemos para que el usuario seleccione un archivo
            * */
            const pickerResult = await DocumentPicker.pickSingle({
                //Podemos restringir el tipo de archivos que pueden seleccionar
                type: [DocumentPicker.types.images],
                copyTo: 'cachesDirectory',
            });
            // Storage funciona con base en referencias, las cuales consisten en la ruta al archivo
            const reference = storage().ref(`${user.email}/${new Date().getTime()}/${pickerResult.name}`);
            // asi se sube el archivo
            await reference.putFile(pickerResult.fileCopyUri);

            // para obtener una url a la que se pueda acceder necesitamos hacer uso de .getDownloadURL NO la referencia
            const DownloadUrl = await reference.getDownloadURL();
            /* Aunque putFile sube tal cual el archivo, seguramente necesitamos guardar o la referencia o la url
            en otro lado para poder hacer uso de ella después, como para eliminarla por ejemplo, lo cual por cierto
            se haria con
            await reference.delete()
            * */
            firestore()
                .collection("Mensajes")
                .add({email: user.email, type: "picture", pathToFile: DownloadUrl})
                .catch(() => {
                    alert("Ocurrió un error al enviar tu mensaje")
                })
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log("User cancelled the picker, exit any dialogs or menus and move on");
            } else {
                throw err;
            }
        }
    }
    return <View><Text>Escribe:</Text>
        <TextInput
            onChangeText={setMessage}
            defaultValue={userMessage}
            textContentType="name"
            style={styles.input}/>
        <Button title="Enviar" onPress={sendMessage}/>
        <Button title="Enviar imagen" onPress={pickFile}/>
    </View>
};
const styles = StyleSheet.create({
    input: {

        borderColor: "#8498A3",
        borderRadius: 13,
    },

});
export default SendMessage;