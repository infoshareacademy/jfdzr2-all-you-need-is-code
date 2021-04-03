import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../logo/FindIT.png";
import { Typography } from "@material-ui/core";
import "../styles/WelcomePage.css";
import {LogInBtn} from '../components/WelcomePage/Buttons'
import {SignInBtn} from '../components/WelcomePage/Buttons'

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
    justifyContent: "center",
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
  emptyspace: {
    flex: "1",
  },
  footer: {
  marginTop: "auto",  
  }
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
          If you've ever wondered how to get a partner for your new it project, you don't know how to solve your long-bothering experience, this place is for you!
            FindIT is a platform where you you can find a partner for your dream project in any programming language, you can join an existing team and support it with your knowledge or simply meet people as interested in IT as you are
            Simply sign in or log in and start your it journey!
            We need only your email address and password
          </Typography>
        <Grid container>
          <Grid item xs={6}>
          <LogInBtn /> 
          </Grid>
          <Grid item xs={6}>
           <SignInBtn />
          </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
