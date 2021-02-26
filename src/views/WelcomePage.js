import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../logo/FindIT.png";
import Signup from "../components/WelcomePage/Signup";
import { Typography } from "@material-ui/core";
import "../styles/WelcomePage.css";
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import {LogInBtn} from '../components/WelcomePage/Buttons'
import {SignInBtn} from '../components/WelcomePage/Buttons'
import {useState} from 'react'

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
  TextField: {
    border: '1px solid yellow',
  },
}));

export default function WelcomePage() {
  const classes = useStyles();


  return (
    <Grid container spacing={0} className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={5} className={classes.image} />
      <Grid item xs={12} sm={8} md={7}>
        <Paper className={classes.paper} elevation={6} square>
          <Typography variant="h4" color="white" align="left">
            <div className={classes.welcome}>Welcome</div>
          </Typography>
          <Typography align="justify" variant="body4">
            FindIT is a place ... Here some text Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sint, quidem molestiae ut, amet
            dolore, id atque debitis minima non iusto sequi autem alias
            obcaecati sunt vel eum! Aspernatur, dolorem ut. Here some text Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sint, quidem
            molestiae ut, amet dolore, id atque debitis minima non iusto sequi
            autem alias obcaecati sunt vel eum! Aspernatur, dolorem ut. Here
            some text Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sint, quidem molestiae ut, amet dolore, id atque debitis minima non
            iusto sequi autem alias obcaecati sunt vel eum! Aspernatur, dolorem
            ut. Here some text Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint, quidem molestiae ut, amet dolore, id atque
            debitis minima non iusto sequi autem alias obcaecati sunt vel eum!
            Aspernatur, dolorem ut.
          </Typography>
        <Grid container>
          <Grid item xs={6}>
          <LogInBtn /> 
          </Grid>
          <Grid item xs={6}>
           <SignInBtn />
          </Grid>
          {/* </div> */}
          {/* <SignIn /> */}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
