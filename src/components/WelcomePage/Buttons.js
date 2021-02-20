import { Typography } from "@material-ui/core";


export const LogInBtn = () => {
  
  const handleClick = () => {
    console.log('Hello LogIn');
  }
  
    return (
    <button className="login-btn" onClick={handleClick}>
    <Typography variant="h6" color="primary">
      Log In
    </Typography>
  </button>
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
