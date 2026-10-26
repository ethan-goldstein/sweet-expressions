import "./Home.css";
import { Link } from "react-router-dom";
import CookieCard from "../../components/cookie-card/CookieCard";
import Highlight from "../../components/highlight/Highlight";

const Home = () => {
    return (
        <div id="home" className="page">
            <section id="hero">
                <div className="columns">
                    <section id="hero-text">
                        <h2>Cookies Made for Your Sweetest Moments</h2>
                        <p>
                            Custom decorated cookies made for birthdays,
                            weddings, holidays, sports, and every sweet
                            moment in between.
                        </p>
                        <p>
                            <Link to="/contact" className="button">Order Custom Cookies</Link>
                        </p>
                    </section>

                    <section id="hero-image">
                        <img src={`${process.env.PUBLIC_URL}/images/cookies.jpg`} alt="Sweet Expressions Cookies" />
                    </section>
                </div>
            </section>

            <section id="occasions">
                <h2>Cookies for Every Occasion</h2>
                <p>
                    From birthdays and weddings to holidays and game days,
                    every cookie is made to make your celebration a little sweeter.
                </p>

                <div className="columns">
                    <CookieCard
                        image="images/birthdaycookies.jpg"
                        title="Birthday Cookies"
                        text="Custom designs made to make every birthday extra sweet."
                        link="/gallery"
                        linkText="See the Gallery"
                    />
                    <CookieCard
                        image="images/weddingengagement.jpg"
                        title="Wedding & Engagement"
                        text="Elegant custom cookies designed for weddings, engagements, and special celebrations."
                        link="/details"
                        linkText="View Cookie Set"
                    />
                    <CookieCard
                        image="images/holidaycookies.jpg"
                        title="Holiday Cookies"
                        text="Festive custom cookies made for holidays, parties, and seasonal celebrations."
                        link="/options"
                        linkText="Cookie Options"
                    />
                </div>
            </section>

            <section id="home-about">
                <div className="columns">
                    <section>
                        <h2>Made With Care, Designed for You</h2>
                        <p>
                            Every order is carefully designed and decorated
                            by hand to create cookies that are unique to your
                            celebration. From the first idea to the final
                            detail, Sweet Expressions makes every order personal.
                        </p>
                    </section>

                    <section>
                        <Highlight
                            title="Hand Decorated"
                            text="Each cookie is individually decorated with care and attention to detail."
                        />
                        <Highlight
                            title="Made for Your Occasion"
                            text="Designs can be customized to match your celebration, colors, and theme."
                        />
                        <Highlight
                            title="Made to Be Memorable"
                            text="Beautiful cookies that add a personal and delicious touch to every special moment."
                        />
                    </section>
                </div>
            </section>

            <section id="home-contact">
                <h2>Ready to Make Something Sweet?</h2>
                <p>
                    Tell us about your event, theme, and ideas, and we'll
                    help create custom cookies made just for you.
                </p>
                <p>
                    <Link to="/contact" className="button">Start Your Custom Order</Link>
                </p>
            </section>
        </div>
    )
};

export default Home;
