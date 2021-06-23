// import logo from './logo.svg';
import { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SplashScreen from "./screens/splash_screen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ForgetPasswordScreen from "./screens/ForgetPasswordScreen";
import SetPasswordScreen from "./screens/SetPasswordScreen";
import VerifyEmailScreen from "./screens/VerifyEmailScreen";
import DashboardScreen from "./screens/DashboardScreen";
import AirDropScreen from "./screens/AirDropScreen";
import { UserContext } from "./context/UserContext";
import { getUser, isLoggedIn, clearToken, setToken } from "./apis/User";
import NotFound from "./screens/404";
import PageNotFound from "./screens/PageNotFound";
import RefferalScreen from "./screens/RefferalScreen";
// import Navbar from './components/Navbar'
class App extends Component {
  // context = UserContext;
  state = {
    isLoading: true,
    isLoggedIn: false,
    user: {},
  };
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  async componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: !this.state.isLoading });
    }, 4000);
    if (isLoggedIn()) {
      this.setState({ isLoggedIn: true });
    }
    // setInterval(async ()=>{
    if (isLoggedIn()) {
      let user = await getUser();
      // console.log(user);
      // console.log('Hello');
      this.setState({ isLoggedIn: true });
      this.setState({ user: user.user });
    } else {
      this.setState({ isLoggedIn: false });
    }
    // },5000)
  }

  async login(token) {
    setToken(token);
    let user = await getUser();
    this.setState({ isLoggedIn: true, user: user.user });
  }

  logout() {
    clearToken();
    this.setState({ isLoggedIn: false });
  }

  render() {
    let userContextVal = {
      isLoggedIn: this.state.isLoggedIn,
      user: this.state.user,
      login: this.login,
      logout: this.logout,
    };
    return (
      <div className="h-100">
        {this.state.isLoading ? (
          <SplashScreen />
        ) : (
          <UserContext.Provider value={userContextVal}>
            {this.state.isLoggedIn ? (
              <Router>
                <Switch>
                  <Route exact path="/" component={DashboardScreen} />
                  <Route
                    path="/participate-in-airdrop"
                    component={AirDropScreen}
                  />
                  <Route
                    path="/verify-mail/:phrase"
                    component={VerifyEmailScreen}
                  />
                  <Route path="**" component={NotFound} />
                </Switch>
              </Router>
            ) : (
              <Router>
                <Switch>
                  <Route exact path="/" component={HomeScreen} />
                  <Route path="/login" component={LoginScreen} />
                  <Route
                    path="/forget-password"
                    component={ForgetPasswordScreen}
                  />
                  <Route
                    path="/reset-password/:phrase"
                    component={SetPasswordScreen}
                  />
                  <Route
                    path="/verify-mail/:phrase"
                    component={VerifyEmailScreen}
                  />
                  {/* <Route path="/dashboard" component={DashboardScreen} /> */}
                  {/* <Route path="/participate-in-airdrop" component={AirDropScreen} /> */}
                  <Route path="/ref/:id" component={RefferalScreen} />
                  <Route path="**" component={PageNotFound} />
                </Switch>
              </Router>
            )}
            <div
              className="background-image"
              style={{ position: "fixed", right: 0, bottom: 0, zIndex: "-1" }}
            >
              <img src="/bg.svg" width="200" alt="Background Imgage" />
            </div>
          </UserContext.Provider>
        )}
      </div>
    );
  }
}

export default App;
