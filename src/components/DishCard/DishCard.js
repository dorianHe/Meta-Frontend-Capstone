function DishCard({ props }) {
    return (
        <>
            <img />
            <h3></h3>
            <section>{props.name}</section>
            <section>{props.price}</section>
            <section>{props.description}</section>
            <input type="button" value="Order a delivery" />
            <img />
        </>
    )
}

export default DishCard;