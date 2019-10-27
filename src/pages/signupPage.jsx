import React from "react";
import "./style/form.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class signupPage extends React.PureComponent {

    static propTypes = {
        history: PropTypes.object.isRequired,
    };

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit", this.state);
        event.preventDefault();
        console.log("submit", this.state); 
        fetch("/api/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(this.state),
        })
        .then( res => {
            console.log("response", res);
        })
        .catch ( err => {
            console.log("Error", err);
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
                        <a>Back to login</a>
                    </Link>
                </form>
            </div>
            </>
        );
    }
}

export default signupPage;