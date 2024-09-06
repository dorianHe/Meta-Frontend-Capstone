import DishCard from "../DishCard/DishCard";
import greekSalad from "../../assets/greekSalad.jpg"
import bruchetta from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemonDessert.jpg";
import './Specials.css';


const dishes = [
    {
        id: 1,
        name: "Greek salad",
        price: 12.99,
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        image: greekSalad
    },
    {
        id: 2,
        name: "Bruchetta",
        price: 5.99,
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        image: bruchetta
    },
    {
        id: 3,
        name: "Lemon Dessert",
        price: 5.00,
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image: lemonDessert
    }
]

function Specials() {
    return (
        <div className="specials-section">
            <div className="specials-header">
                <h1>This week specials</h1>
                <button className="menu-button">Online Menu</button>
            </div>
            <div className="specials-grid">
                {dishes.map(dish => { return <DishCard key={dish.id} props={dish} /> })}
            </div>
        </div>
    )
}

export default Specials;