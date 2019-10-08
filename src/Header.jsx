import React from "react";
import {Link} from "react-router-dom";
import {userIcon, cart} from "./icons.js";
import "./header.css";

const Header = () => {
    return(
        <div className="header">
            <Link to={"/"}>
            <img className="header__logo" src="/img/tlu_logo.jpg" />
            </Link>
            <div className="header__buttons">
                <div className={"header__button"}>
                    <img src={userIcon} />
                    <div className={"header__button-text"}>Login/<br/>Register</div>
                </div>
                <div className={"header__button"}>
                    <img src={cart} style={{height: 35}} />
                    <div className={"header__button-text"}>Cart<br/></div>
                </div>                    
            </div>
        </div>

    );
};

export default Header;