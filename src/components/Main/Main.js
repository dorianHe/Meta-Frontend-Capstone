import Nav from "../Nav/Nav";
import About from "../About/About"
import CallToAction from "../CallToAction/CallToAction"
import Specials from "../Specials/Specials"
import CustomersSay from "../CustomersSay/CustomersSay"
import Footer from "../Footer/Footer"
import BookingPage from "../BookingPage/BookingPage";


function Main() {


    return (
        <main>
            <Nav />
            <CallToAction />
            <section id="menu">
                <Specials />
            </section>
            <CustomersSay />
            <section id="about">
                <About />
            </section>
            <Footer />
        </main>
    )
}

export default Main