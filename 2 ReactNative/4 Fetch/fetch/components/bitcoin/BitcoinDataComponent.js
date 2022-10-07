import {Text} from "react-native";

const BitcoinDataComponent = ({rate, date}) => {
    // <></> o react fragment, es un componente "fantasma", ya que absolutamente siempre nuestras plantillas tienen que
    // estar encapsuladas
    return <>
        <Text>
            Tasa de cambio del bitcoin(USD): {rate}
        </Text>
        <Text>
            Fecha de consulta: {date}
        </Text>
    </>;
}

export default BitcoinDataComponent