import Messages from '../chat/Messages';
import Section from '../general/Section';
import SendMessage from '../chat/SendMessage';
import {StyleSheet, View} from 'react-native';

const ChatIRC = ({user}) => {
  return (
    <Section title={`Bienvenido: ${user.nombre.nombres}`}>
      <View style={styles.contenedor}>
        <Messages />
        <SendMessage user={user} />
      </View>
    </Section>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'column',
  },
});
export default ChatIRC;
