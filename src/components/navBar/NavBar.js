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
            <NavLink to='/chat' className="text-center navItem" style={{color:'white', textTransform: 'capitalize'}}>chat</NavLink> 
            <NavLink to="/users-page"  className="text-center navItem" style={{color:'white', textTransform: 'capitalize'}} >users</NavLink>
            <Nav.Link className="text-center navItem" style={{color:'white', textTransform: 'capitalize'}} >your posts</Nav.Link>
            <Nav.Link className="text-center navItem " style={{color:'white', textTransform: 'capitalize'}} >location</Nav.Link>
            <div className="horizontalLaneTop"></div>
            <Link to='/' onClick={handleLogout} className="text-center navItem navHelpItem" style={{color:'white', textTransform: 'capitalize'}} >Log out</Link>
            <div className="horizontalLaneBot"></div>
      </Nav>
    </Navbar>
    
  </>
}