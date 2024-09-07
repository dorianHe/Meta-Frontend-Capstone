import imageA from "../../assets/Mario_and_Adrian_A.jpg"
import imageB from "../../assets/Mario_and_Adrian_B.jpg"
import "./About.css"

const aboutLittleLemon = {
    title: "Little Lemon",
    subTitle: "Chicago",
    descriptionOne: "Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.",
    descriptionTwo: "To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.",
}

function About() {
    return (
        <div className="about-section">
            <div className="about-grid">
                <div className="about-description">
                    <h2>{aboutLittleLemon.title}</h2>
                    <h4>{aboutLittleLemon.subTitle}</h4>
                    <div className="about-description-one">
                        <p>{aboutLittleLemon.descriptionOne}</p>
                    </div>
                    <div className="about-description-two">
                        <p>{aboutLittleLemon.descriptionTwo}</p>
                    </div>
                </div>
                <div className="image">
                    <img className="image-upper" src={imageB} alt="Mario and Adrian B" />
                    <img className="image-lower" src={imageA} alt="Mario and Adrian A" />
                </div>
            </div>
        </div>
    )
}

export default About;