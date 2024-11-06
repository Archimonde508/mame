import { Link } from "react-router-dom";
import './Navbar.css';
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div>
                <div className='navbar-content'>
                    <div className='navigation-content'>
                        <ul>
                            <Link to="/" className="navbar-option">
                                <li>Home</li>
                            </Link>
                            <Link to="/actress" className="navbar-option">
                                <li>Aktorstwo</li>
                            </Link>
                            <Link to="/charisma" className="navbar-option">
                                <li>Charisma</li>
                            </Link>
                            <Link to="/about" className="navbar-option">
                                <li>About</li>
                            </Link>
                        </ul>
                    </div>
                    <div className='contact-content'>
                        <a href="https://instagram.com/your-account" target="_blank" rel="noopener noreferrer" className="contact-option">
                            <FaInstagram size={50} />
                        </a>
                        <a href="https://www.facebook.com/malgorzata.horyn.olszewska" target="_blank" rel="noopener noreferrer" className="contact-option">
                            <FaFacebook size={50} />
                        </a>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;