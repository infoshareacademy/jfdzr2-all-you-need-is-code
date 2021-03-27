import { PrimarySurvey } from "./views/PrimarySurvey";
import WelcomePage from "./views/WelcomePage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { ProfilePage } from "./views/ProfilePage";
import { UsersPage } from "./views/UsersPage";
import MainPage from "./views/MainPage";
import { ChatPage } from "./views/ChatPage";
import SignInPage from "./views/SignInPage";
import LogInPage from "./views/LogInPage";
import { Switch, Route } from "react-router-dom";
import { UserContextProvider } from "./components/user-context/UserContextProvider";
import { PageWrapper } from "./common/PageWrapper";

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
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/sign-in">
          <SignInPage />
        </Route>

        <Route path="/log-in">
          <SignInPage />
        </Route>

        <UserContextProvider>
          <Route path="/primary-survey">
            <PrimarySurvey />
          </Route>

          <Route path="/main-page">
            <PageWrapper>
              <MainPage />
            </PageWrapper>
          </Route>

          <Route path="/profile-page">
            <PageWrapper>
              <ProfilePage />
            </PageWrapper>
          </Route>

          <Route path="/users-page">
            <PageWrapper>
              <UsersPage />
            </PageWrapper>
          </Route>

          <Route path="/chat">
            <PageWrapper>
              <ChatPage />
            </PageWrapper>
          </Route>
        </UserContextProvider>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
