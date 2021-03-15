import { NavBar } from '../components/navBar/NavBar';
import Chat from '../components/chat/Chat'
import '../styles/Chat.css'

export const ChatPage = () => {
    return (
        <div className='chat-page-container'>
        <NavBar />
        <Chat />
        </div>
    )
}