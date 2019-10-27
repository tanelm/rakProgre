import React from "react";
import {Link} from "react-router-dom";
import {userIcon, cart} from "../icons.js";
import "./style/header.css";
import PropTypes from "prop-types";

const Header = ({token, user}) => {
    console.log("header", token, user);
    return(
        <div className="header">
            <Link to={"/"}>
            <img className="header__logo" src="/img/tlu_logo.jpg" />
            </Link>
            <div className="header__buttons">
                <div className={"header__button"}>
                    {user.email && <WelcomeIcon user = {user} />}
                    {!user.email && <LoginRegisterIcon />}
                </div>
                <div className={"header__button"}>
                    <img src={cart} style={{height: 35}} />
                    <div className={"header__button-text"}>Cart<br/></div>
                </div>                    
            </div>
        </div>

    );
};

Header.propTypes = {
    token: PropTypes.string,
    user: PropTypes.object,
  };

  const LoginRegisterIcon = () => (
    <>
    <img src={userIcon} />
    <Link to={"/login"}>
        <div className={"header__button-text"}>Login/<br/>Register</div>
    </Link>
    </>
  );

  const WelcomeIcon = ({user}) => (
    <Link className={"header_button"} to={`/users/${user._id}`}>
      <img src = {userIcon} />
      <div className={"header_button-text"}>Welcome, {user.email}</div>
    </Link>
  );

  WelcomeIcon.propTypes = {
    user: PropTypes.object.isRequired
  };

export default Header;