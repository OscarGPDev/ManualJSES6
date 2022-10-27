/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View
} from 'react-native';

import {Colors,} from 'react-native/Libraries/NewAppScreen';
import {useEffect, useState} from "react";
import auth from '@react-native-firebase/auth';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [userLoginData, setUserLoginData] = useState({email: "", password: ""});

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    const registerWithEmailAndPassword = () => {
        console.log(userLoginData)
        auth()
            .createUserWithEmailAndPassword(userLoginData.email, userLoginData.password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                // alert(error.message)
                alert(error.code)
                console.error(error);
            });
    }
    const loginWithEmailAndPassword = () => {
        console.log(userLoginData)
        auth()
            .signInWithEmailAndPassword(userLoginData.email, userLoginData.password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                // alert(error.message)
                alert(error.code)
                console.error(error);
            });
    }

    if (initializing) return null;

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    {!user && <Section title="Inicia sesión para continuar">
                        <View style={{flexDirection: "column"}}>
                            <Text>
                                Ingresa tu correo
                            </Text>
                            <TextInput textContentType="emailAddress"
                                       onChangeText={newText => setUserLoginData({
                                           ...userLoginData,
                                           email: newText
                                       })}
                                       keyboardType="email-address"
                                       autoComplete="email"
                                       autoCapitalize="none"
                                       defaultValue={userLoginData.email}/>
                            <Text>
                                Ingresa tu contraseña

                            </Text>

                            <TextInput textContentType="password"
                                       onChangeText={newText => setUserLoginData({
                                           ...userLoginData,
                                           password: newText
                                       })}
                                       secureTextEntry
                                       defaultValue={userLoginData.password}/>
                            <Button title={`Iniciar sesión`} onPress={loginWithEmailAndPassword}></Button>
                            <Button title={`Registrarse`} onPress={registerWithEmailAndPassword}></Button>
                        </View>

                    </Section>}
                    {user && <Section title={`Bienvenido: ${user.email}`}>

                    </Section>}

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
