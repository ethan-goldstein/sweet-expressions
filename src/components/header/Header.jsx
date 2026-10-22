import "./Header.css";
import logo from "./images/logo.jpg";
import Navigation from "../navigation/Navigation";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="main-header">
            <NavLink to="/"><img id="logo" src={logo} alt="Cherry" /></NavLink>
            <h1><NavLink to="/">Finding A Home</NavLink></h1>
            <Navigation />
        </header>
    );
};

export default Header;