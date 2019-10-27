import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.jsx";
import HomePage from "./pages/Homepage.jsx";
import ItemPage from "./pages/itemPage.jsx";
import LoginPage from "./pages/Loginpage.jsx";
import SignupPage from "./pages/signupPage.jsx";
import UserPage from "./pages/userPage.jsx";
import {BrowserRouter, Route} from "react-router-dom";


const root = document.getElementById("app");

ReactDOM.render(
  <BrowserRouter>
    <Route path={"/"} component = {Header} /> 
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/signup" exact component={SignupPage} />
    <Route path="/users/:userId" exact component={UserPage} />
    <Route path="/items/:itemId" exact component={ItemPage} />
  </BrowserRouter>,
  root
);
