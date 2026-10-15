import "./Header.css";
import logo from "./images/logo512.png";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header className="main-header">
            <img id="logo" src={logo} alt="Logo" />
            <h1>My App</h1>
            <Navigation />
        </header>
    );
};

export default Header;