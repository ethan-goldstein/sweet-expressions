import "./Details.css";
import { Link } from "react-router-dom";
import InspirationCard from "../../components/inspiration-card/InspirationCard";

const Details = () => {
    return (
        <div id="details-page" className="page">
            <section id="details">
                <p>
                    <Link to="/gallery">&larr; Back to Gallery</Link>
                </p>

                <div className="columns">
                    <section id="detail-image">
                        <img src={`${process.env.PUBLIC_URL}/images/cookies.jpg`} alt="Wedding and Engagement Cookie Set" />
                    </section>

                    <section id="detail-text">
                        <p className="category">WEDDINGS & ENGAGEMENTS</p>
                        <h2>Wedding & Engagement Cookie Set</h2>
                        <p>
                            Celebrate the happy couple with a custom cookie
                            set designed especially for their big moment.
                            Choose personalized colors, lettering, dates,
                            and designs to make each set perfect for the
                            celebration.
                        </p>

                        <h3>Customize Your Set</h3>
                        <p>Custom colors</p>
                        <p>Personalized names or dates</p>
                        <p>Coordinating shapes and designs</p>
                        <p>Individual wrapping available</p>

                        <p>
                            <Link to="/contact" className="button">Request This Cookie Set</Link>
                        </p>
                    </section>
                </div>
            </section>

            <section id="more-inspiration">
                <h2>More Sweet Inspiration</h2>
                <p>Every celebration deserves something made just for it.</p>

                <div className="columns">
                    <InspirationCard
                        image="images/birthdaycelebrations.jpg"
                        title="Birthday Celebrations"
                    />
                    <InspirationCard
                        image="images/babyandspecialocassion.jpg"
                        title="Baby & Special Occasions"
                    />
                    <InspirationCard
                        image="images/holidayfavorites.jpg"
                        title="Holiday Favorites"
                    />
                </div>
            </section>

            <section id="detail-contact">
                <p>
                    <Link to="/contact" className="button">Contact Us!</Link>
                </p>
            </section>
        </div>
    )
};

export default Details;
