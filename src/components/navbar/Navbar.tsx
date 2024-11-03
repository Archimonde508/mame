import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <div>
            <div className='navbar-content'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/form">Form</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;