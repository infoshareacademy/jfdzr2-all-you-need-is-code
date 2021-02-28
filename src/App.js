import { PrimarySurvey } from './views/PrimarySurvey';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import MainPage from './views/MainPage'
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

    <MainPage/>
  // <>
    // <PrimarySurvey />
    // <ThemeProvider/>
  //   </>
  );
}

export default App;