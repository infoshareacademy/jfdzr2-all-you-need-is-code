import "../styles/MainPage.css";
import Post from "../components/Post";
import ModalToCreatePost from "../components/ModalToCreatePost";
import React, { useState, useEffect } from "react";
import fire from "../fire";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Button } from "@material-ui/core";

export default function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
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
        querySnapshot.forEach((doc) => {
          i++;
          
          posts.push({
            idDoc: doc.id,
            ...doc.data(),
            likes: Object.keys(doc.data().likes).length,
            comments: Object.entries(doc.data().comments || {}).map(([id, value]) => ({ id, value })),
          });

          if (i === querySnapshot.size) {
            for (let j = 0; j < posts.length; j++) {
              for (let p = 0; p < posts.length; p++) {
                if (posts[j].created > posts[p].created) {
                  let postPlace = posts[j];
                  posts[j] = posts[p];
                  posts[p] = postPlace;
                }
              }
            }
            setPosts(posts);
          }
        });
      });
      return () => {
        if (unsubscribe) {
          unsubscribe();
        }
      };
  }, []);
  return (
    <>
      <div className="page">
        <div className="buttonSection">
          <div style={{ width: "160px" }} />
          <Button
            color="primary"
            style={{
              backgroundColor: "#6C7ED6",
              margin: "6px 0 0",
              width: "40%",
            }}
            onClick={toggleModal}
          >
            Create new post
          </Button>
          <button className="btn-sortBy">
            Sort by: <b>Popular</b>
            <ArrowDropDownIcon />
          </button>
        </div>

        {posts.map((post, index) => (
          <div>
            {
              <Post
                id={post.id}
                title={post.title}
                text={post.text}
                index={post.idDoc}
                time={post.time}
                likes={post.likes}
                comments={post.comments}
                
              />
            }
          </div>
        ))}
      </div>
      {/* {posts.map((post, index) => {
          console.log(post.idDoc)
          
      })} */}
      <ModalToCreatePost isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
}

