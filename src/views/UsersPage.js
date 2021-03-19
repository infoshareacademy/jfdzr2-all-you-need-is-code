import { NavBar } from '../components/navBar/NavBar';
import { AllUsersInfo } from '../components/profile-page/AllUsersInfo'
import '../styles/ProfilePage.css'

export const UsersPage = () => {
    return (
        <div className='profile-page-container'>
        <NavBar />
        <AllUsersInfo />
        </div>
    )
}