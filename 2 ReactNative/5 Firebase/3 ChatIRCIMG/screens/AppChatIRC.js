/**
 * En este codigo extenderemos la autenticacion de usuarios y elaboraremos un chat IRC
 */

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

import firestore from '@react-native-firebase/firestore';

import ChatIRC from './user/ChatIRC';
import SignInSignUp from './user/SignInSignUp';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // En este caso manejo estos 3 estados, initializing, es porque la API de autenticación necesita ser inicializada,
  // por lo que nno sirve de nada mostrar algo cuando no lo esté, user es el que contendrá la sesión tal cual del
  // usuario y userLoginData, es para el formulario de inicio de sesión o registro
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // aut necesita un callback que ejecutar CADA VEZ que cambia el estado de autenticación, en este caso es un simple
  // set al estado user
  const onAuthStateChanged = user => {
    if (user?.email) {
      /*
            Para hacer una consulta única, hacemos uso de get, podemos usar toda la colección, si conocemos el ID
            del registro podemos acceder a él directamente, o bien podemos hacer un query básico, con where
            Para aprender más sobre consultas visita https://firebase.google.com/docs/firestore/query-data/queries

            * */
      firestore()
        .collection('Users')
        .where('email', '==', user.email)
        .get()
        .then(querySnapshot => {
          /*
                    Query docs es un array, puedes iterarlo con los respectivos métodos, pero para leer sus datos
                    tenemos que invocar el método data() ya que cada elemento no es el resultado, si no una referencia
                    a él.
                    */
          setUser({...user, ...querySnapshot.docs[0].data()});
        });
      /*
            Para acceder a un registro en especifico usamos:
            firestore()
                .collection("Usuarios")
                .doc("IDRegistro")
                .get()
                .then(querySnapshot => {
                    setUser({...user, ...querySnapshot.data()})
                });

            Aunque recuerda que es poco recomendado debido a los costos, para consultar toda la tabla usamos:
            firestore()
                .collection("Usuarios")
                .get()
                .then(querySnapshot => {
                    setUser({...user, ...querySnapshot.docs[0].data()})
                });
            * */
    }
    if (!user) {
      setUser(user);
    }
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    // Esta parte solo debe ejecutarse UNA VEZ, puede tener su propio useEffect o de menos, si lo pones en uno
    // solo recuerda validar con un if para que se ejecute una sola vez
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // Es necesario cerrar el listener de la sesion, en useEffect esto se hace con el return
    // de una función, si necesitas hacer algo más cuando el componente se desmonte, lo que tendrás que hacer es
    // poner el siguiente return
    /*
        return () => {
            subscriber();
            // otros procedimientos para desmontar
        }
        * */
  }, []);

  if (initializing) {
    return null;
  }

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
          {!user ? <SignInSignUp setUser={setUser} /> : <ChatIRC user={user} />}
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
