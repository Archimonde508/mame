import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <div>
                <div className='navbar-content'>
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
            </div>
        </nav>
    );
}

export default Navbar;