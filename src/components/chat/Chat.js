import db from '../../fire';
import fire from '../../fire';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {useState} from 'react';
const auth = fire.auth();

 function Chat() {
    const messagesRef = fire.firestore().collection('Messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, {idField: 'id'});
    const [formValue, setFormValue] = useState('')
    
    const sendMessage = async(e) => {
        e.preventDefault();
        const { uid, photoURL} = auth.currentUser
        await messagesRef.add({
            text: formValue,
            // createdAt: fire.firestore.FieldValue.serverTimestamp(),
            createdAt: Date.now(),
            uid,
            photoURL

        });
        setFormValue('');
    }

    return (
        <>
        <div>
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)
            }
        </div>

        <form onSubmit={sendMessage}>
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
            <button type="sumbit">Send</button>


        </form>
        </>

    )

function ChatMessage(props) {
const {text, uid, photoURL} = props.message;
const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
return (
<div className={`message ${messageClass}`}>
<img src={photoURL} />
<p> {text}</p>
</div>)

}
}

export default Chat;