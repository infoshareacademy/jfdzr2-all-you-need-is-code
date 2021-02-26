import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
<<<<<<< HEAD:src/components/WelcomePage/Signup.js
=======
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
>>>>>>> parent of be106e6... returning to previous commit:src/components/WelcomePage/SignIn.js
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../views/WelcomePage';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
<<<<<<< HEAD:src/components/WelcomePage/Signup.js
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {useRef} from 'react';
import {useAuth} from 'AuthContext'
=======
import firebase from 'firebase'
import {useState} from 'react'
>>>>>>> parent of be106e6... returning to previous commit:src/components/WelcomePage/SignIn.js

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#grey',
      },
      secondary: {
          main: '#6C7ED6',
      },
      
    },
});

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } 
  };

<<<<<<< HEAD:src/components/WelcomePage/Signup.js
export default function Signup() {
    const classes = useStyles();
    const emailRef = useRef()  
    const passwordRef = useRef()
    const {signup} = useAuth()  

    function handleSubmit (e) {
      e.preventDefault()
      signup(emailRef.current.value, passwordRef.current.value)
    }
    

=======
    const classes = useStyles();
>>>>>>> parent of be106e6... returning to previous commit:src/components/WelcomePage/SignIn.js
    return (

        <ThemeProvider theme={theme}>
        <div>
            <CssBaseline />
            <Typography component="h1" variant="h5" align="center">
            </Typography>
            <form className={classes.theme} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                ref={emailRef}
                autoFocus
                value = {email}
                onChange = {(event) => onChangeHandler(event)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
<<<<<<< HEAD:src/components/WelcomePage/Signup.js
                ref={passwordRef}
=======
                value = {password}
                onChange = {(event) => onChangeHandler(event)}

>>>>>>> parent of be106e6... returning to previous commit:src/components/WelcomePage/SignIn.js
              />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
<<<<<<< HEAD:src/components/WelcomePage/Signup.js
                onCLick={()=> authenticateUser(email, password, true)}
=======
                onClick={event => {
                  createUserWithEmailAndPasswordHandler(evemt, email, password);
                }}
>>>>>>> parent of be106e6... returning to previous commit:src/components/WelcomePage/SignIn.js
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
              </Box>
            </form>
          </div>
  </ThemeProvider>
          );  
        }
  