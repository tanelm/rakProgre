import React from "react";
import {Link} from "react-router-dom";
import {userIcon, cartIcon} from "../icons.js";
import "./style/header.css";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ItemProps} from "../pages/CartPage.jsx";
import { UserPropTypes } from "../actions/store/reducer.js";
import * as selectors from "../actions/store/selectors.js";

const Header = ({user, cart}) => {
  return(
    <div className="header">
        <Link to={"/"}>
          <img className="header__logo" src="/static/img/tlu_logo.jpg" />
        </Link>
      <div className="header__buttons">
        <div className={"header__button"}>
        {user && <WelcomeIcon user = {user} />}
        {!user && <LoginRegisterIcon />}
        <Link to={"/checkout/cart"}>
          <img src={cartIcon} alt={"Cart Icon"} />Cart
          <Badge>{cart.length}</Badge> 
        </Link>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  token: PropTypes.string,
  user: PropTypes.shape(UserPropTypes),
  cart: PropTypes.arrayOf(ItemProps).isRequired,
};

const Badge = ({children}) => {
  if(children == 0) return null;
  return (
      <span className={"badge"}>
          {children}
      </span>
  );
};

Badge.propTypes = {
    children: PropTypes.number.isRequired,
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
    user: PropTypes.shape(UserPropTypes),
  };

  const mapStateToProps = (store) => {
    return {
      cart: selectors.getCart(store),
      user: selectors.getUser(store),
    };
};

export default connect(mapStateToProps)(Header);