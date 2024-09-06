import RestaurantFood from "../../assets/RestaurantFood.jpg";
import './CallToAction.css';

function CallToAction() {
    return (
        <div className="hero">
            <div className="content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="lead-text">
                    We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <input type="button" value="Reserve a table" />
            </div>
            <div className="image">
                <img id="restaurantfood" src={RestaurantFood} alt="Restaurant Food" />
            </div>
        </div>
    )
}

export default CallToAction;