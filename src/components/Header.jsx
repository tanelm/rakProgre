import React from "react";
import {Link} from "react-router-dom";
import {userIcon, cartIcon} from "../icons.js";
import "./style/header.css";
import PropTypes from "prop-types";
import authConsumer from "./authConsumer.jsx";

const Header = ({user}) => {
  return(
    <div className="header">
        <Link to={"/"}>
          <img className="header__logo" src="/img/tlu_logo.jpg" />
        </Link>
      <div className="header__buttons">
        <div className={"header__button"}>
        {user.email && <WelcomeIcon user={user}/>}
        {!user.email && <LoginRegisterIcon />}
        <Link to={"/checkout/cart"}><img src={cartIcon} alt={"Cart Icon"} />Cart</Link>
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

  export default authConsumer(Header); 