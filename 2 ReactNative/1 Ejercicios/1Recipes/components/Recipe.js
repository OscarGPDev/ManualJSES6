import {Image, StyleSheet, Text, View} from "react-native";

const ULRow = ({text}) => (<View style={{flexDirection: 'row'}}>
    <Text>{'\u2022'}</Text>
    <Text style={{
        paddingLeft: 5,
        textAlign: "justify"
    }}>{text}</Text>
</View>);
const OLRow = ({index, text}) => (<View style={{flexDirection: 'row'}}>
    <Text>{index}</Text>
    <Text style={{paddingLeft: 5, color: "#000", textAlign: "justify"}}>{text}</Text>
</View>);

const Recipe = ({name, img, ingredients, steps}) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Image source={img} style={styles.image}/>
        <View style={styles.section}>
            <Text style={styles.subtitle}>Ingredients:</Text>
            {ingredients.map((ingredient) => <ULRow text={ingredient} key={`recipe-ingredient-${ingredient}`}/>)}
        </View>
        <View style={styles.section}>
            <Text style={styles.subtitle}>Method</Text>
            {steps.map((step, index) => <OLRow index={index + 1} text={step} key={`recipe-step-${step}`}/>)}
        </View>
    </View>
};
const styles = StyleSheet.create({
    title: {
        margin: 'auto',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20
    },
    subtitle: {
        margin: 'auto',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 15
    },
    image: {

        width: 250,
        height: 250
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    section: {
        marginTop: 50,
        width: '90%',
    }
});

export default Recipe;