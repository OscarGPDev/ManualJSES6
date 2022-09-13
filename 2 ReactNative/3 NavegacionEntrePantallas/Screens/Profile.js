import {Button, Text, View} from "react-native";

const Profile = ({navigation, route}) => {
    return <View>
        <Text>
            {/* Así recuperamos el valor del parámetro que enviamos desde el botón que está en Home.js */}
            Bienvenido a tu perfil: {route.params.name}
        </Text>
        <Button
            title="Ir a la pantalla inicial"
            onPress={
                /* Para ir a una pantalla necesitamos hacer uso de navigate, cuyo primer argumento es el nombre de la
                   pantalla, y después un objeto que usaremos para pasar parámetros adicionales, en este caso, el "nombre"
                   del perfil, este ejemplo es ilustrativo, en general debe evitarse, ya que estos datos suelen perderse
                   por ejemplo, al recargar en una página web. Posteriormente veremos el manejo de la persistencia de la
                   información */
                () => navigation.navigate('Home')
            }/>
    </View>
}
export default Profile;