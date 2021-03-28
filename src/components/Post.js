import "../styles/Post.css";
import profilePhoto from "../photos/profilePhotos/profilePhoto.jpeg";
// import Share from '../photos/share.png'
import Likes from "../photos/likes.png";
import Coment from "../photos/coment.png";
import fire from "../fire";
import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { useFormik } from "formik";
export default function Post(props) {
  const [like, setLike] = useState(0);
  const [moment, setMoment] = useState(0);
  const [modalComment, setModalComment] = useState("close");
  function handleComment() {
    if (modalComment == "close") {
      setModalComment("open");
    } else {
      setModalComment("close");
    }
  }
  function handleLike(e) {
    const userUid = fire.auth().currentUser.uid.toString();
    const docRef = fire.firestore().collection("Posts").doc(e.target.id);
    var likeByYou = false;
    var i = 0;
    fire
      .firestore()
      .collection("Posts")
      .doc(e.target.id)
      .collection("Likes")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          i++;
          if (!likeByYou & (i === snap.size)) {
            docRef.collection(`Likes`).doc(userUid).set({
              like: true,
            });
          }

          if (doc.id === fire.auth().currentUser.uid) {
            docRef.collection("Likes").doc(userUid).delete();
            likeByYou = true;
          }
        });

        if (snap.size === 0) {
          docRef.collection(`Likes`).doc(userUid).set({
            like: true,
          });
        }
      });
  }
  function handleSubmit(e) {
    const docRef = fire.firestore().collection("Posts").doc(e.target.id);
    e.preventDefault();

    docRef
      .collection("Comments")
      .doc()
      .set({
        comment: document.querySelector(".commentValue").value,
      })
      .then(() => {
        document.querySelector(".commentValue").value = "";
      });
  }

  return (
    <div className="Modal">
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
          {modalComment === "open" && (
            <Form
              onSubmit={handleSubmit}
              id={props.index}
              className="formComment"
            >
              <Form.Row>
                <Col>
                  <Form.Control
                    className="commentValue"
                    placeholder="What's in your mind?"
                    type="text"
                  />
                </Col>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form.Row>
            </Form>
            
          )}
           {
           props.liczba.map((item,index) => (
             
            <div className="coment">
            <img className="photoOfComentator" src={profilePhoto}></img>
            <div className="comentContent">
              <h5 className="comentatorName">Hubert Urbański</h5>
              <p>{item.comment}</p>

              
            </div>
          </div>
            
            ))}
          
           
          
          
        </div>
      </div>
    </div>
  );
}
