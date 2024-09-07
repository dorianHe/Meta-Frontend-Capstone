import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm/BookingForm';
import { initializeTimes, updateTimes, submitAPI, fetchAPI } from './utils/temp';

test('Find Little Lemon', () => {
    render(<App />);
    const littleLemonText = screen.getByText("We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.");
    expect(littleLemonText).toBeInTheDocument();
});

describe("BookingForm", () => {

    test("initializeTimes returns the expected value", () => {
        const today = new Date();
        const initialState = initializeTimes();
        const expectedResult = { times: fetchAPI(today) };
        expect(initialState).toEqual(expectedResult);
    });

    test("updateTimes returns the same state", () => {
        const state = {
            times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        };
        const action = { type: "SOME_ACTION" };
        const newState = updateTimes(state, action);
        expect(newState).toEqual(state);
    });

    test("submitAPI returns true", () => {
        const formData = {
            date: "2022-10-12",
            time: "20:00",
            guests: 5,
            occasion: "Birthday",
        };
        const result = submitAPI(formData);
        expect(result).toBe(true);
    });
});