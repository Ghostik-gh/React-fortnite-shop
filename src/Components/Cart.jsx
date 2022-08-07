function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;
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