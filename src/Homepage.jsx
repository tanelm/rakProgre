import React from "react";
import Header from "./Header.jsx";
import ItemList from "./itemList.jsx";


class Homepage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            items:[],
            selectedCategory: "phones",
        };
    }

    fetchItems = () => {
        fetch("/api/items/")
        .then(res =>{
            console.log("res", res);
            return res.json();
        })
        .then( items => {
            console.log("items", items);
            this.setState({items});
        })
        .catch(err =>{
            console.log("err", err);
        });
    }

    componentDidMount(){
        this.fetchItems();
    }

    handleDropdown(event){
        console.log(event.target.value);
        this.setState({
            selectedCategory: event.target.value
        });
    }

    getVisibleItems = () => {
        return this.state.items.filter( item => item.category === this.state.selectedCategory);
    }

    render(){
        return(
            <>
            <Header/>
            <select onChange={this.handleDropdown.bind(this)}>
                <option value="phones">Telefonid</option>
                <option value="laptops">Sülerid</option>
            </select>
            <ItemList items={this.getVisibleItems()} />
            </>   
        );
    }
}

export default Homepage;