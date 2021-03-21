import { PrimarySurvey } from "./views/PrimarySurvey";
import WelcomePage from "./views/WelcomePage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { ProfilePage } from "./views/ProfilePage";
import MainPage from "./views/MainPage";
import {NavBar} from './components/navBar/NavBar';
import SignInPage from './views/SignInPage';
import LogInPage from './views/LogInPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import {ChatPage} from './views/ChatPage';
import {useState, useEffect} from 'react'
import fire from './fire'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#4853A4",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/"><WelcomePage /></Route>
        <Route path="/sign-in"><SignInPage /></Route>
        <Route path="/log-in"><SignInPage /></Route>
        <Route path="/primary-survey"><PrimarySurvey /></Route>
        <PrivateRoute path="/main-page"><MainPage /></PrivateRoute>
        <PrivateRoute path="/profile-page"><ProfilePage /></PrivateRoute>
        <PrivateRoute path="/chat"><ChatPage /></PrivateRoute>
        </Switch>
    </ThemeProvider>
  );
}
const PrivateRoute = ({children, ...rest}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [status, setStatus] = useState('idle')
  useEffect(() => {
    setStatus('loading')
  fire.auth().onAuthStateChanged((user) => {
    console.log(user)
      setIsLoggedIn(Boolean(user));
      setStatus('resolved')
    });
  }, []);
  if (status === "loading") {
    return <p>loading...</p>
  }
  return status === "resolved" && <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (  <Redirect to="/log-in" />)
        } />
};


export default App;
