import React from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../logo/FindIT.png";
import LogIn from "../components/WelcomePage/LogIn";
import "../styles/WelcomePage.css";
import {useState, useEffect} from 'react';
import fire from "../fire";
import MainPage from '../views/MainPage'


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundPosition: "center",
  },
  paper: {
    backgroundColor: "#4853A4",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: "150px 100px",
  },
  welcome: {
    marginBottom: "12px",
    alignItems: "center",
    justify: "center",
  },
  background1: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    margin: "20px",
    padding: "80px 50px",
  },
  
}));

export default function SignInPage() {
  const classes = useStyles();
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };


useEffect(() => {
  fire.auth().onAuthStateChanged((user) => {
      if (user) {
          clearInputs();
          setEmail('');
          setPassword('');
          setUser(user);
      } else {
      setUser("");
  }
      });
}, []);

  return ( 
    <div>
      {user ? (
      <MainPage />
      ): (
      <Grid container spacing={0} className={classes.root}>
      <CssBaseline />
      <Grid item xs={4}/>
        <Paper className={classes.paper} elevation={6} square>
          <Paper className={classes.background1} elevation={3}>
          <LogIn
          email={email}
          setEmail={setEmail}
          password = {setPassword}
          setPassword={setPassword}
          handleLogin={handleLogin}
          emailError={emailError}
          passwordError={passwordError}
          />
          </Paper>
        </Paper>
      </Grid>
      )}
</div> 
  );
}
