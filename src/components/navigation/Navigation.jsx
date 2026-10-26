import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav id="main-nav">
            <ul>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
                <li><NavLink to="/options">Cookie Options</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Order & Contact</NavLink></li>
                <li><NavLink to="/details">Cookie Set Details</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;