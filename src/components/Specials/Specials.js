import DishCard from "../DishCard/DishCard";


const dishes = [
    {
        id: 1,
        name: "Greek salad",
        price: 12.99,
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        image: ""
    },
    {
        id: 2,
        name: "Bruchetta",
        price: 5.99,
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        image: ""
    },
    {
        id: 3,
        name: "Lemon Dessert",
        price: 5.00,
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image: ""
    }
]

function Specials() {
    return (
        <>
            <h2>Specials</h2>
            <input type="button" value="Online Menu" />
            {dishes.map(dish => { return <DishCard key={dish.id} props={dish} /> })}
        </>
    )
}

export default Specials;