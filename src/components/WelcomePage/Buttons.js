import { Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';



export const LogInBtn = () => {
  
    return (
    <button className="login-btn">
    <Link to="/log-in">
    <Typography variant="h6" color="primary">
      Log In
    </Typography>
    </Link>
    </button>
    );
}



export const SignInBtn = () => {

  
return (
<button className="signin-btn">
<Link to="/sign-in">
    <Typography variant="h6" color="primary">
      Sign Up
    </Typography>
    </Link>
    </button>
)
}
