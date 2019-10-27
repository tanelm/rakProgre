import React from "react";
import ItemList from "../components/itemList.jsx";
import Checkbox from "../components/Checkbox.jsx";
import PropTypes from "prop-types";
import "./style/homepage.css";
import SortDropdown from "../components/sortDropdown.jsx";


class Homepage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            sortDirection: -1,
            items:[],
            allCategories: ["phones", "laptops"],
            selectedCategories: ["phones"],
        };
    }

    fetchItems = () => {
        fetch("/api/v1/items")
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

    handleDropdown = (event) => {
        console.log(event.target.value, event.target.name);
        if(this.isSelected(event.target.name)){
            const clone = this.state.selectedCategories.slice();
            const index = this.state.selectedCategories.indexOf(event.target.name);
            clone.splice(index, 1);
            this.setState({
                selectedCategories: clone
            });
        }else{
            this.setState({
                selectedCategories: this.state.selectedCategories.concat([event.target.name])
            });
        }
        //this.setState({
          //  selectedCategory: event.target.value
        //});
    }

    getVisibleItems = () => {
        return this.state.items
        .filter( item => this.isSelected(item.category))
        .sort( (a,b)  => {
            switch (this.state.sortDirection) {
                case -1: return b.price - a.price;
                case 1: return a.price - b.price;
            }
        });
    }

    isSelected = (name) => this.state.selectedCategories.indexOf(name) >= 0;

    handleSortDropdown = ( event ) => {
        console.log( "sort", event.target.value);
        this.setState({
            sortDirection:parseInt(event.target.value),
        });
    };

    render(){
        const visibleItems = this.getVisibleItems();
        return(
            <>
            <div className={"body-wrapper"}>
                    <ItemFilter 
                        allCategories={this.state.allCategories}
                        handleDropdown={this.handleDropdown}
                        isSelected={this.isSelected}
                    />
                <div className={"items-header-wrapper"}>
                    <div>
                        {visibleItems.length} items found for {this.state.selectedCategories.join(", ")}
                    </div>
                    <SortDropdown direction = {this.state.sortDirection} onChange = {this.handleSortDropdown} />
                </div>
                <ItemList items={visibleItems}/>
            </div>
        </>
        );
    }
}

const ItemFilter = ({allCategories, handleDropdown, isSelected}) => {
    return(
        <div className={"itemFilter-wrapper"}>
            {
                allCategories.map(categoryName =>{
                    return(
                        <Checkbox 
                            key={categoryName}
                            name={categoryName} 
                            onChange={handleDropdown} 
                            checked={isSelected(categoryName)} 
                        />
                    );
                })
            }
        </div>
    );};
ItemFilter.propTypes = {
    allCategories: PropTypes.array.isRequired,
    handleDropdown: PropTypes.func.isRequired,
    isSelected: PropTypes.func.isRequire,
};    

export default Homepage;