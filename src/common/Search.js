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

export const Search = ({ onFilterChange }) => {
  const currentUser = firebase.auth().currentUser.uid;
  const [allUsersInfo, setAllUsersInfo] = useState([]);
  const classes = useStyles();
  const [filter, setFilter] = useState("");
  const [chatUser, setChatUser] = useState("");
  const msgArray = [currentUser+chatUser];
  const sortedMsgArray = msgArray.sort(); 
  const msgId = sortedMsgArray.toString();  

  let allUsersArray = [];
  useEffect(() => {
    firebase
      .firestore()
      .collection("Users")
      .onSnapshot((users) => {
        users.forEach((user) => {
          let userId = { id: user.id };
          let object = { ...user.data(), ...userId };
          allUsersArray = [...allUsersArray, object];
          setAllUsersInfo(allUsersArray);
        });
      });
  }, []);


  const activateChat = async (userUid) => {
    setChatUser(userUid)
    await firebase.firestore().collection("Messages").doc(msgId).set({})
  }

  
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
        name="search"
        type="search"
        id="search"
        variant="outlined"
        label="Search"
        autocomplete="false"
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
                    onClick={(e) => {activateChat(user.id)}}
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
