import { Navbar, Nav, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './Nav.css'
import logo from '../../logo/FindIT_white.png';
import profilePhoto from '../../photos/profilePhotos/profilePhoto.jpeg'

import { Link, NavLink } from 'react-router-dom';
import fire from '../../fire';


export const NavBar = () => {
  const handleLogout = () => {
    fire.auth().signOut();
  }
    return <>
    
    <Navbar  className="navbar">
      
      <Nav className="flex-column ">
            
            <div className="profilePhotoSection">
            <Image src={logo} className="logoPhoto "  /> 
            
            <Link to='/profile-page'>
            <Image src={profilePhoto} fluid className="profilePhoto rounded mb-0" /> 
            </Link>

            </div>
            <NavLink to="/main-page" className="text-center navItem" style={{color:'white', textTransform: 'capitalize'}}>home</NavLink>
            <Nav.Link className="text-center navItem" style={{color:'white', textTransform: 'uppercase'}}>chat</Nav.Link>
            <Link to='/chat' className="text-center navItem" style={{color:'white'}}>Chat</Link>
            <NavLink to="/users-page"  className="text-center navItem" style={{color:'white', textTransform: 'uppercase'}} >users</NavLink>
            <Nav.Link className="text-center navItem" style={{color:'white', textTransform: 'uppercase'}} >your posts</Nav.Link>
            <Nav.Link className="text-center navItem " style={{color:'white', textTransform: 'uppercase'}} >location</Nav.Link>
            <div className="horizontalLaneTop"></div>
            <Link to='/' onClick={handleLogout} className="text-center navItem navHelpItem" style={{color:'white'}} >Log out</Link>
            <div className="horizontalLaneBot"></div>
            
      </Nav>
    </Navbar>
    
  </>
}