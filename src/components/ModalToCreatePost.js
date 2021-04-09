import { useFormik } from "formik";
import "../styles/ModalToCreatePost.css";
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
  function getDate(){
    var date = new Date();
    var year=date.getFullYear()
    if(date.getDate()<10){
      var day="0"+date.getDate()
    }
    else{
      var day=date.getDate()
    }
    if(date.getMonth()<10){
      var month="0"+date.getMonth();
    }
    else{
      var day=date.getMonth();
    }
    if(date.getMinutes()<10){
      var minutes="0"+date.getMinutes()
    }
    else{
      var minutes=date.getMinutes()
    }
    var hours=date.getHours()

    console.log(day+"."+month+"."+year+","+hours+":"+minutes)
    return day+"."+month+"."+year+","+hours+":"+minutes
  }
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
      const date = new Date();
      fire.firestore().collection("Posts").doc().set({
        id: fire.auth().currentUser.uid,
        title: values["title"],
        text: values["comment"],
        likes: {},
        comments: {},
        time:getDate(),
        created: date.getTime()
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
          <Typography variant="h6" style={{color: "white", marginTop: "20px"}}>
          Create new post
        </Typography>
          <div style={{width: "70%" }}>
            <div className={classes.root}>
              <TextField
                value={formik.values.title}
                onChange={formik.handleChange}
                id="title"
                key="title"
                label="Title of your post"
                variant="standard"
              />
            </div>
          </div>
          <div style={{ width: "70%" }}>
            <div className={classes.root}>
              <TextField
                value={formik.values.comment}
                onChange={formik.handleChange}
                id="comment"
                key="comment"
                label="What's on your mind?"
                variant="standard"
                multiline
                rows={5}
              />
            </div>
          </div>

          <div style={{ marginTop: "-10px" }}>
            <Button type="submit" variant="contained" color="primary" style={{marginBottom: "20px"}}>
              send
            </Button>
          </div>

          <button
            onClick={toggleModal}
            type="button"
            className="close"
            aria-label="Close"
          >
            <span style={{ color: "white" }} aria-hidden="true">
              &times;
            </span>
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
