import React from "react";
import {Link} from "react-router-dom";
import {userIcon, cartIcon} from "../icons.js";
import "./style/header.css";
import PropTypes from "prop-types";
import authConsumer from "./authConsumer.jsx";
import {connect} from "react-redux";
import {ItemProps} from "../pages/CartPage.jsx";

const Header = ({user, cart}) => {
  return(
    <div className="header">
        <Link to={"/"}>
          <img className="header__logo" src="/static/img/tlu_logo.jpg" />
        </Link>
      <div className="header__buttons">
        <div className={"header__button"}>
        {user.email && <WelcomeIcon user={user}/>}
        {!user.email && <LoginRegisterIcon />}
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
  user: PropTypes.object,
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
    user: PropTypes.object.isRequired
  };

  const mapStateToProps = (store) => {
    return {
        cart: store.cart,
    };
};

export default connect(mapStateToProps)(authConsumer(Header)); 