import "./Footer.css";
import restaurant from "../../assets/restaurant.jpg"
const doormatNavigation = [
    {
        name: "Home",
        href: ""
    },
    {
        name: "About",
        href: "#about"
    },
    {
        name: "Menu",
        href: "#menu"
    },
    {
        name: "Reservations",
        href: ""
    },
    {
        name: "Order Online",
        href: ""
    },
    {
        name: "Login",
        href: ""
    }
];
const contact = [
    {
        name: "Adress",
        href: ""
    },
    {
        name: "phone number",
        href: ""
    },
    {
        name: "email",
        href: ""
    }
];
const socialMedia = [
    {
        name: "Facebook",
        href: ""
    },
    {
        name: "Instagram",
        href: ""
    },
    {
        name: "Twitter",
        href: ""
    },
    {
        name: "Youtube",
        href: ""
    }
];


function FooterItem({ props }) {
    return (
        <>
            <ul>
                {props.map(
                    (item) => {
                        return <li key={item}>
                            <a href={item.href} className="footer-link">{item.name}</a>
                        </li>
                    }
                )}
            </ul >
        </>
    )
}

function Footer() {
    return (
        <div className="footer-section">
            <div className="footer-grid">
                <div className="image">
                    <img className="restaurant-image" src={restaurant} alt="restaurant" />
                </div>
                <div className="navigation">
                    <h4>Little Lemon</h4>
                    <FooterItem props={doormatNavigation} />
                </div>
                <div className="contact">
                    <h4>Contact</h4>
                    <FooterItem props={contact} />
                </div>
                <div className="social">
                    <h4>Social Media</h4>
                    <FooterItem props={socialMedia} />
                </div>
            </div>
        </div>
    )
}

export default Footer;