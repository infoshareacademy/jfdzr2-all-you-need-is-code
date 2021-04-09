import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import useStyles from "../../views/WelcomePage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Link } from 'react-router-dom';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#grey",
    },
    secondary: {
      main: "#6C7ED6",
    },
  },
});

export default function LogIn(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    emailError,
    passwordError,
        } = props;
  
        
  const classes = useStyles();

  return (

    <ThemeProvider theme={theme} >
      <div>
        <Typography component="h1" variant="h5" align="center">
        Log in
        </Typography>
        <Typography variant="caption" align="center">
        Did you forget your password? Sorry we do not support "forget password" option
        </Typography>
     <form className={classes.theme} noValidate>
          <TextField
            error = {emailError ? true : false}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{color:"red"}}>{emailError}</p>
          <TextField
            error = {passwordError ? true : false}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          /> 

          <p style={{color:"red"}}>{passwordError}</p>
          
          <div> 
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleLogin}>
          Log in
          </Button>  
          <p>Don't have an account? <span><Link to="/sign-in">Sign up</Link></span></p>
      </div>         
          
        </form>
        </div>
      </ThemeProvider>
  )}
