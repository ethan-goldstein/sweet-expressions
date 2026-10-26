import "./Slideshow.css";
import { useState, useEffect } from "react";

const Slideshow = (props) => {
    const [current, setCurrent] = useState(0);
    const count = props.slides.length;

    //moves to the next slide every 5 seconds, starting over at the end
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((index) => (index + 1) % count);
        }, 5000);

        return () => clearInterval(timer);
    }, [count]);

    const showPrevious = () => {
        setCurrent((index) => (index - 1 + count) % count);
    };

    const showNext = () => {
        setCurrent((index) => (index + 1) % count);
    };

    return (
        <section className="slideshow">
            <div className="slide-frame">
                {props.slides.map((slide, index) => (
                    <img
                        key={slide.image}
                        src={`${process.env.PUBLIC_URL}/${slide.image}`}
                        alt={slide.alt}
                        className={index === current ? "" : "hidden"}
                    />
                ))}

                <button className="slide-arrow slide-left" onClick={showPrevious} aria-label="Previous slide">&#10094;</button>
                <button className="slide-arrow slide-right" onClick={showNext} aria-label="Next slide">&#10095;</button>
            </div>

            <div className="slide-dots">
                {props.slides.map((slide, index) => (
                    <span
                        key={slide.image}
                        className={index === current ? "active" : ""}
                        onClick={() => setCurrent(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Slideshow;
