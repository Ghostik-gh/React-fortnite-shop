function Item(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addOrder = Function.prototype,
    } = props;
    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn"
                    onClick={() => addOrder({
                        id,
                        name,
                        price,
                    })}>
                    Buy
                </button>
                <span className="right price">{price}</span>
            </div>
        </div >
    )

}

export { Item };