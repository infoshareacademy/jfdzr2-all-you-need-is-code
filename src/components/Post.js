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
    var i = 0;
    let arrayPeopleLike = [];

    docRef
      .get()
      .then((snap) => {
        arrayPeopleLike = Object.keys(snap.data().likes);
        if (arrayPeopleLike.includes(userUid)) {
          likeByYou = true;
        }
      })
      .then(() => {
        if (likeByYou) {
        } else {
          let data = {};
          docRef
            .get()
            .then((query) => {
              data = query.data().likes;
            })
            .then(
              fire.firestore().runTransaction(function (transaction) {
                // This code may get re-run multiple times if there are conflicts.
                return transaction.get(docRef).then(function (doc) {
                  transaction.update(docRef, {
                    likes: {
                      [userUid]: true,
                    },
                  });
                });
              })
            );
        }
      });
  }
  function handleSubmit(e) {
    console.log(document.querySelector(".commentValue").innerText);
    const userUid = fire.auth().currentUser.uid.toString();
    const docRef = fire.firestore().collection("Posts").doc(e.target.id);
    e.preventDefault();
    let data = {};
    let comments = {};
    docRef
      .get()
      .then((query) => {
        data = query.data().comments;

        comments = { ...data, ...{ [userUid]: myValue } };
      })
      .then(() => {
        console.log(data);
        console.log(comments);
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
                  03.04.2021, 21:23
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

              <p className="data">{props.time}</p>
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
                className="buttonSubmit"
                variant="contained"
                type="submit"
                style={{
                  backgroundColor: "#6C7ED6",
                  margin: "6px 0 0",
                }}
              >
                Send
              </Button>
            </form>

            {showComment === false && props.comment != null && (
              <>
                <div className="comment" id="firstcomment">
                  <Link>
                    <Avatar className={classes.small} src={profilePhoto} />
                  </Link>

                  <div className="commentContent">
                    <Link>
                      <Typography variant="body1" color="secondary">
                        Hubert Urbański
                      </Typography>
                    </Link>
                    <Typography variant="body2">{props.comment}</Typography>
                  </div>
                </div>
              </>
            )}

            {showComment === true && (
              <>
                {props.comments.map((item, index) => (
                  <>
                    <div className="comment" id="allcomments">
                      <Link>
                        <Avatar className={classes.small} src={profilePhoto} />
                      </Link>

                      <div className="commentContent">
                        <Link>
                          <Typography variant="body1" color="secondary">
                            Hubert Urbański
                          </Typography>
                        </Link>
                        <Typography variant="body2">{item}</Typography>
                      </div>
                    </div>
                  </>
                ))}
              </>
            )}
          </div>
        </Paper>
      )}
    </>
  );
}
