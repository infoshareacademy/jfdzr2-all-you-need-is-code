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

export default function SignIn(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSignup,
    emailError,
    passwordError,
        } = props;
  
        
  const classes = useStyles();

  return (

    <ThemeProvider theme={theme}>
      <div>
        <Typography component="h1" variant="h5" align="center">
        Sign up
        </Typography>
        <Typography variant="caption" align="center">
        Do not reuse your bank password, we did not spend a lot on security for this app
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>{emailError}</p>
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
            onChange={(e) => setPassword(e.target.value)}
          /> 

          <p>{passwordError}</p>
          
          <div> 
        
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleSignup}
            >
          Sign up
          </Button>  
          <p>Have an account? <span><Link to="/log-in">Log in</Link></span></p>
       
      </div>         
          
        </form>
        </div>
      </ThemeProvider>
  )}
