import { Item } from "./Item";

function ItemList(props) {
    const { items = [], addOrder = Function.prototype } = props;

    if (!items.length) {
        return <h3>Nothing here</h3>
    }

    return (
        <div className="items">
            {items.map(item => (
                <Item key={item.id} addOrder={addOrder} {...item} />
            ))}
        </div>
    )

}

export { ItemList };