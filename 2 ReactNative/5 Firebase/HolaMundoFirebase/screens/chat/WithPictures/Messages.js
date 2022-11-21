import {useEffect, useState} from "react";
import firestore from "@react-native-firebase/firestore";
import {Image, StyleSheet, Text, View} from "react-native";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        /*
        La única diferencia entre hacer una consulta que se actualice en tiempo real con una simple, es que en lugar de
        usar el método .get usamos .onSnapshot, que trucazo, no?
        */
        const subscriber = firestore()
            .collection('Mensajes')
            .onSnapshot(querySnapshot => {
                const mensajes = querySnapshot.docs.map(queryResult => ({id: queryResult.id, ...queryResult.data()}));
                setMessages(mensajes)
            });

        /* Con esto cierra la conexión a la base de datos, NO lo olvides, recuerda que puedes usar varios useEffect
        en el mismo componente.
        Si quieres que únicamente se consulte un único documento(registro) en tiempo real puedes hacerlo
        const subscriber = firestore()
            .collection('Mensajes')
            .doc('IDMensaje')
            .onSnapshot(querySnapshot => {
                const mensaje = {queryResult.id, ...queryResult.data()};
                setMessage(mensaje)
            });
        */
        return () => subscriber();
    }, []);
    return (<View>
        {messages.map(message => (<View key={message.id}>
            <Text style={styles.user}>{message.email}</Text>
            {message.type === "image" ? <Image src={{
                uri: message.pathToFile
            }}/> : <Text>{message.mensaje}</Text>}
        </View>))}
    </View>);
};
const styles = StyleSheet.create({
    user: {
        fontWeight: "bold",
    },

});
export default Messages;