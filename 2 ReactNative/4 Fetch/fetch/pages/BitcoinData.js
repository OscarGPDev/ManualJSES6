import {Button, Text, View} from "react-native";
import {useEffect, useState} from "react";
import BitcoinDataComponent from "../components/bitcoin/BitcoinDataComponent";


const BitcoinData = () => {
    const [bitcoinData, setBitcoinData] = useState({
        rate: "",
        date: "",
        fetched: false,
        error: false,
        refresh: false
    });
    useEffect(() => {
            /*
            Use effect se ejecuta al menos una vez una vez que se monta el componente, pero con el fin de que no se
            realicen peticiones adicionales conviene una pequeña validación.
            Nota: las peticiones suelen hacerse a nivel del componente página, por practicidad, ademas, si no tienes
            la información que requieren los componentes, mejor indicarle al usuario que esta cargando o algo similar.
            * */
            if (!bitcoinData.fetched || bitcoinData.refresh) {
                fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
                    .then(response => response.json())
                    .then(bitcoinResponse => setBitcoinData({
                        rate: bitcoinResponse.bpi.USD.rate,
                        date: new Date(bitcoinResponse.time.updated).toLocaleTimeString(),
                        fetched: true,
                        refresh: false,
                        error: false
                    })).catch(() => {
                    setBitcoinData({
                        ...bitcoinData,
                        fetched: true,
                        error: true,
                        refresh: false,
                    })
                });
            }
            return () => {
                // En caso de que en lugar de un fetch fuera una conexión en tiempo real, aquí necesitarías cerrar la
                // conexión también cosas como los timeOut/interval se tienen que eliminar, eso se hace aquí
                // Nota: a las funciones que devuelven y/o reciben otra función se llaman funciones de orden superior o
                // high-order functions
            }
        },
        /*
        Este arreglo se llama arreglo de dependencias, si el valor de alguno de sus elementos cambia volvería a
        ejecutarse la función de useEffect, por eso es necesario validar dentro para evitar comportamientos no deseados,
        si no pones nada en el array, useEffect se ejecutará una sola vez, idealmente, si no pones el array se convierte
        prácticamente en un bucle infinito, procura ponerlo.
        * */
        [bitcoinData.refresh]);

    const handleRefresh = () => setBitcoinData({...bitcoinData, refresh: true})

    return <View>
        {!bitcoinData.fetched && <Text>Cargando</Text>}
        {bitcoinData.error && <Text>Ocurrió un error al recuperar la información</Text>}
        <BitcoinDataComponent date={bitcoinData.date} rate={bitcoinData.rate}/>
        <Button title="refresh" onPress={handleRefresh}></Button>
    </View>
}
export default BitcoinData;