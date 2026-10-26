import "./Options.css";
import { Link } from "react-router-dom";
import PageTitle from "../../components/page-title/PageTitle";
import OptionCard from "../../components/option-card/OptionCard";
import Step from "../../components/step/Step";

const Options = () => {
    return (
        <div id="options-page" className="page">
            <PageTitle
                title="Made Just for You"
                text="Choose your flavors, designs, quantities, and packaging to create the perfect custom cookie order."
            />

            <section id="options">
                <div className="columns">
                    <OptionCard
                        title="Cookie Flavors"
                        items={["Classic Sugar", "Chocolate", "Seasonal Flavors"]}
                    />
                    <OptionCard
                        title="Design & Theme"
                        items={["Custom Colors", "Shapes & Lettering", "Event Themes"]}
                    />
                </div>

                <div className="columns">
                    <OptionCard
                        title="Order Size"
                        items={["Individual Cookies", "Dozen Sets", "Large Event Orders"]}
                    />
                    <OptionCard
                        title="Packaging"
                        items={["Standard Box", "Individually Wrapped", "Gift & Party Favors"]}
                    />
                </div>
            </section>

            <section id="how-it-works">
                <h2>How It Works</h2>

                <div className="columns">
                    <Step
                        number="1"
                        title="Share Your Idea"
                        text="Tell us about your event, theme, colors, and inspiration."
                    />
                    <Step
                        number="2"
                        title="Customize Your Set"
                        text="Choose your flavors, designs, quantity, and packaging."
                    />
                    <Step
                        number="3"
                        title="We Bake & Decorate"
                        text="Your custom cookies are baked and decorated with care."
                    />
                    <Step
                        number="4"
                        title="Pick Up & Enjoy"
                        text="Your finished cookies are ready for your celebration."
                    />
                </div>
            </section>

            <section id="option-images">
                <div className="columns">
                    <img src={`${process.env.PUBLIC_URL}/images/madejustforyou1.jpg`} alt="Custom Cookie Set" />
                    <img src={`${process.env.PUBLIC_URL}/images/madejustforyou2.jpg`} alt="Custom Designed Cookies" />
                </div>

                <p className="center">
                    <Link to="/contact" className="button">Start Your Custom Order</Link>
                </p>
            </section>
        </div>
    )
};

export default Options;
