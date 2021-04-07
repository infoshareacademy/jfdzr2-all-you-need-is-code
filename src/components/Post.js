import "../styles/Post.css";
import profilePhoto from "../photos/profilePhotos/profilePhoto.jpeg";
import Likes from "../photos/likes.png";
import Coment from "../photos/coment.png";
import fire from "../fire";
import React, { useState, useEffect } from "react";
import defaultAvatar from "../photos/profilePhotos/default.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  Button,
  TextField,
  Paper,
  Avatar,
  CircularProgress,
  Typography,
} from "@material-ui/core";
export default function Post(props) {
  const [showComment, setShowComment] = useState(false);
  const [myValue, setValue] = useState("");

  function handleComment() {
    if (!showComment) {
      setShowComment(true);
    } else {
      setShowComment(false);
    }
  }
  function handleLike(e) {
    const userUid = fire.auth().currentUser.uid.toString();
    const docRef = fire.firestore().collection("Posts").doc(e.target.id);
    var likeByYou = false;
    let arrayPeopleLike = [];
    let likes = {};
    docRef
      .get()
      .then((snap) => {
        arrayPeopleLike = Object.keys(snap.data().likes);
        if (arrayPeopleLike.includes(userUid)) {
          likeByYou = true;
        }
      })
      .then(() => {
        let data = {};
        docRef
          .get()
          .then((query) => {
            if (likeByYou) {
              data = query.data().likes;
              delete data[userUid.toString()];
              likes = { ...data };
            } else {
              data = query.data().likes;
              likes = { ...data, ...{ [userUid]: true } };
            }
          })
          .then(() => {
            fire.firestore().runTransaction(function (transaction) {
              // This code may get re-run multiple times if there are conflicts.
              return transaction.get(docRef).then(function (doc) {
                transaction.update(docRef, {
                  likes,
                });
              });
            });
          });
      });
  }
  function handleSubmit(e) {
    const userUid = fire.auth().currentUser.uid.toString();
    const docRef = fire.firestore().collection("Posts").doc(e.target.id);
    e.preventDefault();
    let data = {};
    let comments = {};
    let i = 0;
    docRef
      .get()
      .then((query) => {
        data = query.data().comments;
        if (Object.keys(data).includes(userUid)) {
          for (let j = 0; j < Object.keys(data).length; j++) {
            if (!Object.keys(data).includes(userUid + j.toString())) {
              comments = { ...data, ...{ [userUid + j.toString()]: myValue } };
            }
          }
        } else {
          comments = { ...data, ...{ [userUid]: myValue } };
        }
      })
      .then(() => {
        fire.firestore().runTransaction(function (transaction) {
          return transaction.get(docRef).then(function (doc) {
            transaction.update(docRef, {
              comments,
            });
          });
        });
      })
      .then(() => {
        setValue("");
      });
  }

  const [state, setState] = useState("initial");
  const [myUser, setMyUser] = useState({});
  const [allUsersName, setAllUsersName] = useState({});
  const [allUsersAvatar, setAllUsersAvatar] = useState({});
  const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
    small: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  }));
  const classes = useStyles();
  useEffect(() => {
    fire
      .firestore()
      .collection("Users")
      .onSnapshot((querySnapshot) => {
        let allUsersName = {};
        let allUsersAvatar = {};
        querySnapshot.docs.forEach((doc) => {
          allUsersName = { ...allUsersName, [doc.id]: doc.data().name };
          allUsersAvatar = {
            ...allUsersAvatar,
            [doc.id]: doc.data().avatarUrl,
          };
        });
        setAllUsersName(allUsersName);
        setAllUsersAvatar(allUsersAvatar);
      });
  }, []);
  useEffect(() => {
    fire
      .firestore()
      .collection("Users")
      .doc(props.id)
      .onSnapshot((user) => {
        setState("loading");
        setMyUser(user.data());
        setState("loaded");
      });
  }, [props.id]);
  return (
    <>
      {state === "initial" && (
        <div className="loading-page">
          <Paper elevation={3} className="profile-section">
            <Typography variant="h5">Loading posts</Typography>
            <CircularProgress color="secondary" />
          </Paper>
        </div>
      )}
      {state === "loaded" && (
        <Paper elevation={3} className="Modal">
          <div className="modalOfPost">
            <div className="informationAboutTheWriter">
              <Link to={`/users-page/${myUser?.userUid}`}>
                <Avatar className={classes.large} src={myUser?.avatarUrl} />
              </Link>

              <div className="name-time-container">
                <Link to={`/users-page/${myUser?.userUid}`}>
                  <Typography variant="h6" color="secondary">
                    {myUser?.name}
                  </Typography>
                </Link>
                <Typography variant="body1" color="secondary">
                  {props.time}
                </Typography>
              </div>
            </div>

            <Typography variant="h5" style={{ textAlign: "center" }}>
              {props.title}
            </Typography>
            <Typography variant="body1" style={{ textAlign: "left" }}>
              {props.text}
            </Typography>

            <div className="postStatus">
              <button onClick={handleLike} className="likesSection">
                <img
                  className="likesPhoto"
                  id={props.index}
                  src={Likes}
                  alt="likes-counter"
                ></img>
                <p className="likesCounter">{props.likes}</p>
              </button>
              <button onClick={handleComment} className="comentSection">
                <img className="comentPhoto" src={Coment}></img>
                <p>More comments</p>
              </button>
            </div>
            <form
              onSubmit={handleSubmit}
              id={props.index}
              className="formComment"
            >
              <TextField
                id="standard-secondary"
                value={myValue}
                onChange={(e) => setValue(e.target.value)}
                className="commentValue"
                type="text"
                placeholder="Write a comment..."
              ></TextField>

              <Button
                color="secondary"
                variant="contained"
                type="submit"
                style={{
                  backgroundColor: "#6C7ED6",
                  margin: "6px 10px 0px",
                }}
              >
                Send
              </Button>
            </form>

            {props.comments
              .slice(0, showComment === false ? 1 : undefined)
              .map((comment) => (
                <>
                  <div className="comment" id="allcomments">
                    <Link to={`/users-page/${comment.id.substring(0, 28)}`}>
                      <Avatar
                        className={classes.small}
                        src={allUsersAvatar[comment.id.substring(0, 28)]}
                      />
                    </Link>

                    <div className="commentContent">
                      <Link to={`/users-page/${comment.id.substring(0, 28)}`}>
                        <Typography variant="body1" color="secondary">
                          {allUsersName[comment.id.substring(0, 28)]}
                        </Typography>
                      </Link>
                      <Typography variant="body2">{comment.value}</Typography>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </Paper>
      )}
    </>
  );
}
