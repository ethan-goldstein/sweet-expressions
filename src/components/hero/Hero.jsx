import "./Hero.css";
import countryHouse from "./images/country-house.jpg";

const Hero = () => {
    return (
        <section id="hero">
            <img src={countryHouse} alt="Country House" />
        </section>
    )
};

export default Hero;