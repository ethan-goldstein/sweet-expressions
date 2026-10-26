import "./OptionCard.css";

const OptionCard = (props) => {
    return (
        <section className="option-card">
            <h3>{props.title}</h3>
            {props.items.map((item) => (
                <p key={item}>{item}</p>
            ))}
        </section>
    );
};

export default OptionCard;
