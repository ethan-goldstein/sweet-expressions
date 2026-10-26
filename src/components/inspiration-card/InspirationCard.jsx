import "./InspirationCard.css";

const InspirationCard = (props) => {
    return (
        <section className="inspiration-card">
            <img src={`${process.env.PUBLIC_URL}/${props.image}`} alt={props.title} />
            <h3>{props.title}</h3>
        </section>
    );
};

export default InspirationCard;
