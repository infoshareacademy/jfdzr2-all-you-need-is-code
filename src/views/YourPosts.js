import { AllUsersInfo } from "../components/profile-page/AllUsersInfo";
import "../styles/ProfilePage.css";

import "../styles/MainPage.css";
import Post from "../components/Post";
import ModalToCreatePost from "../components/ModalToCreatePost";
import React, { useState, useEffect } from "react";
import fire from "../fire";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Button } from "@material-ui/core";

export const YourPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsubscribe= fire
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
              comments: Object.entries(
                doc.data().comments || {}
              ).map(([id, value]) => ({ id, value })),
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
            
            
            setPosts(posts.filter(function(item){ 
                return item.id === fire.auth().currentUser.uid.toString();
            }));
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
      {" "}
      {}
      {posts.map((post, index) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
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
    </>
  );
};
