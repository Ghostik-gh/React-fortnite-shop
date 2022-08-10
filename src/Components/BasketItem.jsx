import { useContext } from "react";
import { ShopContext } from "../context"

function BasketItem(props) {

    const {
        id,
        name,
        price,
        quantity,
    } = props;

    const {
        removeFromBasket,
        addQuantity,
        reduceQuantity,
    } = useContext(ShopContext);

    return (
        <li className="collection-item">
            {name}
            <i className="material-icons inc-dec-order" onClick={() => reduceQuantity(id)}>remove</i>
            <span className="quantity"> x{quantity} </span>
            <i className="material-icons inc-dec-order" onClick={() => addQuantity(id)}>add</i>
            = {price}
            <span className="secondary-content order-delete" onClick={() => removeFromBasket(id)}>
                <i className="material-icons">close</i>
            </span>
        </li>)
}

export { BasketItem };