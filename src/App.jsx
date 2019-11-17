import React from "react";
import store from "./actions/store/store.js";
import Header from "./components/Header.jsx";
import HomePage from "./pages/Homepage.jsx";
import ItemPage from "./pages/itemPage.jsx";
import LoginPage from "./pages/Loginpage.jsx";
import SignupPage from "./pages/signupPage.jsx";
import UserPage from "./pages/userPage.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import CartPage from "./pages/CartPage.jsx";
import {Provider} from "react-redux";

const authDefaultValue = {
  token: null,
  user: {
      email: null,
      _id: null,
      createdAt: null
  },
};
export const AuthContext = React.createContext(authDefaultValue);

class App extends React.Component {
  state = authDefaultValue;
  handleLogin = ({token, user}) => {
    this.setState( {
      user, token
    });
  };

  render() {
    return(
      <Provider store={store}>
          <AuthContext.Provider value={this.state}>
              <BrowserRouter>
              <Route path={"/"} component = {Header}/>
              <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/login" 
                      exact 
                      render={(props) => 
                          <LoginPage 
                              {...props} 
                              onLogin={this.handleLogin}
                          />
                      }  />
                  <Route path="/signup" exact component={SignupPage} />
                  <Route path="/users/:userId" exact component={UserPage} />
                  <Route path="/items/:itemId" exact component={ItemPage} />
                  <Route path="/checkout/cart" exact component={CartPage} />
                  <Route component={NotFound} />
              </Switch>
              </BrowserRouter>
          </AuthContext.Provider>
      </Provider>
    );
  }
}

export default App;
