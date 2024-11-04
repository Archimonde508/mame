import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import './footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <a href="mailto:your-email@example.com" className="footer-option">
                    <FaEnvelope size={24} />
                    <span>malgorzata.horyn-olszewska@wp.pl</span>
                </a>
                <a href="https://instagram.com/your-account" target="_blank" rel="noopener noreferrer" className="footer-option">
                    <FaInstagram size={24} />
                    <span>@modelka40plus</span>
                </a>
                <a href="https://facebook.com/your-account" target="_blank" rel="noopener noreferrer" className="footer-option">
                    <FaFacebook size={24} />
                    <span>malgorzata-horyn-olszewska</span>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
