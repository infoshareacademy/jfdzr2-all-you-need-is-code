import { useFormik } from "formik";
import "../styles/ModalToCreatePost.css";
import { Step2 } from "../components/primary-survey/Step2";
import { Navbar, Nav, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState,useEffect, useContext } from "react";
import fire from "../fire";
export default function ModalToCreatePost({ isModalOpen, toggleModal }) {
  const [postActive, setpostActive] = useState(true);
  const [lenght,setLenght]=useState(0)
  const [array,setArray]=useState([])
  useEffect(() => {
    
    fire.firestore().collection('Posts').get().then(snap => {
      setLenght(snap.size) // will return the collection size
 
    });
  },array)
  
    
    


  const formik = useFormik({
    initialValues: {
      name: "",
      tech: "",
      comment: "",
    },
    onSubmit: (values) => {
      setArray([lenght])
      document.querySelector("#ModalCreatePost").style.display = "none";
      fire.firestore().collection("Posts").doc(`Post${lenght}`).set({
        title: values["name"],
        text: values["comment"],
        id:lenght,
      })
      fire.firestore().collection("Posts").doc(`Post${lenght}`).collection('Likes').doc("userLike").set({
        dziala:'tak'
      })
        
      
      formik.values.comment=""
      formik.values.title=""
      
    },
    
  });

  return (
    <>
      <div
        id="ModalCreatePost"
        className="ModalCreatePost"
        style={{ display: isModalOpen ? "flex" : "none" }}
      >
        <form
          className="ModalForm"
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h4>Create Post</h4>

          <label htmlFor="name">Tittle</label>
          <input
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <label htmlFor="comment">Desribe your project</label>
          <textarea
            className="describeProject"
            id="comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
          />

          <input className="submit" type="submit" value="Wyślij" />
          <button
            onClick={toggleModal}

            type="button"
            className="close"
            aria-label="Close"
          >


            <span aria-hidden="true">&times;</span>
          </button>
        </form>
      </div>
    </>
  );
}
