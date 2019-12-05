import React from "react";
import "./style/form.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userUpdate } from "../actions/store/action.js";
import { toast } from "react-toastify";
import * as services from "../services.js";



class Loginpage extends React.PureComponent {

    static propTypes = {
        history: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        services.login(this.state)
        .then(this.handleSuccess)
        .catch ( err => {
            console.log("Error", err);
            toast.error("Logimine ebaõnnestus!");
        });
    };

    handleSuccess = ({user}) => {
        this.props.dispatch(userUpdate(user));
        this.props.history.push(`/users/${user._id}`);
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return ( 
            <>
            <div className="auth">
                <form className="form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="email"
                        onChange={this.handleChange}
                        placeholder="Username"
                        value={this.state.email}
                    />
                    <br/>
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        placeholder="Password"
                        value={this.state.password}
                    />
                    <br/>
                    <input
                        type="submit"
                        value="Login"
                        className="login-button"
                    />
                    <br/><br/>
                    Not registered? <Link to="./signup">
                        Create an account!
                    </Link>
                </form>
            </div>
            </>
        );
    }
}

export default connect()(Loginpage); 