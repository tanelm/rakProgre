import React from "react";
import "./style/form.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";



class Loginpage extends React.PureComponent {

    static propTypes = {
        history: PropTypes.object.isRequired,
        onLogin: PropTypes.func.isRequired,
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
        console.log("submit", this.state); 
        fetch("/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(this.state),
        })
        .then( res=> res.json())
        .then( ({token, user}) => {
            console.log("response", token, user);
            this.props.onLogin({token, user});
            this.props.history.push(`/users/${user._id}`);
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

export default Loginpage;