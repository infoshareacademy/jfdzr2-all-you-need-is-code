import { PrimarySurvey } from './views/PrimarySurvey';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import WelcomePage from "./views/WelcomePage";
import {NavBar} from './components/navBar/NavBar';
import MainPage from './views/MainPage';
import SignInPage from './views/SignInPage';
import LogInPage from './views/LogInPage';
import { Switch, Route } from 'react-router-dom';

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
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/"><WelcomePage /></Route>
        <Route path="/sign-in"><SignInPage /></Route>
        <Route path="/log-in"><LogInPage /></Route>
    

      </Switch>
    {/* <SignInPage/> */}
    <WelcomePage />
    </ThemeProvider>
 
    // <MainPage/>

    
  );
}

export default App;