import { Paper, Typography, Button, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import defaultAvatar from "../../photos/profilePhotos/default.jpg";
import { useContext } from "react";
import { UserContext } from "../user-context/UserContext";
import { Link } from "react-router-dom";

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
        <Typography
          variant="p"
          color="inherit"
          style={{ textTransform: "capitalize" }}
        >
          Looking for: {user.purpose}
        </Typography>
        <Typography variant="p" color="inherit">
          Location: {user.location}
        </Typography>
        <Link to='/primary-survey'>
        <Button color="primary" style={{ backgroundColor: "#6C7ED6" }}>
          Edit your profile
        </Button>
        </Link>
      </Paper>
      <Paper elevation={3} className="profile-section">
        <Typography variant="h6" color="inherit">
          About:
        </Typography>
        <Typography variant="p" color="inherit">
          {user.about}
        </Typography>
      </Paper>
      <Paper elevation={3} className="profile-section">
        <Typography variant="h6" color="inherit">
          Technologies:
        </Typography>
        <ul style={{ color: "black" }}>
          {user.technologies?.map((technology, index) => {
            return (
              <li key={index} style={{ color: "black" }}>
                {technology}
              </li>
            );
          })}
        </ul>
      </Paper>
      <Paper elevation={3} className="profile-section">
        <Typography variant="h6" color="inherit">
          Projects:
        </Typography>
        <Typography variant="p" color="inherit">
          {user.projects}
        </Typography>
      </Paper>
    </div>
  );
};