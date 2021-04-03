import { useEffect, useState } from "react";
import { Paper, Typography, Button, Avatar } from "@material-ui/core";
import firebase from "../fire";
import defaultAvatar from "../photos/profilePhotos/default.jpg";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../styles/Chat.css";

const useStyles = makeStyles((theme) => ({
  medium: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

export const Search = ({ onResultSelect }) => {
  const currentUser = firebase.auth().currentUser.uid;
  const [allUsersInfo, setAllUsersInfo] = useState([]);
  const classes = useStyles();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("Users")
      .onSnapshot((users) => {
        let allUsersArray = [];
        users.forEach((user) => {
          let userId = { id: user.id };
          let object = { ...user.data(), ...userId };
          allUsersArray = [...allUsersArray, object];
          setAllUsersInfo(allUsersArray);
        });
      });
  }, []);

  
  const handleOnChange = (event) => {
    setFilter(event.target.value);
  };


  const filterByName = ({ name }) => {
    const lowerCaseFilter = filter.toLowerCase();
    return name.toLowerCase().includes(lowerCaseFilter);
  };

  return (
    <>
      <TextField
        type="search"
        variant="outlined"
        label="Search"
        value={filter}
        onChange={handleOnChange}
        fullWidth
      />
      <div>
        {filter.length === 0 ? (
          <div></div>
        ) : (
          allUsersInfo
            .filter((user) => {
              return user.id !== currentUser;
            })
            .filter(filterByName)
            .map((user) => {
              const clickedUser = {
                userName: user.name,
                userId: user.id,
                avatarUrl: user.avatarUrl,
              };

              return (
                <Paper elevation={2} className="search-container">
                  <Avatar
                    className={classes.medium}
                    src={user.avatarUrl ? user.avatarUrl : defaultAvatar}
                  />
                  <Typography>{user.name}</Typography>
                  <Button
                    color="primary"
                    style={{ backgroundColor: "#6C7ED6" }}
                    clickedUser={clickedUser}
                    onClick={(e) => {onResultSelect(user.id)}}
                    >
                    Message
                  </Button>
                </Paper>
              );
            })
        )}
      </div>
    </>
  );
};
