const aboutLittleLemon = {
    title: "Little Lemon",
    subTitle: "Chicago",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    image_one: "",
    image_two: ""
}

function About() {
    return (
        <>
            <h1>{aboutLittleLemon.title}</h1>
            <h4>{aboutLittleLemon.subTitle}</h4>
            <p>{aboutLittleLemon.description}</p>
            <section>
                <img />
                <img />
            </section>
        </>
    )
}

export default About;