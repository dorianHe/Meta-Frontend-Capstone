import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from './components/Main/Main';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import BookingPage from "./components/BookingPage/BookingPage";
import ConfirmedBooking from './components/ConfirmedBooking/ConfirmedBooking';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/reservation" element={<BookingPage />} />
                    <Route path="/confirmation" element={<ConfirmedBooking />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
