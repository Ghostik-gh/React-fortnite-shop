import { API_URL, API_KEY } from "../config";
import { Cart } from "./Cart";
import { useState, useEffect } from "react";
import { Preloader } from "./Preloader";
import { ItemList } from "./ItemList";
import { BasketList } from "./BasketList"

function Shop() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);


    const addOrder = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem]);
        }
        else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    };
                }
                else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter(
            (orderItem) => orderItem.id !== itemId);

        setOrder(newOrder);
    }

    const addQuantity = (itemId) => {
        const newOrder = order.map(item => {
            if (item.id === itemId) {
                const newQuantity = item.quantity + 1;
                return {
                    ...item,
                    quantity: newQuantity
                }
            }
            else {
                return item;
            }
        });
        setOrder(newOrder);
    }
    const reduceQuantity = (itemId) => {
        const newOrder = order.map(item => {
            if (item.id === itemId) {
                const newQuantity = item.quantity - 1;
                return {
                    ...item,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                }
            }
            else {
                return item;
            }
        });
        setOrder(newOrder);
    }

    useEffect(function getItems() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            }
        })
            .then(response => response.json())
            .then(data => {
                data.featured && setItems(data.featured)
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [])

    return <main className="container content">
        <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
        {
            loading
                ? <Preloader />
                : <ItemList items={items} addOrder={addOrder} />
        }
        {
            isBasketShow && <BasketList
                order={order}
                handleBasketShow={handleBasketShow}
                removeFromBasket={removeFromBasket}
                addQuantity={addQuantity}
                reduceQuantity={reduceQuantity}
            />
        }
    </main>
}

export { Shop };