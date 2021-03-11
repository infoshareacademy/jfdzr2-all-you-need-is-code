import { NavBar } from '../components/navBar/NavBar';
import Chat from '../components/chat/Chat'
import '../styles/ProfilePage.css'

export const ChatPage = () => {
    return (
        <div className='profile-page-container'>
        <NavBar />
        <Chat />
        </div>
    )
}