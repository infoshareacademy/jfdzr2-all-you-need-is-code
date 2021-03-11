import db from '../../fire'
import fire from '../../fire'
import { useCollectionData } from 'react-firebase-hooks/firestore'

 function Chat() {
    const messagesRef = fire.firestore().collection('Messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, {idField: 'id'});

    return (
        <div>
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)
            }
        </div>

    )

function ChatMessage(props) {
const {text, uid} = props.message;
return <p> {text} </p>

}
}

export default Chat;