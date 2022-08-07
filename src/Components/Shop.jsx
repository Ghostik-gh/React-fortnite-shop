import { API_URL, API_KEY } from "../config";

import { useState, useEffect } from "react";
import { Preloader } from "./Preloader";
import { ItemList } from "./ItemList";

function Shop() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

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
    console.log(items)
    return <main className="container content">
        {
            loading
                ? <Preloader />
                : <ItemList items={items} />
        }
    </main>
}

export { Shop };