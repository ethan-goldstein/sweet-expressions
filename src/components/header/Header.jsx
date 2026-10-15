import "./Header.css";
import logo from "./images/logo512.png";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header className="main-header">
            <div className="brand">
                <img className="logo" src={logo} alt="Sweet Expressions logo" />
                <h1>Sweet Expressions</h1>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;