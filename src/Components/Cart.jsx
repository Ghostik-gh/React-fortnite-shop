import { useContext } from "react";
import { ShopContext } from "../context"

function Cart() {
    const { order, handleBasketShow = Function.prototype } = useContext(ShopContext);

    const quantity = order.length;
    return (
        <div className="cart pink lighten-2" onClick={handleBasketShow}>

            <i className="material-icons">
                store
            </i>
            {quantity
                ? <span className="quantity">{quantity}</span>
                : null}
        </div>
    )
}

export { Cart };