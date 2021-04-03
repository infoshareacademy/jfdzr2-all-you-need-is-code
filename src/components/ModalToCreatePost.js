import { useFormik } from "formik";
import "../styles/ModalToCreatePost.css";
import { Tech } from "./technologies";
import "bootstrap/dist/css/bootstrap.css";
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import fire from "../fire";
export default function ModalToCreatePost({ isModalOpen, toggleModal }) {
  const [postActive, setpostActive] = useState(true);
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        width: "100%",
        backgroundColor: "white",
        marginTop: "20px",
        borderRadius: "15px",
        padding: "10px",
        marginBottom: "20px",
      },
    },
  }));

  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      title: "",
      tech: "",
      comment: "",
    },
    onSubmit: (values) => {
      document.querySelector("#ModalCreatePost").style.display = "none";
      document.querySelector(".page").style.opacity = "1";
      fire.firestore().collection("Posts").doc().set({ 
        id:fire.auth().currentUser.uid,
        title: values["title"],
        text: values["comment"],
        likes: {},
        comments: {},
        // created: fire.database.ServerValue.TIMESTAMP,
      });
      formik.values.comment = "";
      formik.values.title = "";
    },
  });

  return (
    <>
      <Paper
        elevation={3}
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
          <div style={{ marginTop: "20px", width: "40%" }}>
            <Typography
              style={{ textAlign: "center" }}
              variant="h5"
              color="primary"
            >
              Title
            </Typography>
            <div className={classes.root}>
              <TextField
                value={formik.values.title}
                onChange={formik.handleChange}
                id="title"
                key="title"
                variant="standard"
              />
            </div>
          </div>
          <div style={{ marginTop: "20px", width: "70%" }}>
            <Typography
              style={{ textAlign: "center" }}
              variant="h5"
              color="primary"
            >
              Describe your project
            </Typography>
            <div className={classes.root}>
              <TextField
                value={formik.values.comment}
                onChange={formik.handleChange}
                id="comment"
                key="comment"
                label=""
                variant="standard"
              />
            </div>
          </div>
         
          <div style={{ marginTop: "-10px" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              send
            </Button>
          </div>

          <button
            onClick={toggleModal}
            type="button"
            className="close"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </form>

        {/* <form
          className="ModalForm"
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >

          <label htmlFor="name">Tittle</label>
          <input
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <label htmlFor="comment">Desribe your project</label>
          <div className="name-setting">
      
      </div>
          <textarea
            className="describeProject"
            id="comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
          />
          <Tech/>
          <input className="submit" type="submit" value="Wyślij" />
          <button
            onClick={toggleModal}
            type="button"
            className="close"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          
        </form> */}
      </Paper>
    </>
  );
}
