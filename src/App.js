import { PrimarySurvey } from './views/PrimarySurvey';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import WelcomePage from "./views/WelcomePage"
import {NavBar} from './components/navBar/NavBar'
import MainPage from './views/MainPage'
import SignInPage from './views/SignInPage';
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
    {/* <SignInPage/> */}
    <WelcomePage />
    </ThemeProvider>
 
    // <MainPage/>

//     <PrimarySurvey />
//     </ThemeProvider> */}
    
  );
}

export default App;