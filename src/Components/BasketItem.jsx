function BasketItem(props) {

    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        addQuantity = Function.prototype,
        reduceQuantity = Function.prototype,
    } = props;

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