import React from "react";
import "./style/form.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import * as services from "../services.js";

class signupPage extends React.PureComponent {

    static propTypes = {
        history: PropTypes.object.isRequired,
    };

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        services.signup(this.state)
        .then( () => {
            this.props.history.push("/login");
            toast.success("Kasutaja loodud!");
        });
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
                        type="email"
                        name="email"
                        placeholder="E-mail address"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        placeholder="Password"
                        value={this.state.password}
                    />
                    <br/>
                    <br/>
                    <input
                        type="submit"
                        value="Register"
                        className="login-button"
                    />
                    <br/><br/>
                    <Link to="./login">
                        Back to login
                    </Link>
                </form>
            </div>
            </>
        );
    }
}

export default signupPage;