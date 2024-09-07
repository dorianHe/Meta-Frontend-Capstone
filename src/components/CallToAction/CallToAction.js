import { useNavigate } from "react-router-dom";
import RestaurantFood from "../../assets/RestaurantFood.jpg";
import './CallToAction.css';

function CallToAction() {
    const navigate = useNavigate();
    return (
        <div className="hero">
            <div className="content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="lead-text">
                    We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button onClick={() => { navigate("/reservation") }} aria-label="Go to reservation table page."> Reserve a table</button>
            </div>
            <div className="image">
                <img id="restaurantfood" src={RestaurantFood} alt="Restaurant Food" />
            </div>
        </div>
    )
}

export default CallToAction;