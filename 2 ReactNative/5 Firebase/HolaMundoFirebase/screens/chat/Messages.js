import {useEffect, useState} from "react";
import firestore from "@react-native-firebase/firestore";
import {StyleSheet, Text, View} from "react-native";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const subscriber = firestore()
            .collection('Mensajes')
            .onSnapshot(querySnapshot => {
                const mensajes = querySnapshot.docs.map(queryResult => ({id: queryResult.id, ...queryResult.data()}));
                console.log(mensajes)
                setMessages(mensajes)
            });

        // Con esto cierra la conexión a la base de datos
        return () => subscriber();
    }, []);
    return (<View>
        {messages.map(message => (<View key={message.id}>
            <Text style={styles.user}>{message.email}</Text>
            <Text>{message.mensaje}</Text>
        </View>))}
    </View>);
};
const styles = StyleSheet.create({
    user: {
        fontWeight: "bold",
    },

});
export default Messages;