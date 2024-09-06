import ReviewCard from "../ReviewCard/ReviewCard";
import "./CustomersSay.css"
import John from "../../assets/John.png"
import Ann from "../../assets/Ann.png"
import Gaby from "../../assets/Gaby.png"
import Leo from "../../assets/Leo.png"

const reviews = [
    {
        id: 1,
        name: "John",
        review: "I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!",
        rating: 5,
        image: John
    },
    {
        id: 2,
        name: "Ann",
        review: "I went to the restaurant with my family and we were very pleased with everything.",
        rating: 4,
        image: Ann
    },
    {
        id: 3,
        name: "Leo",
        review: "The quality of the ingredients and the preparation of the dishes were impeccable.!",
        rating: 5,
        image: Leo,
    },
    {
        id: 4,
        name: "Gaby",
        review: "The restaurant has a great variety of dishes and all the ones I tried were excellent.",
        rating: 5,
        image: Gaby
    }

]

function CustomersSay() {
    return (
        <div className="reivew-section">
            <div className="review-header">
                <h2>What our customers say</h2>
            </div>
            <div className="review-grid">
                {reviews.map((review) => { return <ReviewCard key={review.id} props={review} /> })}
            </div>
        </div>
    )
}

export default CustomersSay;