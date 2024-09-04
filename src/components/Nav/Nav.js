import HomePage from "../Homepage/Homepage"
import BookingPage from "../BookingPage/BookingPage"
import { Routes, Route } from "react-router-dom"

function Nav() {
    <nav>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
    </nav>
}

export default Nav;