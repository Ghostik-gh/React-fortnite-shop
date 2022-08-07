import { BasketItem } from './BasketItem'

function BasketList(props) {
    const { order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        addQuantity = Function.prototype,
        reduceQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, elOrder) => {
        return sum + elOrder.price * elOrder.quantity;
    }, 0);

    return (
        <ui className="collection basket-list">
            <li className="collection-item active">Корзина
            </li>
            {order.length
                ? order.map(item => (
                    <BasketItem key={item.id}
                        removeFromBasket={removeFromBasket}
                        addQuantity={addQuantity}
                        reduceQuantity={reduceQuantity}
                        {...item}
                    />
                ))
                : <li className="collection-item">Корзина Пуста</li>
            }
            <li className="collection-item active">Общая стоимость: {totalPrice}</li>
            <li className="collection-item">
                <button className='offer-btn'>Оформить заказ</button>
            </li>
            <i className="material-icons basket-close"
                onClick={handleBasketShow}
            >
                close
            </i>
        </ui>
    )
}

export { BasketList };