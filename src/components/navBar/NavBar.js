import { Navbar, Nav, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/Nav.css";
import logo from "../../logo/FindIT.png";
import defaultAvatar from "../../photos/profilePhotos/default.jpg";
import { Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../user-context/UserContext";
import fire from "../../fire";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export const NavBar = () => {
  const handleLogout = () => {
    fire.auth().signOut();
  };

  const classes = useStyles();

  const { user } = useContext(UserContext);

  return (
    <>
      <Navbar className="navbar">
        
          <div className="profilePhotoSection">
            <Image src={logo} className="logoPhoto" />
            <Link to="/profile-page">
              <Avatar
              className={classes.large}
                src={user.avatarUrl ? user.avatarUrl : defaultAvatar}
              />
            <Typography color='primary'>{user.name ? user.name : ''}</Typography>
            </Link>
          </div>
          <Nav className="flex-column ">
          <NavLink
            to="/main-page"
            className="text-center navItem"
            style={{ color: "white", textTransform: "capitalize" }}
          >
            home
          </NavLink>
          <NavLink
            to="/chat"
            className="text-center navItem"
            style={{ color: "white", textTransform: "capitalize" }}
          >
            chat
          </NavLink>
          <NavLink
            to="/users-page"
            className="text-center navItem"
            style={{ color: "white", textTransform: "capitalize" }}
          >
            users
          </NavLink>
          <Nav.Link
            className="text-center navItem"
            style={{ color: "white", textTransform: "capitalize" }}
          >
            your posts
          </Nav.Link>
          <Nav.Link
            className="text-center navItem "
            style={{ color: "white", textTransform: "capitalize" }}
          >
            location
          </Nav.Link>
          <div className="horizontalLaneTop"></div>
          <Link
            to="/"
            onClick={handleLogout}
            className="text-center navItem navHelpItem"
            style={{ color: "white", textTransform: "capitalize" }}
          >
            Log out
          </Link>
          <div className="horizontalLaneBot"></div>
        </Nav>
      </Navbar>
    </>
  );
};
