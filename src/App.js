import { PrimarySurvey } from "./views/PrimarySurvey";
import { EditProfile } from "./views/EditProfile";
import WelcomePage from "./views/WelcomePage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { ProfilePage } from "./views/ProfilePage";
import { UsersPage } from "./views/UsersPage";
import { SingleUserPage } from "./views/SingleUserPage";
import MainPage from "./views/MainPage";
import { ChatPage } from "./views/ChatPage";
import SignInPage from "./views/SignInPage";
import {YourPosts} from "./views/YourPosts"
import LogInPage from "./views/LogInPage";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserContextProvider } from "./components/user-context/UserContextProvider";
import { PageWrapper } from "./common/PageWrapper";
import { useState, useEffect } from "react";
import fire from "./fire";

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
          <LogInPage />
        </Route>

        <PrivateRoute path="/primary-survey">
          <PrimarySurvey />
        </PrivateRoute>

        <UserContextProvider>
          <PrivateRoute path="/edit-profile">
            <EditProfile />
          </PrivateRoute>

          <PrivateRoute path="/main-page">
            <PageWrapper>
              <MainPage />
            </PageWrapper>
          </PrivateRoute>

          <PrivateRoute path="/profile-page">
            <PageWrapper>
              <ProfilePage />
            </PageWrapper>
          </PrivateRoute>
          <PrivateRoute exact path="/users-page">
            <PageWrapper>
              <UsersPage />
            </PageWrapper>
          </PrivateRoute>

          
            <PrivateRoute
              path="/users-page/:userUid"
              component={SingleUserPage}
            />

          <PrivateRoute path="/chat">
            <PageWrapper>
              <ChatPage />
            </PageWrapper>
          </PrivateRoute>
        </UserContextProvider>
      </Switch>
    </ThemeProvider>
  );
}
const PrivateRoute = ({ children, ...rest }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [status, setStatus] = useState("idle");
  useEffect(() => {
    setStatus("loading");
    fire.auth().onAuthStateChanged((user) => {
      setIsLoggedIn(Boolean(user));
      setStatus("resolved");
    });
  }, []);
  if (status === "loading") {
    return <p>loading...</p>;
  }
  return (
    status === "resolved" && (
      <Route
        {...rest}
        render={({ location }) =>
          isLoggedIn ? children : <Redirect to="/log-in" />
        }
      />
    )
  );
};

export default App;
