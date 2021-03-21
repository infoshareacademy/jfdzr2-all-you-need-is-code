import { useFormik } from "formik";
import "../styles/ModalToCreatePost.css";
import { Step2 } from "../components/primary-survey/Step2";
import { Navbar, Nav, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect, useContext } from "react";
import fire from "../fire";
import { TodayTwoTone } from "@material-ui/icons";
export default function ModalToCreatePost({ isModalOpen, toggleModal }) {
  const [postActive, setpostActive] = useState(true);
  const [length, setLength] = useState(0);
  function loadPosts(){
    
  }
  
    
  

  const formik = useFormik({
    initialValues: {
      name: "",
      tech: "",
      comment: "",
    },
    onSubmit: (values) => {
      document.querySelector(".page").style.opacity = "1";
      var today = new Date();
      if(today.getMonth().lenght===1){
        var date = today.getFullYear()+'-'+'0'+(today.getMonth()+1)+'-'+today.getDate()+'-'+ today.getHours()+':'+today.getMinutes();
      }
     else{
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'-'+ today.getHours()+':'+today.getMinutes();
     }
      document.querySelector("#ModalCreatePost").style.display = "none";
      fire.firestore().collection("Posts").add({
        title: values["name"],
        text: values["comment"],
        time:date
      })
    .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    })
      formik.values.comment = "";
      formik.values.title = "";
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
