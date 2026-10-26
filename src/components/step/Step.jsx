import "./Step.css";

const Step = (props) => {
    return (
        <section className="step">
            <h3>{props.number}</h3>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </section>
    );
};

export default Step;
