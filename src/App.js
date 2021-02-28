import { PrimarySurvey } from "./views/PrimarySurvey";
import WelcomePage from "./views/WelcomePage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { NavBar } from "./components/navBar/NavBar";
import MainPage from "./views/MainPage";
import { ProfilePage } from "./views/ProfilePage";
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
      {/* <ProfilePage />  */}
      {/* <MainPage /> */}
      <PrimarySurvey />
    </ThemeProvider>
  );
}

export default App;
