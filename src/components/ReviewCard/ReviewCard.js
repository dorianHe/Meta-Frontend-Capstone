function ReviewCard({ props }) {
    return (
        <>
            <h3>Rating</h3>
            <section>
                <p>{props.rating}</p>
                <img />
                <p>{props.name}</p>
                <p>{props.review}</p>
            </section>
        </>
    )
}

export default ReviewCard;