import React from "react";
import PropTypes from "prop-types";
import {getItems} from "../actions/itemsActions";
import { FaRegTrashAlt, FaAngleRight } from "react-icons/fa";
import "./style/cart.css";

class CartPage extends React.PureComponent {
    state = {
        rows: []
    };

    componentDidMount() {
        getItems()
            .then(items => {
                this.setState({
                    rows:items.slice(0,4)
                });
            })
            .catch(err => {
                console.log(err);
                console.log("Something went wrong fetching items");
            });
    }

    render() {
        return (
            <div className={"spacer"}>
                <div className={"box cart"}>
                    <Table
                        rows={this.state.rows}
                    />
                </div>
                <div className={"box cart__summary"}>
                    <table>
                        <tbody>
                            <tr><td>Price</td><td>400€</td></tr>
                            <tr><td>Taxes</td><td>100€</td></tr>
                            <tr><td>Total price</td><td>500€</td></tr>
                        <tr>
                            <td></td>
                            <td><div className={"submit-button"}>Confirm<FaAngleRight/> </div></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const Table = ({rows}) => {
    return(
        <div className={"table"}>
            <div className={"row"}>
                <div className={"cell"}>Product</div>
                <div className={"cell cell--grow"}>Name</div>
                <div className={"cell"}>Category</div>
                <div className={"cell cell--right"}>Price</div>
                <div className={"cell cell--small"}></div>
            </div>
            {rows.map((row) => <Row key={row._id} {...row} />)}
        </div>
    );
};
Table.propTypes = {
    rows: PropTypes.array.isRequired,
};
const Row = ({title, imgSrc, category, price}) => {
    return (
        <div className={"row"}>
            <div className={"cell"}>
                <img src={imgSrc} />
            </div>
            <div className={"cell cell--grow"}>
                {title}
            </div>
            <div className={"cell"}>
                {category}
            </div>
            <div className={"cell cell--right"}>
                {price} €
            </div>
            <div className={"cell cell--small cell--center"}>
                <FaRegTrashAlt/>
            </div>
        </div>
    );
};
export const ItemProps = {
    _id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};
Row.propTypes = ItemProps;
export default CartPage; 