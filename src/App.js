import { PrimarySurvey } from './views/PrimarySurvey';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

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
    {/* <WelcomePage /> */}
    <PrimarySurvey />
    </ThemeProvider>
  );
}

export default App;