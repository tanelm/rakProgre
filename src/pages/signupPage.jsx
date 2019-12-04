import React from "react";
import "./style/form.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

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
        console.log("submit", this.state);
        event.preventDefault();
        console.log("submit", this.state); 
        fetch("/api/v1/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(this.state),
        })
        .then( res => {
            if(!res.ok) throw "Registreerimine ebaõnnestus";
            return res.json();
        })
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