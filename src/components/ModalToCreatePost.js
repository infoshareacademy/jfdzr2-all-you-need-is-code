import { useFormik } from "formik";
import "../styles/ModalToCreatePost.css";
import { Step2 } from "../components/primary-survey/Step2";
import { Navbar, Nav, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import fire from "../fire";
export default function ModalToCreatePost({ isModalOpen, toggleModal }) {
  const [postActive, setpostActive] = useState(true);

  const formik = useFormik({
    initialValues: {
      name: "",
      tech: "",
      comment: "",
    },
    onSubmit: (values) => {
      formik.values.comment = "";
      formik.values.name = "";
      document.querySelector("#ModalCreatePost").style.display = "none";
      fire.firestore().collection("Posts").doc().set({
        title: values["name"],
        text: values["comment"],
      });
      //   fire.firestore().collection("Posts").doc("31BPX5oTs9DMAWeGsrhv").collection("comments").doc("XD").set({
      //       com:1
      //   })
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

          <div
            className="tech"
            value={formik.values.tech}
            onChange={formik.handleChange}
          >
            <Step2 />
          </div>

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
