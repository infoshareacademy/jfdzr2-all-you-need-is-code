import { PrimarySurvey } from './components/PrimarySurvey';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import {NavBar} from './components/navBar/NavBar'
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
    <>
    <NavBar/>
    {/* <ThemeProvider theme={theme}>
    <PrimarySurvey />
    </ThemeProvider> */}
    </>
  );
}

export default App;