import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "../../views/WelcomePage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import fire from "../../fire";
import { clearErrors } from "./ClearErrors";
import { spacing } from '@material-ui/system';

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
    handleLogin,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    // addCollection
        } = props;
  
        
  const classes = useStyles();

  return (

    <ThemeProvider theme={theme}>
      <div>
        <Typography component="h1" variant="h5" align="center">
        {hasAccount ? ("Log in") : ("Sign up")}
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
            // value={email}
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
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p>{passwordError}</p>
          
          <div> 
          {hasAccount ? (
            <> 
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleLogin}>
          Log in
          </Button>  
          <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
            </>
          ) : (
          <>
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleSignup}
            >
          Sign up
          </Button>  
          <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Log in</span></p>
           </>
        )}
      </div>         
          
        </form>
        </div>
      </ThemeProvider>
  )}
