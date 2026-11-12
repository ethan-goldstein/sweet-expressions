import "./HouseDialog.css";
import { API_BASE_URL } from "../../config";

const HouseDialog = (props) => {
    return (
        <div id="house-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.close_dialog}>
                            &times;
                    </span>
                </div>
                <div id="house-dialog-content">
                    <h2>{props.name}</h2>
                    <section id="edit-links">
                        <a href="edit-link">&#9998;</a>
                        <a href="delete-link">&#x2715;</a>
                    </section>
                    <img src={`${API_BASE_URL}/images/${props.main_image}`} alt="House" />
                    <p>{props.bedrooms} Bedrooms</p>
                    <p>{props.bathrooms} Bathrooms</p>
                    <p>Size: {props.size} sqft</p>
                    <p>Features: {props.features.join(", ")}</p>
                </div>
            </div>
        </div>
    )
};

export default HouseDialog;