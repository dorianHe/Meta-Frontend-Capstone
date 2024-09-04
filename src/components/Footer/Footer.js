const doormatNavigation = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];
const contact = ["Adress", "phone number", "email"];
const socialMedia = ["Facebook", "Instagram", "Twitter", "Youtube"];


function FooterItem({ props }) {
    return (
        <>
            <ul>
                <li>
                    {props.map(
                        (item) => {
                            return <li key={item}>
                                <a>{item}</a>
                            </li>
                        }
                    )}
                </li>
            </ul>
        </>
    )
}

function Footer() {
    return (
        <>
            <img />
            <FooterItem props={doormatNavigation} />
            <FooterItem props={contact} />
            <FooterItem props={socialMedia} />
        </>
    )
}

export default Footer;