import { PrimarySurvey } from "./views/PrimarySurvey";
import WelcomePage from "./views/WelcomePage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { ProfilePage } from "./views/ProfilePage";
import {NavBar} from './components/navBar/NavBar';

import SignInPage from './views/SignInPage';
import LogInPage from './views/LogInPage';
import { Switch, Route } from 'react-router-dom';

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
        <Route path="/main-page"><MainPage /></Route>
        <Route path="/profile-page"><ProfilePage /></Route>
        
        </Switch>
    </ThemeProvider>
  );
}

export default App;
