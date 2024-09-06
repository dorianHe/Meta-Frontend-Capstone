import imageLower from "../../assets/Mario_and_Adrian_A.jpg"
import imageUpper from "../../assets/Mario_and_Adrian_B.jpg"
import "./About.css"

const aboutLittleLemon = {
    title: "Little Lemon",
    subTitle: "Chicago",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    image_one: "",
    image_two: ""
}

function About() {
    return (
        <div className="about-section">
            <div className="about-grid">
                <div className="description">
                    <div className="about-header">
                        <h1>{aboutLittleLemon.title}</h1>
                    </div>
                    <div className="about-subheader">
                        <h4>{aboutLittleLemon.subTitle}</h4>
                    </div>
                    <div className="about-description">
                        <p>{aboutLittleLemon.description}</p>
                    </div>
                </div>
                <div className="image">
                    <img className="image-upper" src={imageUpper} alt="Mario and Adrian B" />
                    <img className="image-lower" src={imageLower} alt="Mario and Adrian A" />
                </div>
            </div>
        </div>
    )
}

export default About;