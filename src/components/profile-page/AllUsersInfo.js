import { useEffect, useState } from "react";
import { Paper, Typography, Button, Avatar } from "@material-ui/core";
import firebase from "../../fire";
import defaultAvatar from "../../photos/profilePhotos/default.jpg";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
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
      <TextField
        name="search"
        type="search"
        id="search"
        variant="outlined"
        label="Search"
        value={filter}
        onChange={handleOnChange}
        fullWidth
      />

      {state === "initial" && (
        <div className="profile-sections-container">
          <Paper elevation={3} className="profile-section">
            <p>Loading your friends</p>
          </Paper>
        </div>
      )}

      {state === "loaded" && (
        <div className="profile-sections-container">
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
                        variant="body1"
                        color="inherit"
                        style={{ fontWeight: "400", marginRight: "6px" }}
                      >
                        Looking for:
                      </Typography>
                      <Typography
                        variant="body1"
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
                        variant="body1"
                        color="inherit"
                        style={{ fontWeight: "400", marginRight: "6px" }}
                      >
                        Location:
                      </Typography>
                      <Typography
                        variant="body1"
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
                  <Link>
                    <Button
                      color="primary"
                      style={{ backgroundColor: "#6C7ED6", margin: "6px 0 0" }}
                    >
                      Profile
                    </Button>
                  </Link>
                  <Link>
                    <Button
                      color="primary"
                      style={{ backgroundColor: "#6C7ED6", margin: "6px 0 0" }}
                    >
                      Message
                    </Button>
                  </Link>
                </Paper>
              );
            })}
        </div>
      )}
    </>
  );
};

// <Paper elevation={3} className="profile-section">
// <Avatar
//   className={classes.large}
//   src={user.avatarUrl ? user.avatarUrl : defaultAvatar}
// />
// <Typography
//   variant="h5"
//   color="inherit"
//   style={{ fontWeight: "bold" }}
// >
//   {user.name}
// </Typography>
// <Typography
//   variant="h5"
//   color="inherit"
//   style={{ textTransform: "capitalize" }}
// >
//   Experience: {user.experience}
// </Typography>
// <Typography
//   variant="h5"
//   color="inherit"
//   style={{ textTransform: "capitalize" }}
// >
//   Looking for: {user.purpose}
// </Typography>
// <Typography variant="h5" color="inherit">
//   Location: {user.location}
// </Typography>
// <Button
//   color="primary"
//   style={{ backgroundColor: "#6C7ED6" }}
// >
//   See more
// </Button>
// </Paper>
