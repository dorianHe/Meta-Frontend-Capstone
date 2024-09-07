import { useNavigate } from "react-router-dom";


function ConfirmedBooking() {
    const navigate = useNavigate();

    return (
        <>
            <h2>Thank you for booking!</h2>
            <button onClick={() => navigate("/")} aria-label="Go back to the home page" >Back to Home</button>
        </>
    )
}

export default ConfirmedBooking;