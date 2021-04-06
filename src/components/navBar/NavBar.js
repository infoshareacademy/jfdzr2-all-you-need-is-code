import { Navbar, Nav, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/Nav.css";
import logo from "../../logo/FindIT_white_cropped.png";
import defaultAvatar from "../../photos/profilePhotos/default.jpg";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Link, NavLink } from "react-router-dom";
import fire from "../../fire";
import { useUser } from "../user-context/UserContextProvider";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));

export const NavBar = () => {
  const handleLogout = () => {
    fire.auth().signOut();
  };

  const classes = useStyles();

  const { user } = useUser();

  return (
    <>
      <div className="navbar">
        <div className="flex-container">
          <div className="links-container">
            <div className="profile-photo-section">
              <Link to="/main-page" className='logo-section'>
                <Image src={logo} className="logoPhoto" />
              </Link>
              <Link to="/profile-page" className="profile-link">
                <Avatar
                  className={classes.large}
                  src={user?.avatarUrl? user.avatarUrl : defaultAvatar}
                />
                <p className="user-name">{user?.name? user.name : ""}</p>
              </Link>
            </div>

            <div className="links-section">
              <NavLink to="/main-page" className="text-center navItem">
                home
              </NavLink>
              <NavLink to="/chat" className="text-center navItem">
                chat
              </NavLink>
              <NavLink to="/users-page" className="text-center navItem">
                users
              </NavLink>
              <Nav.Link className="text-center navItem">your posts</Nav.Link>
            </div>
          </div>

          <div className="logout-section">
            <div className="horizontalLaneTop"></div>
            <Link
              to="/"
              onClick={handleLogout}
              className="text-center navItem navHelpItem"
            >
              Log out
            </Link>
            <div className="horizontalLaneBot"></div>
            <p className="copyright-text">Copyright © 2021 All U Need Is Code </p>
          </div>
        </div>
      </div>
    </>
  );
};
