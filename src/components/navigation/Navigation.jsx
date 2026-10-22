import "./Navigation.css";
import {NavLink} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><HashLink to="/#about">About</HashLink></li>
                <li><NavLink to="/listings">Listings</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;