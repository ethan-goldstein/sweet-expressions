import "./GalleryCard.css";

const GalleryCard = (props) => {
    return (
        <section className="gallery-card">
            <img src={`${process.env.PUBLIC_URL}/${props.image}`} alt={props.name} />
            <h3>{props.name}</h3>
            <p className="gallery-category">{props.category}</p>
            <p>{props.description}</p>
            <p className="cookie-details">
                {props.price} &middot; Minimum order: {props.minOrder}
            </p>
        </section>
    );
};

export default GalleryCard;
