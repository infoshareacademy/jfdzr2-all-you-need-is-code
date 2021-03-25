import { useEffect, useReducer, useState } from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import { Image } from "react-bootstrap";
import firebase from "../../fire";
import defaultAvatar from '../../photos/profilePhotos/default.jpg'

export const AllUsersInfo = () => {
  const currentUser = firebase.auth().currentUser.uid;
  const [allUsersInfo, setAllUsersInfo] = useState([]);
  const [state, setState] = useState("initial");

  let allUsersArray = [];

  useEffect(() => {
    firebase
      .firestore()
      .collection("Users")
      .onSnapshot((users) => {
        setState("loading");
        users.forEach((user) => {
          let userId = { id: user.id };
          let object = { ...user.data(), ...userId };
          allUsersArray = [...allUsersArray, object];
          setAllUsersInfo(allUsersArray);
          setState("loaded");
        });
      });
  }, []);

  return (
    <>
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
              return user.name !== '';
            }).filter((user) => {
              return user.id !== currentUser;
            })
            .map((user) => {
              return (
                <Paper elevation={3} className="profile-section">
                  <Image
                  src= {user.avatarUrl || defaultAvatar}
                  fluid
                  className="profilePhoto2 rounded mb-0"
                />
                  <Typography
                    variant="h5"
                    color="inherit"
                    style={{ fontWeight: "bold" }}
                  >
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
                  <Button
                    color="primary"
                    style={{ backgroundColor: "lightgrey" }}
                  >
                    See more
                  </Button>
                </Paper>
              );
            })}
        </div>
      )}
    </>
  );
};

// Image ?
//   const [avatarUrl, setAvatarUrl] = useState("");

//   const storage = firebase.storage().ref();
//   const avatarRef = storageRef.child(`images/${user}.jpg`);
