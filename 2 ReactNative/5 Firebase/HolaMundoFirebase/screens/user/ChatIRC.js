import Messages from "../chat/Messages";
import Section from "../general/Section";
import SendMessage from "../chat/SendMessage";

const ChatIRC = ({user}) => {
    return (
        <Section title={`Bienvenido: ${user.nombre.nombres}`}>
            <Messages></Messages>
            <SendMessage user={user}/>
        </Section>)
}
export default ChatIRC;