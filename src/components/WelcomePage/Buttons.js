import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';


export const LogInBtn = () => {
  
  const handleClick = () => {
    console.log('Hello LogIn');
  }
  
    return (
      <Tooltip TransitionComponent={Zoom} title="Add">
    <button className="login-btn" onClick={handleClick}>
    <Typography variant="h6" color="primary">
      Log In
    </Typography>
  </button>
  </Tooltip>
    );
}



export const SignInBtn = () => {

  const handleClick = () => {
    console.log('Hello SignIn');
  }

return (
<button className="signin-btn" onClick={handleClick}>
    <Typography variant="h6" color="primary">
      Sign In
    </Typography>
    </button>
)
}
