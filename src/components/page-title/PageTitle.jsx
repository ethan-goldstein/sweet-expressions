import "./PageTitle.css";

const PageTitle = (props) => {
    return (
        <section className="page-title">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </section>
    );
};

export default PageTitle;
