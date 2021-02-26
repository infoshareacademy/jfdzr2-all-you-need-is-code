import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../views/WelcomePage'
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import firebase from 'firebase'
import {useState} from 'react'

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


export default function LogIn() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const signInWithEmailAndPasswordHandler = 
        (event, email, password) => {
          event.preventDefault();
        }
    }
    
    const onChangeHandler = (event) => {
      const {name, value} = event.currentTarget;
      if(name === 'userEmail') {
        setEmail(value);
    }
    else if(name === 'userPassword'){
      setPassword(value);
    }

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
                value = {password}
                onChange = {(event) => onChangeHandler(event)}

              />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Log In
              </Button>
              {/* <Grid container>
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
              </Grid> */}
              <Box mt={5}>
              </Box>
            </form>
          </div>
  </ThemeProvider>
          );  
        }
  