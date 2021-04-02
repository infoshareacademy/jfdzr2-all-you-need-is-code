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
          src={user?.avatarUrl ? user.avatarUrl : defaultAvatar}
        />
        <Typography
          variant="h6"
          color="secondary"
          style={{ fontWeight: "bold", margin: "6px 0" }}
        >
          {user?.name}
        </Typography>

        <div className="profile-content">
          <div className="profile-content-line">
            <Typography
              variant="body1"
              color="inherit"
              style={{ fontWeight: "400", marginRight: "6px" }}
            >
              Experience:
            </Typography>
            <Typography
              variant="body1"
              color="secondary"
              style={{ textTransform: "capitalize", fontWeight: "900" }}
            >
              {user?.experience}
            </Typography>
          </div>

          <div className="profile-content-line">
            <Typography
              variant="body1"
              color="inherit"
              style={{ fontWeight: "400", marginRight: "6px" }}
            >
              Looking for:
            </Typography>
            <Typography
              variant="body1"
              color="secondary"
              style={{ textTransform: "capitalize", fontWeight: "900" }}
            >
              {user?.purpose?.[0] === "projectpartner" && ` Project partner`}
              {user?.purpose?.[0] === "projecttojoin" && ` Project to join`}
              {user?.purpose?.[0] === "lookingaround" && ` Just looking around`}
            </Typography>
          </div>

          <div className="profile-content-line">
            <Typography
              variant="body1"
              color="inherit"
              style={{ fontWeight: "400", marginRight: "6px" }}
            >
              Location:
            </Typography>
            <Typography
              variant="body1"
              color="secondary"
              style={{ textTransform: "capitalize", fontWeight: "900" }}
            >
              {user?.location}
            </Typography>
          </div>

          <a target="_blank" href={user?.github} rel="noreferrer" className="profile-content-line">
            <Typography
              variant="body1"
              color="secondary"
              style={{ textTransform: "capitalize", fontWeight: "900", display: "flex", alignItems: "center" }}
            >
              <GitHubIcon style={{ marginRight: "6px" }} />
              GitHub: {user?.github?.slice(19)}
            </Typography>
          </a>

          <a target="_blank" href={user?.linkedin} rel="noreferrer" className="profile-content-line">
            <Typography
              variant="body1"
              color="secondary"
              style={{ textTransform: "capitalize", fontWeight: "900", display: "flex", alignItems: "center" }}
            >
              <LinkedInIcon style={{ marginRight: "6px" }} />
              LinkedIn: {user?.linkedin?.slice(28).slice(0, -1)}
            </Typography>
          </a>
        </div>
        <Link to="/edit-profile">
          <Button
            color="primary"
            style={{ backgroundColor: "#6C7ED6", margin: "6px 0 0" }}
          >
            Edit your profile
          </Button>
        </Link>
      </Paper>

      <Paper elevation={3} className="profile-section">
        <DevicesIcon color="secondary" />
        <Typography variant="h6" color="secondary" style={{ fontWeight: "bold", margin: "0 0 6px" }}>
          Technologies:
        </Typography>
        <div className="technologies-list" style={{ color: "black" }}>
          {user?.technologies?.map((technology, index) => {
            return (
              <div className="technologies-list-item" key={index}>
                <img
                  className="technology-icon"
                  alt={technology}
                  src={
                    process.env.PUBLIC_URL + `/technologies/${technology}.png`
                  }
                />
                <Typography
                  variant="body1"
                  color="inherit"
                  style={{ fontWeight: "400" }}
                >
                  {technology}
                </Typography>
              </div>
            );
          })}
        </div>
      </Paper>

      <Paper elevation={3} className="profile-section">
        <BorderColorIcon color="secondary" />
        <Typography variant="h6" color="secondary" style={{ fontWeight: "bold", margin: "0 0 6px" }}>
          About:
        </Typography>
        <Typography variant="body1" color="inherit" style={{ fontWeight: "400" }}>
          {user?.about}
        </Typography>
      </Paper>

      <Paper elevation={3} className="profile-section">
        <GitHubIcon color="secondary" />
        <Typography variant="h6" color="secondary" style={{ fontWeight: "bold", margin: "0 0 6px" }}>
          Projects:
        </Typography>
        <Typography variant="body1" color="inherit" style={{ fontWeight: "400" }}>
          {user?.projects}
        </Typography>
      </Paper>
    </div>
  );
};
