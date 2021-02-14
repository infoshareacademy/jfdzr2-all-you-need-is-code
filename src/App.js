import { PrimarySurvey } from './components/PrimarySurvey';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { WelcomePage } from './views/WelcomePage'

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
    <WelcomePage />
    </ThemeProvider>
  );
}

export default App;