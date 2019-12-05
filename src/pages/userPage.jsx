import React from "react";
import PropTypes from "prop-types";
import { UserPropTypes } from "../actions/store/reducer.js";
import {connect} from "react-redux";
import "./style/userpage.css";
import FancyButton from "../components/FancyButton.jsx";
import { userUpdate, tokenUpdate } from "../actions/store/action.js";
import protectedRedirect from "../components/protectedRedirect.jsx";
import * as selectors from "../actions/store/selectors.js";

class userPage extends React.PureComponent {

    static propTypes = {
        user: PropTypes.shape(UserPropTypes),
        dispatch: PropTypes.func.isRequired,
    };


    handleLogout = () => {
        this.props.dispatch(userUpdate(null));
        this.props.dispatch(tokenUpdate(null));
    }

    render() {
        return ( 
            <div className="spacer">
                <div className="box">
                    <div style={{display: "flex", justifyContent:"space-around"}}>
                        <div className="field">
                            {this.props.user.email}  
                        </div>
                        <div className="field ">
                            {this.props.user.createdAt} 
                        </div>
                        <FancyButton onClick={this.handleLogout}>Logi välja</FancyButton> 
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: selectors.getUser(store),
    };
};

export default connect(mapStateToProps)(protectedRedirect(userPage));