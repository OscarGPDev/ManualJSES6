import {Image, StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    image: {
        maxHeight: "100px",
        maxWidth: "100px",
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
// Nuestro componente require las propiedades text e imagePath
/**
 * Este componente contiene una imagen y un texto descriptivo
 *
 * @param imagePath Source válido de una imagen
 * @param text Texto descriptivo de la imagen
 */
const Item = ({imagePath, text}) => {
    return (
        <View style={styles.container}>
            {/*Para poner una imagen local tenemos que usar require con la ruta a ella, si se tratara de una url
            web o una imagen codificada usaríamos
            <Image source={{
                    uri: 'ruta o imagen codificada'
                }}/>
                https://reactnative.dev/docs/image#examples
            */}
            <Image source={imagePath}/>
            <Text>{text}</Text>
        </View>
    );
};
/* Necesitamos exportar el componente para poder usarlo en otros lugares, se pueden exportar multiples componentes
    utilizando un objeto, pero asi es como se exporta uno solo
*/
export default Item;
/*
Para exportar multiples componentes en el mismo archivo usamos
export {
    Item,
    Componente2,
    ...
}
* */
