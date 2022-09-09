import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Component} from "react";

class ComplexStates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastName: "",
            age: "",
            touchesCounter: 0,
        }
    }

    render() {
        // Una buena práctica es extraer las funciones que ponemos en los eventos de tal forma que la plantilla quede más
        // limpia y fácil de leer

        // Actualiza el nombre
        const handleChangeName = newName => this.setState({...this.state, name: newName});
        // Actualiza el apellido
        const handleChangeLastName = newLastName => this.setState({...this.state, lastName: newLastName});
        // Actualiza la edad
        const handleChangeAge = newAge => this.setState({...this.state, age: newAge});
        // Válida que el formulario este lleno
        const validateRequiredFields = this.state.name && this.state.lastName && this.state.age;
        // Activa el botón de enviar
        const handleScreenPressed = () => this.setState((currentUserData) => {
            currentUserData.touchesCounter++;
            return {...currentUserData};
        });
        // "Válida" que haya habilitado el botón de enviar
        const isHuman = this.state.touchesCounter < 4;
        // "Envía" los datos y muestra un mensaje.
        const handleSubmit = () => {
            alert(`Tus datos se han enviado ${this.state.name} ${this.state.lastName}`);
            this.setState({...this.state, touchesCounter: 0})
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
                            defaultValue={this.state.name}
                        />
                    </View>
                    <View style={styles.containerRow}>
                        <Text>Apellido: </Text>
                        <TextInput
                            style={{height: 40}}
                            placeholder="Escribe aquí"
                            onChangeText={handleChangeLastName}
                            defaultValue={this.state.lastName}
                        />
                    </View>

                    <View style={styles.containerRow}>
                        <Text>Edad: </Text>
                        <TextInput
                            style={{height: 40}}
                            placeholder="Escribe aquí"
                            keyboardType={"numeric"}
                            onChangeText={handleChangeAge}
                            defaultValue={this.state.age}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.containerColumn}>
                <Button
                    disabled={!validateRequiredFields}
                    onPress={handleScreenPressed}
                    title={!validateRequiredFields ?
                        "Llena el formulario para continuar"
                        : "Presiona 4 veces para habilitar el botón"}/>
                <Text>
                    {this.state.touchesCounter}
                </Text>
                <Button
                    onPress={handleSubmit}
                    disabled={isHuman}
                    title="Enviar"/>
            </View>
        </View>);
    }
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