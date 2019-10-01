import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Homepage.jsx";
import itemPage from "./itemPage.jsx";
import {BrowserRouter, Route} from "react-router-dom";


const root = document.getElementById("app");


ReactDOM.render(
    <BrowserRouter>
    <Route path="/" exact component={Homepage} />
    <Route path="/item" exact component={itemPage} />
    </BrowserRouter>,
    root 
);