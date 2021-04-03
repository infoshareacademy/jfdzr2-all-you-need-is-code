import "../styles/Post.css";
import profilePhoto from "../photos/profilePhotos/profilePhoto.jpeg";
import Likes from "../photos/likes.png";
import Coment from "../photos/coment.png";
import fire from "../fire";
import React, { useState } from "react";
import { Button, TextField, Paper } from "@material-ui/core";
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
    const data = {
      name: "Kamil",
    };
    
    docRef
      .get()
      .then((query) => {})
      .then(
        fire.firestore().runTransaction(function (transaction) {
          // This code may get re-run multiple times if there are conflicts.
          return transaction.get(docRef).then(function (doc) {
            transaction.update(docRef, {
              comments: {
                 ...data,
                [userUid]: myValue,
              },
            });
          });
        })
      )
      .then(() => {
        setValue("");
      });
  }

  return (
    <Paper elevation={3} className="Modal">
      <div className="modalOfPost">
        <div className="informationAboutTheWriter">
          <img className="profile-Post-Photo" src={profilePhoto}></img>
          <h3 className="nameOfWriter">Amanda Steal</h3>
          <p className="positionInProgramming">Senior Front end Developer</p>
        </div>
        <h2 className="tittle">{props.title}</h2>
        <div className="contentOfThePost">
          <p className="textOfPost">{props.text}</p>
          <div className="postStatus">
            <button onClick={handleLike} className="likesSection">
              <img className="likesPhoto" id={props.index} src={Likes}></img>
              <p className="likesCounter">{props.likes}</p>
            </button>
            <button onClick={handleComment} className="comentSection">
              <img className="comentPhoto" src={Coment}></img>
              <p>comment</p>
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
              placeholder="What's in your mind?"
            ></TextField>

            <Button
              className="buttonSubmit"
              variant="contained"
              type="submit"
              color="secondary"
            >
              Submit
            </Button>
          </form>

          {showComment === false && props.comment != null && (
            <>
              <div className="coment" id="firstcomment">
                <img className="photoOfComentator" src={profilePhoto}></img>
                <div className="comentContent">
                  <h5 className="comentatorName">Hubert Urbański</h5>
                  <p>{props.comment}</p>
                </div>
              </div>
            </>
          )}

          {showComment === true && (
            <>
              {props.comments.map((item, index) => (
                <div className="coment" id="allcomments">
                  <img className="photoOfComentator" src={profilePhoto}></img>
                  <div className="comentContent">
                    <h5 className="comentatorName">Hubert Urbański</h5>
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </Paper>
  );
}
