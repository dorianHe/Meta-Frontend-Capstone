import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import BookingPage from "../BookingPage/BookingPage"
import Homepage from './components/Homepage/Homepage';
import Nav from './components/Nav/Nav';


function App() {
    return (
        // <Router>
        <>
            <Nav />
            <Homepage />
            {/* <Routes> */}
            {/* <Route path="/" element={<Homepage />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/menu" element={<Specials />} /> */}
            {/* </Routes> */}
            {/* // </Router> */}
        </>
    );
}

export default App;
