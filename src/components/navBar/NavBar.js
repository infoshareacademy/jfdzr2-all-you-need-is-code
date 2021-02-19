import { Navbar, Nav, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './Nav.css'
import logo from '../../logo/FindIT_white.png';
import profilePhoto from '../../photos/profilePhotos/profilePhoto.jpeg'
export const NavBar = () => {
    return <>
    <Navbar  className="navbar">
      
      <Nav className="flex-column ">
            <Image src={logo} className="logoPhoto" /> 
            <Image src={profilePhoto} fluid className="profilePhoto rounded mb-0" alt="profilePhoto" /> 
            <Nav.Link className="text-center navItem" style={{color:'white'}}>home</Nav.Link>
            <Nav.Link className="text-center navItem" style={{color:'white'}}>inbox</Nav.Link>
            <Nav.Link  className="text-center navItem" style={{color:'white'}} >people</Nav.Link>
            <Nav.Link className="text-center navItem" style={{color:'white'}} >you adds</Nav.Link>
            <Nav.Link className="text-center navItem " style={{color:'white'}} >location</Nav.Link>
            <div className="horizontalLaneTop"></div>
            <Nav.Link className="text-center navItem navHelpItem" style={{color:'white'}} >help</Nav.Link>
            <div className="horizontalLaneBot"></div>
      </Nav>
    </Navbar>
    
  </>
}