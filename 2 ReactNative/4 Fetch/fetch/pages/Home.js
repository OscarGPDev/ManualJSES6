import {Button, StyleSheet, Text, View} from "react-native";

const Home = ({navigation}) => {
    return <View>
        <Text style={styles.title}>Bienvenido a tu primer app "completa"!</Text>
        <Text>
            El rompecabezas ya tiene forma, ahora veras como conectar tu app de react native con la red para comunicarla
            con un servidor
        </Text>
        <Button title="Vamos alla!" onPress={()=>navigation.navigate("Bitcoin")}></Button>
    </View>
}
const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 20
    }
})
export default Home;