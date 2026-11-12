import "./House.css";
import {useState} from "react";
import { API_BASE_URL } from "../../config";
import HouseDialog from "../house_dialog/HouseDialog";

const House = (props) => {
    const [showDialog, setShowDialog] = useState(false);

    const showDetails = () => {
        setShowDialog(true);
    };

    const hideDetails = (e) => {
        e.stopPropagation();
        setShowDialog(false);
    };

    return (
        <section className="house" onClick={showDetails}>
            <img src={`${API_BASE_URL}/images/${props.main_image}`} alt="House" />
            <h3>{props.name}</h3>
            {showDialog && <HouseDialog 
                                _id={props._id}
                                name={props.name}
                                bedrooms={props.bedrooms}
                                size={props.size}
                                bathrooms={props.bathrooms}
                                main_image={props.main_image}
                                features={props.features}
                                close_dialog={hideDetails}/>}
        </section>
    )
};

export default House;