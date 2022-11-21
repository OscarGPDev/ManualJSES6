import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {useCallback, useState} from "react";
import firestore from "@react-native-firebase/firestore";
import DocumentPicker from "react-native-document-picker/index";
import { utils } from '@react-native-firebase/app';
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
    const pickFile = useCallback(async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],

            });
            const reference = storage().ref(`${user.email}/${new Date().getTime()}/${res.name}`);
            const pathToFile = `${res.uri}`;
            // uploads file
            await reference.putFile(pathToFile);
            firestore()
                .collection("Mensajes")
                .add({email: user.email, type:"picture", pathToFile:reference.getDownloadURL()})
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
    }, []);
    return <View><Text>Escribe:</Text>
        <TextInput
            onChangeText={setMessage}
            defaultValue={userMessage}
            textContentType="name"
            style={styles.input}/>
        <Button title="Enviar" onPress={sendMessage}/>
        <Button title="Enviar imagen" onPress={pickFile} />
    </View>
};
const styles = StyleSheet.create({
    input: {

        borderColor: "#8498A3",
        borderRadius: 13,
    },

});
export default SendMessage;