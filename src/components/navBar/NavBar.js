import { Navbar, Nav, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './Nav.css'
import logo from '../../logo/FindIT_white.png';
import profilePhoto from '../../photos/profilePhotos/profilePhoto.jpeg'
import { Link } from 'react-router-dom';
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
            
            <Link to='/main-page' className="text-center navItem" style={{color:'white'}}>Home</Link>
            <Link to='/chat' className="text-center navItem" style={{color:'white'}}>Chat</Link>
            <Nav.Link  className="text-center navItem" style={{color:'white'}} >People</Nav.Link>
            <Nav.Link className="text-center navItem" style={{color:'white'}} >Your adds</Nav.Link>
            <Nav.Link className="text-center navItem " style={{color:'white'}} >Location</Nav.Link>
            <div className="horizontalLaneTop"></div>
            <Link to='/' onClick={handleLogout} className="text-center navItem navHelpItem" style={{color:'white'}} >Log out</Link>
            <div className="horizontalLaneBot"></div>
            
      </Nav>
    </Navbar>
    
  </>
}