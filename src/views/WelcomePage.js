import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../logo/FindIT.png'
import SignIn from '../components/WelcomePage/SignIn';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
    theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundPosition: 'center',
  },
  paper: {
    backgroundColor: '#4853A4',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '150px 100px'
    },
  welcome: {
    marginBottom: '12px',
  },
  // form: {
  //   color: 'white'
  // }
}));

export default function WelcomePage() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      {/* cssbaseline reset default css settings */}
      <CssBaseline />
      <Grid item xs={false} sm={4} md={5} className={classes.image} />
      <Grid item xs={12} sm={8} md={7} >
        <Paper className = {classes.paper} elevation={6} square>
          <Typography variant='h4' color='white' align='left'>
            <div  className = {classes.welcome}>
            Welcome
            </div>
          </Typography>
          <Typography align='justify' variant='body4'>
          
        Here some text Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quidem molestiae ut, amet dolore, id atque debitis minima non iusto sequi autem alias obcaecati sunt vel eum! Aspernatur, dolorem ut.
        Here some text Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quidem molestiae ut, amet dolore, id atque debitis minima non iusto sequi autem alias obcaecati sunt vel eum! Aspernatur, dolorem ut.
        Here some text Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quidem molestiae ut, amet dolore, id atque debitis minima non iusto sequi autem alias obcaecati sunt vel eum! Aspernatur, dolorem ut.
        Here some text Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quidem molestiae ut, amet dolore, id atque debitis minima non iusto sequi autem alias obcaecati sunt vel eum! Aspernatur, dolorem ut.
        </Typography>

        <SignIn />
        </Paper>
      </Grid>
    </Grid>
  );
}
