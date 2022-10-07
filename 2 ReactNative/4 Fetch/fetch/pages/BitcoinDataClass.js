import {Button, Text, View} from "react-native";
import {Component} from "react";
import BitcoinDataComponent from "../components/bitcoin/BitcoinDataComponent";


class BitcoinDataClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: "",
            date: "",
            fetched: false,
            error: false,
            refresh: false
        };
    }

    componentDidMount() {
        // Recordemos el ciclo de vida, este método se ejecuta en cuanto se crea el nodo del componente
        this.fetchData();
    }

    // Para poder actualizar la información es necesario disponer de la petición, este método no es especial de react,
    // este nombre no es especial, siéntete libre de ponerle el nombre que quieras
    fetchData() {
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(response => response.json())
            .then(bitcoinResponse => this.setState({
                rate: bitcoinResponse.bpi.USD.rate,
                date: new Date(bitcoinResponse.time.updated).toLocaleTimeString(),
                fetched: true,
                refresh: false,
                error: false
            })).catch(() => {
            this.setState({
                ...this.state,
                fetched: true,
                error: true,
                refresh: false,
            })
        });
    }

    componentWillUnmount() {
        // En caso de que en lugar de un fetch fuera una conexión en tiempo real, aquí necesitarías cerrar la conexión
    }

    render() {
        /*
        Bienvenido al infierno del contexto, seguramente te llego a pasar que un dia llegas y tus amigos tienen un
        chiste que no entiendes, porque es de algo que paso cuando no estabas, no te preocupes!, a react le pasa igual,
        recuerda que los eventos generan su propio contexto, por lo que es necesario guardar una referencia al contexto
        de la clase para poder usar sus métodos, y como usamos this dentro de fetch data, también hay que especificarle
        el contexto que debe usar, para esto es que en lugar de llamar directamente a la función usamos el método call
        de lo contrario estaríamos usando el contexto del evento, y el evento no tiene setState, state, ni conexión con
        la clase, pelearse con los contextos, es el motivo personal es que yo prefiero los functional components :)
        Nota: si necesitáramos pasarle argumentos a la función, hay que hacerlo DESPUÉS del contexto, ej.
        classContext.fetchData.call(classContext, arg1, arg2,...,argn)
        Nota 2: el contexto tiene precio Timmy!
        * */
        const classContext = this;
        const handleRefresh = () => classContext.fetchData.call(classContext);
        return <View>
            <Text>Class version</Text>
            {this.state.error && <Text>Ocurrió un error al recuperar la información</Text>}
            <BitcoinDataComponent date={this.state.date} rate={this.state.rate}/>
            <Button title="refresh" onPress={handleRefresh}></Button>
        </View>
    }
}

export default BitcoinDataClass;