import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
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

  const handleClick = () => {
    console.log('Hello SignIn');
  }

return (
<button className="signin-btn">
<Link to="/sign-in">
    <Typography variant="h6" color="primary">
      Sign In
    </Typography>
    </Link>
    </button>
)
}
