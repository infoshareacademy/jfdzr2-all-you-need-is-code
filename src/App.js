import { PrimarySurvey } from "./views/PrimarySurvey";
import WelcomePage from "./views/WelcomePage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { ProfilePage } from "./views/ProfilePage";
import { UsersPage } from "./views/UsersPage";
import MainPage from "./views/MainPage";
import { NavBar } from "./components/navBar/NavBar";
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
          <PageWrapper>
            <Route path="/main-page">
              <MainPage />
            </Route>
            <Route path="/profile-page">
              <ProfilePage />
            </Route>
            <Route path="/users-page">
              <UsersPage />
            </Route>
            <Route path="/chat">
              <ChatPage />
            </Route>
          </PageWrapper>
        </UserContextProvider>
      </Switch>
    </ThemeProvider>
  );
}
const PrivateRoute = ({children, ...rest}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [status, setStatus] = useState('idle')
  useEffect(() => {
    setStatus('loading')
  fire.auth().onAuthStateChanged((user) => {
      setIsLoggedIn(Boolean(user));
      setStatus('resolved')
    });
  }, []);
  if (status === "loading") {
    return <p>loading...</p>
  }
  return status === "resolved" && <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (  <Redirect to="/log-in" />)
        } />
};


export default App;
