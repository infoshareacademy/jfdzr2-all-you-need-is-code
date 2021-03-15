import db from '../../fire';
import fire from '../../fire';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {useState, useRef} from 'react';
import '../../styles/Chat.css'
import Button from "@material-ui/core/Button";


const auth = fire.auth();

 function Chat() {
    const scroll = useRef()
    const messagesRef = fire.firestore().collection('Messages');
    const query = messagesRef.orderBy('createdAt').limit(250);
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
        scroll.current.scrollIntoView({ bahavior: 'smooth'})
    }


    return (
        <>
        <header className='chat-header'>
            
        </header>
        <section className='chat-section'>
        <main className="chat-main">
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            <span className="chat-span" ref={scroll}></span>

        </main>

        <form className='chat-form' onSubmit={sendMessage}>
            <input className='chat-input' value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
            <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="secondary">
            Submit </Button>


        </form>
        </section>
</>
    )

function ChatMessage(props) {
const {text, uid, photoURL} = props.message;
const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
return (
    <>
<div className={`message ${messageClass}`}>
<img className='chat-img' src={photoURL || 'https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png'} />
<p className='chat-text'> {text}</p>

</div>
</>)

}
}

export default Chat;