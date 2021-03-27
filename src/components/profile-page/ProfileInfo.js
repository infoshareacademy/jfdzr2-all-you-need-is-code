import { Paper, Typography, Button, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import defaultAvatar from "../../photos/profilePhotos/default.jpg";
import { useContext } from "react";
import { UserContext } from "../user-context/UserContext";
import { Link } from "react-router-dom";

import BorderColorIcon from "@material-ui/icons/BorderColor";
import DevicesIcon from "@material-ui/icons/Devices";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import { TechnologiesIcons } from '../../photos/TechnologiesIcons'

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
}));

export const ProfileInfo = () => {
  const { user } = useContext(UserContext);

  const classes = useStyles();

  return (
    <div className="profile-sections-container">
      <Paper elevation={3} className="profile-section">
        <Avatar
          className={classes.large}
          src={user.avatarUrl ? user.avatarUrl : defaultAvatar}
        />
        <Typography variant="h5" color="inherit" style={{ fontWeight: "bold" }}>
          {user.name}
        </Typography>
        <Typography
          variant="p"
          color="inherit"
          style={{ textTransform: "capitalize" }}
        >
          Experience: {user.experience}
        </Typography>
        <Typography variant="p" color="inherit">
          Looking for:
          {user.purpose[0] === "projectpartner" && ` Project partner`}
          {user.purpose[0] === "projecttojoin" && ` Project to join`}
          {user.purpose[0] === "lookingaround" && ` Just looking around`}
        </Typography>
        <Typography
          variant="p"
          color="inherit"
          style={{ textTransform: "capitalize" }}
        >
          Location: {user.location}
        </Typography>
        <a target="_blank" href="Https://Github.Com/MichalNielubszyc">
          <Typography
            variant="p"
            color="inherit"
            style={{ textTransform: "capitalize" }}
          >
            <GitHubIcon />
            GitHub Profile
          </Typography>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/michal-nielubszyc/"
        >
          <Typography
            variant="p"
            color="inherit"
            style={{ textTransform: "capitalize" }}
          >
            <LinkedInIcon />
            LinkedIn Profile
          </Typography>
        </a>
        <Link to="/primary-survey">
          <Button color="primary" style={{ backgroundColor: "#6C7ED6" }}>
            Edit your profile
          </Button>
        </Link>
      </Paper>

      <Paper elevation={3} className="profile-section">
        <BorderColorIcon />
        <Typography variant="h6" color="inherit">
          About:
        </Typography>
        <Typography
          variant="p"
          color="inherit"
          className="profile-section-content"
        >
          {user.about}
        </Typography>
      </Paper>

      <Paper elevation={3} className="profile-section">
        <DevicesIcon />
        <Typography variant="h6" color="inherit">
          Technologies:
        </Typography>
        <ul className="technologies-list">
          {user.technologies?.map((technology, index) => {
            return (
              <li className="technologies-list-item" key={index}>
                {technology}
              </li>
            );
          })}
        </ul>
      </Paper>

      <Paper elevation={3} className="profile-section">
        <GitHubIcon />
        <Typography variant="h6" color="inherit">
          Projects:
        </Typography>
        <Typography
          variant="p"
          color="inherit"
          className="profile-section-content"
        >
          {user.projects}
        </Typography>
      </Paper>
    </div>
  );
};
