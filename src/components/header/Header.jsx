import "./Header.css";
import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header id="main-header">
            <h1><Link to="/">Sweet Expressions</Link></h1>
            <Navigation />
        </header>
    );
};

export default Header;