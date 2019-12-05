import React from "react";
import PropTypes from "prop-types";
import "./style/itemPage.css";
import FancyButton from "../components/FancyButton.jsx";
import {connect} from "react-redux";
import {addItem} from "../actions/store/action.js";
const description = "Väga tore ese"; 
import {toast} from "react-toastify";
import * as services from "../services.js";


class itemPage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {};
    }

    fetchItem = () => {
        services.getItem({itemId: this.props.match.params.itemId})
        .then(item =>{
            console.log("item ", item);
            this.setState( {
                ...item
            });
        })
        .catch(err =>{
            console.log("item page ", err);
        });
    }

    handleBuy = () => {
        this.props.dispatch(addItem(this.state));
        toast.success("Toode lisatud!");
    };

    componentDidMount(){
        this.fetchItem();
    }

    render(){
        console.log("itempage", this.props);
        return(
            <>
                <div className={"box spacer itemPage"}>
                    <div style={{display: "flex",}}>
                        <div className={"itemPage-left"}>
                            <img src={this.state.imgSrc} />
                        </div>
                        <div className={"itemPage-content"}>
                            <div>
                                <h2>{this.state.title}</h2>
                            </div>
                            <div>
                                <div>
                                    <p className={"text--bold text--yellow"}>
                                        {this.state.price} €
                                    </p>
                                </div>
                                <div>
                                    <p style={{textAlign: "justify"}}>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"itemPage-footer"}>
                        <FancyButton onClick={this.handleBuy}>Osta</FancyButton>
                    </div>
                </div>
            </>
        );
    }
}

itemPage.propTypes = {
    match: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default connect()(itemPage);
