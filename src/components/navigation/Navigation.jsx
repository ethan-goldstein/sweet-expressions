import "./Navigation.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    };

    //closes the menu after a link is picked on a phone
    const closeNav = () => {
        setMenuOpen(false);
    };

    return (
        <nav id="main-nav">
            <button id="toggle-nav" onClick={toggleNav} aria-label="Toggle menu">
                {menuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
            </button>
            <ul className={menuOpen ? "" : "hide-small"}>
                <li><NavLink to="/" end onClick={closeNav}>Home</NavLink></li>
                <li><NavLink to="/gallery" onClick={closeNav}>Gallery</NavLink></li>
                <li><NavLink to="/options" onClick={closeNav}>Cookie Options</NavLink></li>
                <li><NavLink to="/about" onClick={closeNav}>About</NavLink></li>
                <li><NavLink to="/contact" onClick={closeNav}>Order & Contact</NavLink></li>
                <li><NavLink to="/details" onClick={closeNav}>Cookie Set Details</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;
