import "./House.css";

const House = (props) => {
    return (
        <section className="house">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </section>
    )
};

export default House;