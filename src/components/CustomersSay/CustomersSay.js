import ReviewCard from "../ReviewCard/ReviewCard";

const reviews = [
    {
        id: 1,
        name: "John",
        review: "Good",
        rating: 5
    },
    {
        id: 2,
        name: "Cindy",
        review: "Not bad",
        rating: 4
    },
    {
        id: 3,
        name: "Akiyama",
        review: "Great!",
        rating: 5
    },
    {
        id: 4,
        name: "Nogi",
        review: "Delicious",
        rating: 5
    }

]

function CustomersSay() {
    return (
        <>
            <h2>Testimonials</h2>
            {reviews.map((review) => { return <ReviewCard key={review.id} props={review} /> })}
        </>
    )
}

export default CustomersSay;