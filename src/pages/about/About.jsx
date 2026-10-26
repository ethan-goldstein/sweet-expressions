import "./About.css";
import { Link } from "react-router-dom";
import PageTitle from "../../components/page-title/PageTitle";
import Highlight from "../../components/highlight/Highlight";

const About = () => {
    return (
        <div id="about-page" className="page">
            <PageTitle
                title="The Story Behind the Sweets"
                text="Made with creativity, care, and a little something sweet."
            />

            <section id="our-story">
                <div className="columns">
                    <section>
                        <img src={`${process.env.PUBLIC_URL}/images/ourstorypagepic.jpg`} alt="Sweet Expressions Cookies" />
                    </section>

                    <section>
                        <h2>Our Story</h2>
                        <p>
                            Sweet Expressions was created from a love of
                            turning simple treats into something worth
                            celebrating.
                        </p>
                        <p>
                            Every cookie is thoughtfully designed to match
                            the moment, whether it's a birthday, wedding,
                            holiday, baby announcement, or just because.
                            From the colors and shapes to the smallest
                            details, each set is made to feel personal
                            and unique.
                        </p>
                        <p>
                            What started with a passion for decorating has
                            grown into a way to help make life's sweetest
                            moments even more memorable.
                        </p>
                    </section>
                </div>
            </section>

            <section id="special">
                <h2>What Makes Sweet Expressions Special</h2>

                <div className="columns">
                    <Highlight
                        title="Made with Care"
                        text="Every set receives individual attention from the first idea to the final detail."
                    />
                    <Highlight
                        title="Completely Custom"
                        text="Colors, themes, shapes, and details are personalized to make each order your own."
                    />
                    <Highlight
                        title="Made to Celebrate"
                        text="From life's biggest milestones to its smallest moments, there's always something worth celebrating."
                    />
                </div>
            </section>

            <section id="inspiration">
                <h2>From an Idea to Something Sweet</h2>
                <p>
                    Every order starts with an idea and ends with something
                    made especially for you.
                </p>

                <div className="columns">
                    <img src={`${process.env.PUBLIC_URL}/images/ourstory1.jpg`} alt="Custom Cookie Design" />
                    <img src={`${process.env.PUBLIC_URL}/images/ourstory2.jpg`} alt="Custom Cookie Creation" />
                    <img src={`${process.env.PUBLIC_URL}/images/ourstory3.jpg`} alt="Finished Cookie Set" />
                </div>

                <p>
                    <Link to="/contact" className="button">Start Your Order</Link>
                </p>
            </section>
        </div>
    )
};

export default About;
