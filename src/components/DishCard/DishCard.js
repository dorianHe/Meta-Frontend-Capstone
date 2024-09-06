import './DishCard.css';
import deliveryIcon from "../../assets/deliveryIcon.svg";

function DishCard({ props }) {
    return (
        <div className="special-card">
            <img className="card-image" src={props.image} alt={props.name} />
            <div className="card-content">
                <h3>
                    {props.name}
                    <span className="price">${props.price}</span>
                </h3>
                <p className="description">{props.description}</p>
            </div>
            <div className="card-footer">
                {/* <input type="button" value="Order a delivery" /> */}
                <button>Order a delivery</button>
                <img className="delivery-icon" src={deliveryIcon} alt="delivery" />
            </div>
        </div>
    )
}

export default DishCard;