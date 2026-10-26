import "./Highlight.css";

const Highlight = (props) => {
    return (
        <section className="highlight">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </section>
    );
};

export default Highlight;
