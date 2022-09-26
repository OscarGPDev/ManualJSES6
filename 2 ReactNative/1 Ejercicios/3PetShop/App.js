import {StatusBar} from 'expo-status-bar';
import {ScrollView, StyleSheet, View} from 'react-native';
import PetCard from "./components/PetCard";

export default function App() {
    const petsData = [
        {
            "item_id": 5003965,
            "item_name": "Bearded Dragon",
            "image": {uri: "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/254002-Center-1"},
            "type": 1
        },
        {
            "item_id": 5003961,
            "item_name": "Ball Python",
            "image": {uri: "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/2662964-Center-3"},
            "type": 1
        },
        {
            "item_id": 5004154,
            "item_name": "Crested Gecko",
            "image": {uri: "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/542920-right-1"},
            "type": 1
        },
        {
            "item_id": 5004153,
            "item_name": "Corn Snake",
            "image": {uri: "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/151033-Center-1"},
            "type": 1
        },
        {
            "item_id": 5004760,
            "item_name": "Leopard Gecko",
            "image": {uri: "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/110981-Center-1"},
            "type": 1
        },
        {
            "item_id": 5005420,
            "item_name": "Red Ear Slider",
            "image": {uri: "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/983039-center-1"},
            "type": 1
        },
        {
            "item_id": 5005754,
            "item_name": "Veiled Chameleon",
            "image": {uri: "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/253537-Center-1"},
            "type": 1
        },
        {
            "item_id": 5094369,
            "item_name": "Electric Blue Jack Dempsey",
            "image": {uri: "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/3271201-Center-1"},
            "type": 2
        },
        {
            "item_id": 5094368,
            "item_name": "Flowerhorn Cichlid",
            "image": {uri: "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/3271199-right-1"},
            "type": 2
        },
        {
            "item_id": 120882,
            "item_name": "Male Elephant Ear Betta",
            "image": {uri: "https://assets.petco.com/petco/image/upload/f_auto,q_auto,w_190/dpr_auto/2137318-Center-1"},
            "type": 2
        }
    ];
    return (
        <ScrollView>
            <View style={styles.container}>
                {petsData.map(pet => (<PetCard key={pet.item_id} name={pet.item_name} img={pet.image}/>))}
            </View>

            <StatusBar style="auto"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        justifyContent: 'center',

        flexDirection: "row",
        flexWrap: "wrap"
    },
});
