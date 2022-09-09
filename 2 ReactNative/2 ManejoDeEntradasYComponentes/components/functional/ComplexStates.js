import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

const ComplexStates = () => {
    // Aunque podemos declarar multiples estados, también podemos usar uno solo utilizando un objeto
    const [userData, setUserData] = useState({
        name: "",
        lastName: "",
        age: "",
        touchesCounter: 0
    });
    // Una buena práctica es extraer las funciones que ponemos en los eventos de tal forma que la plantilla quede más
    // limpia y fácil de leer

    // Actualiza el nombre
    const handleChangeName = newName => setUserData({...userData, name: newName});
    // Actualiza el apellido
    const handleChangeLastName = newLastName => setUserData({...userData, lastName: newLastName});
    // Actualiza la edad
    const handleChangeAge = newAge => setUserData({...userData, age: newAge});
    // Válida que el formulario este lleno
    const validateRequiredFields = userData.name && userData.lastName && userData.age;
    // Activa el botón de enviar
    const handleScreenPressed = () => setUserData((currentUserData) => {
        currentUserData.touchesCounter++;
        return {...currentUserData};
    });
    // "Envía" los datos y muestra un mensaje.
    const handleSubmit = () => {
        alert(`Tus datos se han enviado ${userData.name} ${userData.lastName}`);
        setUserData({...userData, touchesCounter: 0})
    }
    return (<View>
        <View style={styles.containerColumn}>
            <Text style={styles.title}>Datos de usuario</Text>
            <View>
                <View style={styles.containerRow}>
                    <Text>Nombre: </Text>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Escribe aquí"
                        onChangeText={handleChangeName}
                        defaultValue={userData.name}
                    />
                </View>
                <View style={styles.containerRow}>
                    <Text>Apellido: </Text>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Escribe aquí"
                        onChangeText={handleChangeLastName}
                        defaultValue={userData.lastName}
                    />
                </View>

                <View style={styles.containerRow}>
                    <Text>Edad: </Text>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Escribe aquí"
                        keyboardType={"numeric"}
                        onChangeText={handleChangeAge}
                        defaultValue={userData.age}
                    />
                </View>
            </View>
        </View>
        <View style={styles.containerColumn}>
            <Button
                disabled={!validateRequiredFields}
                onPress={handleScreenPressed}
                title={!validateRequiredFields ? "Llena el formulario para continuar" : "Presiona 4 veces para habilitar el botón"}/>
            <Text>
                {userData.touchesCounter}
            </Text>
            <Button
                onPress={handleSubmit}
                disabled={userData.touchesCounter < 4}
                title="Enviar"/>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    containerColumn: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    containerRow: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: "900",
        fontSize: 20
    }
});
export default ComplexStates;