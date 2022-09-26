import {Image, StyleSheet, Text, View} from "react-native";


const PetCard = ({name, img}) => {
    return <View style={styles.container}>
        <Image source={img} style={styles.image}/>
        <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.heart}>❤️</Text>
        </View>
    </View>
};
const styles = StyleSheet.create({
    title: {
        margin: 'auto',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20,
    },
    subtitle: {
        margin: 'auto',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 15
    },
    image: {
        width: 190,
        height: 190
    },
    container: {
        flex: 1,
        minWidth: 190,
        maxWidth: 190,
        // height: 100,
        justifyContent: "center",
        alignItems: "center",

        borderLeftWidth: 5,
        borderLeftStyle: "solid",
        borderBottomWidthWidth: 5,
        borderBottomStyle: "solid",
        borderColor: "#8498A3",
        borderRadius: 13,

    },
    section: {
        marginTop: 50,
        color: "#FFF",
        width: '90%',

    },
    heart: {
        marginRight:0,
        marginLeft:"auto"
    }
});

export default PetCard;