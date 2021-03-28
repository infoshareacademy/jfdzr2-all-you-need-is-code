import { NavBar } from "../components/navBar/NavBar";
import "../styles/MainPage.css";
import Post from "../components/Post";
import { MainPageWrapper } from "../common/MainPageWrapper";
import ModalToCreatePost from "../components/ModalToCreatePost";
import React, { useState, useEffect } from "react";
import fire from "../fire";
import {
  DeveloperModeSharp,
  PostAddSharp,
  Unsubscribe,
} from "@material-ui/icons";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
export default function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});
  const handleLogout = () => {
    fire.auth().signOut();
  };
  function toggleModal() {
    setIsModalOpen((current) => !current);
    if (isModalOpen) {
      document.querySelector(".page").style.opacity = "1";
    } else {
      document.querySelector(".page").style.opacity = "0.5";
    }
  }
  useEffect(() => {
    const unsubscribe = fire
      .firestore()
      .collection("Posts")
      .onSnapshot((querySnapshot) => {
        const posts = [];
        let i = 0;
        let a = [];
        querySnapshot.forEach((doc) => {
          fire
            .firestore()
            .collection("Posts")
            .doc(doc.id)
            .collection("Comments")
            .get()
            .then((snap) => {
              const tempDoc = [];

              snap.forEach((doc) => {
                tempDoc.push({ id: doc.id, ...doc.data() });
              });
              a.push(tempDoc);
              setComments(a);
            });
          fire
            .firestore()
            .collection("Posts")
            .doc(doc.id)
            .collection("Likes")
            .get()
            .then((snap) => {
              i++;

              posts.push({
                comments: comments[0],
                id: doc.id,
                likesCounter: snap.size,
                ...doc.data(),
              });

              if (i === querySnapshot.size) {
                setPosts(posts);
              }
            });
        });
      });
  }, []);
  return (
    <>
      <MainPageWrapper>
        <div className="page">
          <div className="body">
            <div id="body" className="bodyOfPage">
              <div className="buttonSection">
                <button onClick={toggleModal} className="btn btn-writeMessage">
                  Write a message
                </button>
                <button className="btn-sortBy">
                  Sort by: <b>Popular</b> v
                </button>
                <button className="btn-sortBy" onClick={handleLogout}>
                  <Link to="/">
                    <b>Logout</b>
                  </Link>
                </button>
              </div>
            </div>
            {posts.map((post, index) => (
              <div>
                {
                  <Post
                    key={post.id}
                    title={post.title}
                    text={post.text}
                    likes={post.likesCounter}
                    index={post.id}
                    time={post.time}
                    liczba={comments[index]}
                  />
                }
              </div>
            ))}

            <NavBar />
          </div>
        </div>
      </MainPageWrapper>
      <ModalToCreatePost isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
}
