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
        const comments = [];
        const commentsId = [];
        let i = 0;
        querySnapshot.forEach((doc) => {
          i++;
          comments.push(Object.values(doc.data().comments));
          commentsId.push(doc.data().comments);
          posts.push({
            idDoc: doc.id,
            ...doc.data(),
            likes: Object.keys(doc.data().likes).length,
            comments: comments,
            commentsId: commentsId,
          });

          if (i === querySnapshot.size) {
            // console.log(posts[0].created)
            // console.log(posts[1].created)
            // console.log(posts[2].created)
            // for (let j = 0; j < posts.length ; j++) {
            //   for (let p = 0; p < posts.length; p++) {
            //     if(posts[j].created>posts[p].created){
            //       let postPlace=posts[j]
            //       posts[j]=posts[p]
            //       posts[p]=postPlace
            //     }
                
            //   }
            // }
            setPosts(posts);
          }
        });
      });
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
                comments={Object.values(post.commentsId[index])}
                commentsId={Object.keys(post.commentsId[index])}
                comment={Object.values(post.commentsId[index])[0]}
              />
            }
          </div>
        ))}
      </div>
      {/* {posts.map((post, index) => {
          console.log(Object.keys(post.commentsId[0])[0])
          
      })} */}
      <ModalToCreatePost isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
}
