import React from "react";
import {Link} from "react-router-dom";
import {userIcon, cart} from "../icons.js";
import "./style/header.css";
import PropTypes from "prop-types";
import {AuthContext} from "../index.jsx";

const Header = () => {
  return(
    <AuthContext.Consumer>
    {
      (contextValue) => (
        <div className={"container"}>
            <div className="header-container">
                <div className="logo-container">
                    <Link to={"/"}>
                        <img src="http://gtav.ee/gtaveelogo.png" alt="GTAV.ee Logo"/>
                    </Link>
                </div>
                <div className="btns-container">
                    <input id="search" placeholder="Otsi..." type="text"/>
                    {contextValue.user.email && <WelcomeIcon user={contextValue.user}/>}
                    {!contextValue.user.email && <LoginRegisterIcon />}
                    <a href="#"><img className={"header-icon cart-icon"} src={cartIcon} alt={"Cart Icon"} />Cart</a>
                </div>
            </div>
        </div>
      )
    }
    </AuthContext.Consumer>
  );
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