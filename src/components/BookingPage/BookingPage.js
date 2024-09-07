import React from 'react';
import { useReducer } from "react";
import BookingForm from '../BookingForm/BookingForm';
import { updateTimes, initializeTimes } from "../../utils/temp"

const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <div>
            <h1>Book a Table</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    );
};

export default BookingPage;