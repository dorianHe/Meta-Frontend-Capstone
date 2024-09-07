import "./Nav.css"
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/Logo.svg"
import basketImg from "../../assets/basket.svg";


function Nav() {
    return (
        <nav className="navbar">
            <ul>
                <img className="logo" src={Logo} alt="logo" />
                <li> <HashLink to="/">Home</HashLink> </li>
                <li> <HashLink to="/#about">About</HashLink> </li>
                <li> <HashLink to="/#menu">Menu</HashLink> </li>
                <li> <HashLink to="/reservation">Reservations</HashLink> </li>
                <li className="orderBtn"> <HashLink role="button" to="#">Order Online</HashLink> </li>
                <li> <img className="basketIcon" src={basketImg} alt="Basket" /> </li>
                {/* <li><Link className="link" to={'/reservation'}>Reservation</Link></li> */}
                {/* <li><Link className="link" to={"/OrderOnline"}>OrderOnline</Link></li> */}
            </ul>
        </nav>
    )
}

export default Nav;