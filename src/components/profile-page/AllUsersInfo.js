import { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Button,
  Avatar,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import firebase from "../../fire";
import defaultAvatar from "../../photos/profilePhotos/default.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export const AllUsersInfo = () => {
  const currentUser = firebase.auth().currentUser.uid;
  const [allUsersInfo, setAllUsersInfo] = useState([]);
  const [state, setState] = useState("initial");
  const classes = useStyles();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("Users")
      .onSnapshot((users) => {
        setState("loading");
        let allUsersArray = [];
        users.forEach((user) => {
          let userId = { id: user.id };
          let object = { ...user.data(), ...userId };
          allUsersArray = [...allUsersArray, object];
          setAllUsersInfo(allUsersArray);
          setState("loaded");
        });
      });
  }, []);

  const handleOnChange = (event) => {
    setFilter(event.target.value);
    // onFilterChange(event.target.value);
  };

  const filterByName = ({ name }) => {
    const lowerCaseFilter = filter.toLowerCase();
    return name.toLowerCase().includes(lowerCaseFilter);
  };

  return (
    <>
      {state === "initial" && (
        <div className="loading-page">
          <Paper elevation={3} className="profile-section">
            <Typography variant="h5">Loading your friends</Typography>
            <CircularProgress color="secondary" />
          </Paper>
        </div>
      )}

      {state === "loaded" && (
        <div className="users-info-container">
          <TextField
            name="search"
            type="search"
            id="search"
            variant="outlined"
            label="Search"
            value={filter}
            onChange={handleOnChange}
            fullWidth
            style={{ marginBottom: "30px" }}
          />
          <div className="users-profiles-container">
            {allUsersInfo
              ?.filter((user) => {
                return user.name !== "";
              })
              .filter((user) => {
                return user.id !== currentUser;
              })
              .filter(filterByName)
              .map((user) => {
                return (
                  <Paper elevation={3} className="user-section">
                    <Avatar
                      className={classes.large}
                      src={user?.avatarUrl ? user.avatarUrl : defaultAvatar}
                    />
                    <Typography
                      variant="body1"
                      color="secondary"
                      style={{ fontWeight: "bold", margin: "6px 0" }}
                    >
                      {user?.name}
                    </Typography>

                    <div className="profile-content">
                      <div className="profile-content-line">
                        <Typography
                          variant="body2"
                          color="inherit"
                          style={{ fontWeight: "400", marginRight: "6px" }}
                        >
                          Experience:
                        </Typography>
                        <Typography
                          variant="body2"
                          color="secondary"
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "900",
                          }}
                        >
                          {user?.experience}
                        </Typography>
                      </div>

                      <div className="profile-content-line">
                        <Typography
                          variant="body2"
                          color="inherit"
                          style={{ fontWeight: "400", marginRight: "6px" }}
                        >
                          Aim:
                        </Typography>
                        <Typography
                          variant="body2"
                          color="secondary"
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "900",
                          }}
                        >
                          {user?.purpose?.[0] === "projectpartner" &&
                            ` Project partner`}
                          {user?.purpose?.[0] === "projecttojoin" &&
                            ` Project to join`}
                          {user?.purpose?.[0] === "lookingaround" &&
                            ` Just looking around`}
                        </Typography>
                      </div>

                      <div className="profile-content-line">
                        <Typography
                          variant="body2"
                          color="inherit"
                          style={{ fontWeight: "400", marginRight: "6px" }}
                        >
                          City:
                        </Typography>
                        <Typography
                          variant="body2"
                          color="secondary"
                          style={{
                            textTransform: "capitalize",
                            fontWeight: "900",
                          }}
                        >
                          {user?.location}
                        </Typography>
                      </div>
                    </div>

                    <div className="user-page-buttons">
                      <Link>
                        <Button
                          color="primary"
                          style={{
                            fontSize: "0.8em",
                            backgroundColor: "#6C7ED6",
                            padding: "2px",
                          }}
                        >
                          Profile
                        </Button>
                      </Link>
                      <Link>
                        <Button
                          color="primary"
                          style={{
                            fontSize: "0.8em",
                            backgroundColor: "#6C7ED6",
                            padding: "2px",
                          }}
                        >
                          Message
                        </Button>
                      </Link>
                    </div>
                  </Paper>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};
