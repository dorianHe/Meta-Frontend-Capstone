import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useFormik } from "formik";
import { submitAPI } from "../../utils/temp";
import "./BookingForm.css"
import * as Yup from "yup";

function BookingForm({ availableTimes, dispatch }) {
    const navigate = useNavigate();

    const formik = useFormik(
        {
            initialValues: {
                date: (new Date()).toLocaleDateString("en-CA"),
                time: availableTimes.times[0],
                guests: 1,
                occasion: "birthday",
            },
            onSubmit: (values) => {
                const response = submitAPI(values);
                if (response) {
                    localStorage.setItem("Bookings", JSON.stringify(values));
                    navigate("/confirmation");
                };
            },
            validationSchema: Yup.object({
                date: Yup.date().required("Date is required"),
                time: Yup.string().oneOf(availableTimes.times).required("Time is required"),
                guests: Yup.number().min(1, "Must be at least 1").max(10, "Must be at most 10").required("Number of guests is required"),
                occasion: Yup.string().oneOf(["birthday", "anniversary"]).required("Occasion is required"),
            }),
        }
    );

    useEffect(() => {
        dispatch({ type: "UPDATE_TIMES", date: new Date(formik.values.date) });
    }, [formik.values.date, dispatch])


    return (
        <form onSubmit={formik.handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                {...formik.getFieldProps("date")}
            />

            <label htmlFor="res-time">Choose time</label>
            <select data-testid="res-time" id="res-time" {...formik.getFieldProps("time")}>
                {availableTimes.times.map((availableTime, index) => (
                    <option key={index} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                data-testid="guests"
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                {...formik.getFieldProps("guests")}
            />

            <label htmlFor="occasion">Occasion</label>
            <select data-testid="occasion" id="occasion" {...formik.getFieldProps("occasion")}>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;