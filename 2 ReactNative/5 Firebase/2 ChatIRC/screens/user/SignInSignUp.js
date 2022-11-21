import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import Section from '../general/Section';
import firestore from '@react-native-firebase/firestore';

const SignInSignUp = ({setUser}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // En este caso manejo estos 3 estados, initializing, es porque la API de autenticación necesita ser inicializada,
  // por lo que nno sirve de nada mostrar algo cuando no lo esté, user es el que contendrá la sesión tal cual del
  // usuario y userLoginData, es para el formulario de inicio de sesión o registro
  const [userLoginData, setUserLoginData] = useState({
    email: '',
    password: '',
    nombre: {
      nombres: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
    },
    signUp: false,
  });

  // Función para registrar un usuario en Firebase, inicia la sesión automáticamente si el registro fue exitoso
  const registerWithEmailAndPassword = () => {
    auth()
      .createUserWithEmailAndPassword(
        userLoginData.email,
        userLoginData.password,
      )
      .then(() => {
        /*
                Esta línea nos registrará datos adicionales en nuestra colección Usuarios, le pondrá un ID aleatorio
                * */
        firestore()
          .collection('Users')
          .add({nombre: userLoginData.nombre, email: userLoginData.email});
        /*
                Para poner un ID específico en lugar de uno al azar, usa doc y set, doc es la referencia a un documento
                o registro, y set es un método para CREAR O REEMPLAZAR el contenido del mismo
                firestore()
                    .collection('Usuarios')
                    .doc("IDCustom")
                    .set({nombre: userLoginData.nombre, email: userLoginData.email});
                Para actualizar un registro en específico, en solo uno o mas valores(sin reemplazar los demás) usa el
                método update
                firestore()
                    .collection('Usuarios')
                    .doc("ID")
                    .update({"nombre.apellidoPaterno":userLoginData.nombre.apellidoPaterno});
                * */
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        alert(error.code);
        console.error(error);
      });
  };
  // Función para iniciar la sesión de un usuario registrado en firebase
  const loginWithEmailAndPassword = () => {
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
        alert(error.code);
      });
  };
  const isSignUp = () =>
    setUserLoginData({...userLoginData, signUp: !userLoginData.signUp});
  const signUpActionButtonText = !userLoginData.signUp
    ? 'Iniciar sesión'
    : 'Registrarse';
  const signInUpActionFunction = () => {
    if (userLoginData.signUp) {
      registerWithEmailAndPassword();
    }
    if (!userLoginData.signUp) {
      loginWithEmailAndPassword();
    }
  };
  const signUpActionText = userLoginData.signUp ? 'Cancelar' : 'Registrarse';
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
          <Section title="Inicia sesión para continuar">
            <View style={{flexDirection: 'column'}}>
              <Text>Ingresa tu correo</Text>
              <TextInput
                textContentType="emailAddress"
                onChangeText={newText =>
                  setUserLoginData({
                    ...userLoginData,
                    email: newText,
                  })
                }
                keyboardType="email-address"
                autoComplete="email"
                autoCapitalize="none"
                defaultValue={userLoginData.email}
              />
              <Text>Ingresa tu contraseña</Text>
              <TextInput
                textContentType="password"
                onChangeText={newText =>
                  setUserLoginData({
                    ...userLoginData,
                    password: newText,
                  })
                }
                secureTextEntry
                defaultValue={userLoginData.password}
              />
              {userLoginData.signUp && (
                <>
                  <Text>Ingresa tu nombre</Text>
                  <TextInput
                    textContentType="name"
                    onChangeText={newText =>
                      setUserLoginData({
                        ...userLoginData,
                        nombre: {...userLoginData.nombre, nombres: newText},
                      })
                    }
                    autoComplete="name"
                    defaultValue={userLoginData.nombre.nombres}
                  />
                  <Text>Ingresa tu apellido paterno</Text>
                  <TextInput
                    textContentType="name"
                    onChangeText={newText =>
                      setUserLoginData({
                        ...userLoginData,
                        nombre: {
                          ...userLoginData.nombre,
                          apellidoPaterno: newText,
                        },
                      })
                    }
                    autoComplete="name-middle"
                    defaultValue={userLoginData.nombre.apellidoPaterno}
                  />
                  <Text>Ingresa tu apellido materno</Text>
                  <TextInput
                    textContentType="name"
                    onChangeText={newText =>
                      setUserLoginData({
                        ...userLoginData,
                        nombre: {
                          ...userLoginData.nombre,
                          apellidoMaterno: newText,
                        },
                      })
                    }
                    autoComplete="name-family"
                    defaultValue={userLoginData.nombre.apellidoMaterno}
                  />
                </>
              )}
              <Button
                title={signUpActionButtonText}
                onPress={signInUpActionFunction}
              />
              <Button title={signUpActionText} onPress={isSignUp} />
            </View>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignInSignUp;
