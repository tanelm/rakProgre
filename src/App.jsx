import React from "react";
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
import configureStore from "./actions/store/configureStore.js";
import { PersistGate } from "redux-persist/integration/react";

const {store, persistor} = configureStore();


class App extends React.Component {

  render() {
    return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
                <Route path={"/"} component = {Header} /> 
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/login" exact component={LoginPage}/>
                  <Route path="/signup" exact component={SignupPage} />
                  <Route path="/users/:userId" exact component={UserPage}/>
                  <Route path="/items/:itemId" exact component={ItemPage} />
                  <Route path="/checkout/cart" exact component={CartPage} />
                  <Route component = {NotFound} />     
                </Switch>
              </BrowserRouter>
        </PersistGate>    
      </Provider>    
    );
  }
}

export default App;
