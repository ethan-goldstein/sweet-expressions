import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer id="main-footer">
            <div className="columns">
                <section>
                    <h3>Sweet Expressions</h3>
                    <p>Custom cookies made for life's sweetest moments.</p>
                    <p>&copy; 2026 Sweet Expressions</p>
                </section>

                <nav>
                    <ul className="columns">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/options">Cookie Options</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Order & Contact</Link></li>
                        <li><Link to="/details">Cookie Set Details</Link></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
};

export default Footer;