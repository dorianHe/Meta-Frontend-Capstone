import { Link } from "react-router-dom";
import "./Nav.css"
import Logo from "../../assets/Logo.svg"



function Nav() {
    return (
        <nav className="navbar">
            <ul>
                <img className="logo" src={Logo} alt="logo" />
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><Link className="link" to={'/reservation'}>Reservation</Link></li>
                {/* <li><Link className="link" to={"/OrderOnline"}>OrderOnline</Link></li> */}
            </ul>
        </nav>
    )
}

export default Nav;