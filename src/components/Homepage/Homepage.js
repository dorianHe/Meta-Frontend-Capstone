import About from "../About/About"
import CallToAction from "../CallToAction/CallToAction"
import Nav from "../Nav/Nav"
import Specials from "../Specials/Specials"
import CustomersSay from "../CustomersSay/CustomersSay"
import Footer from "../Footer/Footer"

function Homepage() {
    return (
        <>
            <Nav />
            <CallToAction />
            <Specials />
            <CustomersSay />
            <About />
            <Footer />
        </>
    )
}

export default Homepage