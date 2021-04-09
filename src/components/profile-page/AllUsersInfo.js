import { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Avatar,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import firebase from "../../fire";
import defaultAvatar from "../../photos/profilePhotos/default.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  labelFromPurpose,
  labelFromExperience,
  useUser,
  technologies,
} from "../user-context/UserContextProvider";

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
  const [skills, setSkills] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("Users")
      .onSnapshot((users) => {
        setState("loading");
        let allUsersArray = [];
        users.forEach((user) => {
          allUsersArray = [...allUsersArray, user.data()];
          setAllUsersInfo(allUsersArray);
          setState("loaded");
        });
      });
  }, []);
  
  const handleOnChange = (event) => {
    setFilter(event.target.value);
  };


  const handleOnSkillsChange = (event) => {
    setSkills(event.target.value);
  };

  const filterByName = ({ name }) => {
    const lowerCaseFilter = filter.toLowerCase();
    return name.toLowerCase().includes(lowerCaseFilter)
  };

  return (
    <>
      {state === "initial" && (
        <div className="loading-page">
          <Paper elevation={3} className="profile-section">
            <Typography variant="h5">Loading other users</Typography>
            <CircularProgress color="secondary" />
          </Paper>
        </div>
      )}

      {state === "loaded" && (
        <div className="users-info-container">
          <div className="search-bar-cointainer">
          <TextField
            type="search"
            variant="outlined"
            label="Search by name..."
            value={filter}
            onChange={handleOnChange}
            fullWidth
            style={{ marginBottom: "30px", marginRight: "2px" }}
          />
          <TextField
            type="search"
            variant="outlined"
            label="Search by technology..."
            value={skills}
            onChange={handleOnSkillsChange}
            fullWidth
            style={{ marginBottom: "30px", marginLeft: "2px" }}
          />
          </div>
          <div className="users-profiles-container">
            {allUsersInfo
              ?.filter((user) => {
                return user.name !== "";
              })
              ?.filter((user) => {
                return user.userUid !== null;
              })
              .filter((user) => {
                return user.userUid !== currentUser;
              })
              .filter(filterByName)
              .filter(data => data.technologies?.some(t=>t.toLowerCase().includes(skills)))
              .sort((user1, user2) => user2.name.length - user1.name.length)
              .map((user) => {
                return (
                  <Paper elevation={3} className="user-section">
                    <Link
                      to={`/users-page/${user?.userUid}`}
                      className="user-name-link"
                    >
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
                    </Link>

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
                          {" "}
                          {labelFromExperience(user?.experience)}
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
                          {" "}
                          {labelFromPurpose(user?.purpose)}
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
                          {user?.location ? user.location : "unknown"}
                        </Typography>
                      </div>

                      <div
                        className="technologies-list-small"
                        style={{ color: "black" }}
                      >
                        {user?.technologies
                          ?.slice(0, 4)
                          .map((technology, index) => {
                            return (
                              <img
                                key={index}
                                className="technology-icon-small"
                                alt={technology}
                                src={
                                  process.env.PUBLIC_URL +
                                  `/technologies/${technology}.png`
                                }
                              />
                            );
                          })}
                        <p>...</p>
                      </div>
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
