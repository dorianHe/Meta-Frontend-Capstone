import React from 'react';
import { useReducer } from "react";
import BookingForm from '../BookingForm/BookingForm';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { updateTimes, initializeTimes } from "../../utils/temp"
import "./BookingPage.css"

const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <div>
            <Nav />
            <h1>Book a Table</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
            <Footer />
        </div>
    );
};

export default BookingPage;