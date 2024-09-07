import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./ConfirmedBooking.css"


function ConfirmedBooking() {
    const navigate = useNavigate();
    const [booking, setBooking] = useState({ date: "", time: "", guests: "", occasion: "" });

    useEffect(() => {
        const booking = localStorage.getItem("Bookings");
        if (booking) {
            setBooking(JSON.parse(booking));
        };
    }, []);

    return (
        <>
            <Nav />
            <div className="confirmation">
                <h1>Thank you for booking!</h1>
                <h3 className="lead-txt">We look forward to seeing you at Little Lemon.</h3>
                <div className="details">
                    <h2>Confirmation details</h2>
                    <span><strong>Occasion:</strong> {booking.occasion}</span>
                    <span><strong>Guests:</strong> {booking.guests}</span>
                    <span><strong>Date:</strong> {booking.date}</span>
                    <span><strong>Time:</strong> {booking.time}</span>
                </div>
                <button onClick={() => navigate("/")} aria-label="Go back to the home page" >Back to Home</button>
            </div>
            <Footer />
        </>
    )
}

export default ConfirmedBooking;