import { Typography } from "@material-ui/core";


export const LogInBtn = (props) => {
    return <button className="login-btn" onCLick={props.openLogInForm}>
    <Typography variant="h6" color="primary">
      Log In
    </Typography>
  </button>
}



export const LogInBtn = (props) => {
    return <button className="signin-btn" onClick={props.openSignInForm}>
    <Typography variant="h6" color="primary">
      Sign In
    </Typography>
    </button>
}

