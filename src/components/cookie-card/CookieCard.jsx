import "./CookieCard.css";
import { Link } from "react-router-dom";

const CookieCard = (props) => {
    return (
        <section className="cookie-card">
            <img src={`${process.env.PUBLIC_URL}/${props.image}`} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <p><Link to={props.link}>{props.linkText}</Link></p>
        </section>
    );
};

export default CookieCard;
