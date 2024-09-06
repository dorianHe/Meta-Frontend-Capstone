import About from "../About/About"
import CallToAction from "../CallToAction/CallToAction"
import Specials from "../Specials/Specials"
import CustomersSay from "../CustomersSay/CustomersSay"
import Footer from "../Footer/Footer"

function Homepage() {
    return (
        <>
            <CallToAction />
            <section id="menu">
                <Specials />
            </section>
            <CustomersSay />
            <section id="about">
                <About />
            </section>
            <Footer />
        </>
    )
}

export default Homepage