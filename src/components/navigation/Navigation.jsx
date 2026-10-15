import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#options">Cookie Options</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Order & Contact</a></li>
                <li><a href="#details">Cookie Set Details</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;