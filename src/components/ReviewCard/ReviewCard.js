import "./ReviewCard.css"

function ReviewCard({ props }) {
    return (
        <div className="review-card">
            <div className="review-header">
                <p>Rating: {props.rating}</p>
            </div>
            <div className="reivew-content">
                <div className="review-user">
                    <img src={props.image} alt={props.id} />
                    <p>{props.name}</p>
                </div>
                <div className="review-description">
                    <p>{props.review}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard;