import React from "react";
import Header from "./Header.jsx";
import ItemList from "./itemList.jsx";
import {phones, laptops} from "./mydatabase.js";


class Homepage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            items:phones,
        };
    }

    handleChange(event){
        console.log(event.target.value);

        switch (event.target.value) {
            case "phones" :{
                this.setState({
                    items: phones,
                });
                break;
            }
            case "laptops" :{
                this.setState({
                    items: laptops,
                });
                break;
            }
        }
    }
    render(){
        return(
            <>
            <Header/>
            <select onChange={this.handleChange.bind(this)}>
                <option value="phones">Telefonid</option>
                <option value="laptops">Sülerid</option>
            </select>
            <ItemList items={this.state.items} />
            </>   
        );
    }
}

export default Homepage;