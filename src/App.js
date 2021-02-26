import { PrimarySurvey } from './views/PrimarySurvey';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import WelcomePage from "./views/WelcomePage";
import {NavBar} from './components/navBar/NavBar';
import MainPage from './views/MainPage';
import SignInPage from './views/SignupPage';
import LogInPage from './views/LogInPage';
import { Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import { AuthProvider } from '../components/WelcomePage/AuthContext';
=======
import UserProvider from "./providers/UserProvider"
>>>>>>> parent of be106e6... returning to previous commit

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#fff',
      },
      secondary: {
          main: '#4853A4',
      },
  },
});

function App() {
  return (
<<<<<<< HEAD
    <AuthProvider>
=======
    <UserProvider>
>>>>>>> parent of be106e6... returning to previous commit
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/"><WelcomePage /></Route>
        <Route path="/sign-in"><SignInPage /></Route>
        <Route path="/log-in"><LogInPage /></Route>
    

      </Switch>
    {/* <SignInPage/> */}
    <WelcomePage />
    </ThemeProvider>
    </UserProvider>
    // <MainPage/>

    </AuthProvider>
  );
}

export default App;