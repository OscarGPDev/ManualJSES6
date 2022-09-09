import {ScrollView, StyleSheet} from 'react-native';
import SimpleState from "./components/functional/SimpleState";

export default function App() {
    return (
        <ScrollView>
            <SimpleState/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
