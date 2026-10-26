import "./Contact.css";
import PageTitle from "../../components/page-title/PageTitle";
import Step from "../../components/step/Step";

const Contact = () => {
    return (
        <div id="contact-page" className="page">
            <PageTitle
                title="Let's Create Something Sweet"
                text="Tell us a little about your celebration and we'll help bring your cookie ideas to life."
            />

            <section id="order">
                <div className="columns">
                    <section id="order-form">
                        <h2>Request a Custom Order</h2>

                        {/* the form gets hooked up in a later part, so for now it just doesn't reload the page */}
                        <form id="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <p>
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" name="name" required />
                            </p>
                            <p>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" required />
                            </p>
                            <p>
                                <label htmlFor="date">Event Date</label>
                                <input type="date" id="date" name="event_date" required />
                            </p>
                            <p>
                                <label htmlFor="occasion">Occasion</label>
                                <input type="text" id="occasion" name="occasion" required />
                            </p>
                            <p>
                                <label htmlFor="number">Number of Cookies</label>
                                <input type="number" id="number" name="number_of_cookies" min="12" required />
                            </p>
                            <p>
                                <label htmlFor="theme">Theme / Colors</label>
                                <input type="text" id="theme" name="theme" />
                            </p>
                            <p>
                                <label htmlFor="message">Design Ideas</label>
                                <textarea id="message" name="message" rows="5"></textarea>
                            </p>

                            <button type="submit">Send Order Request</button>
                        </form>
                    </section>

                    <aside id="order-info">
                        <section>
                            <h2>Get in Touch</h2>
                            <p>Instagram: @_sweetexpressions_</p>
                            <p>Email: Sweet Expressions</p>
                        </section>

                        <section>
                            <h2>Before You Order</h2>
                            <p>
                                Please include your event date, number of
                                cookies, theme, colors, and any design ideas
                                you have.
                            </p>
                        </section>
                    </aside>
                </div>
            </section>

            <section id="find-us">
                <div className="columns">
                    <section id="find-us-text">
                        <h2>Where We Bake</h2>
                        <p>
                            Sweet Expressions bakes out of Columbia, South
                            Carolina. All orders are picked up locally, and
                            we'll send you the exact pickup spot when we
                            confirm your order.
                        </p>
                    </section>

                    <section id="find-us-map">
                        <iframe
                            src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sColumbia,+SC!6i12"
                            title="Map of Columbia, South Carolina"
                            loading="lazy"
                        ></iframe>
                    </section>
                </div>
            </section>

            <section id="next">
                <h2>What Happens Next?</h2>

                <div className="columns">
                    <Step
                        number="1"
                        title="Submit Your Request"
                        text="Send us the details for your custom cookie order."
                    />
                    <Step
                        number="2"
                        title="We'll Be in Touch"
                        text="We'll follow up to talk about your ideas and order details."
                    />
                    <Step
                        number="3"
                        title="We Create Your Cookies"
                        text="Your custom cookies are created for your special event."
                    />
                </div>
            </section>
        </div>
    )
};

export default Contact;
