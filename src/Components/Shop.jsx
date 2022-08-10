import { API_URL, API_KEY } from "../config";
import { Cart } from "./Cart";
import { useEffect, useContext } from "react";
import { Preloader } from "./Preloader";
import { ItemList } from "./ItemList";
import { BasketList } from "./BasketList"
import { Alert } from "./Alert";
import { ShopContext } from "../context"


function Shop() {
    const { loading, order, isBasketShow, alertName, getItems } = useContext(ShopContext);

    useEffect(function setItems() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then(response => response.json())
            .then(data => {
                getItems(data.featured);
            })
            .catch(err => console.error(err));
    }, [])



    return (
        <main className="container content">
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <ItemList />}
            {isBasketShow && <BasketList />}
            {alertName && <Alert />}
        </main>
    );
}

export { Shop };