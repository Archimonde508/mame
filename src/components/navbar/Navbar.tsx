import { Link } from "react-router-dom";
import "./navbar.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { createStyles } from "../../theme/utils";
import { keyframes } from "@emotion/react";

const Navbar = () => {
  return (
    <nav css={navbarStyles.navbar}>
      <div>
        <div css={navbarStyles.navbarContent}>
          <div className="navigation-content">
            <ul>
              <Link to="/" css={navbarStyles.navbarOption}>
                <li>Home</li>
              </Link>
              <Link to="/actress" css={navbarStyles.navbarOption}>
                <li>Aktorstwo</li>
              </Link>
              <Link to="/charisma" css={navbarStyles.navbarOption}>
                <li>Charisma</li>
              </Link>
              <Link to="/about" css={navbarStyles.navbarOption}>
                <li>About</li>
              </Link>
            </ul>
          </div>
          <div css={navbarStyles.contactContent}>
            <a
              href="https://www.instagram.com/aktorka.modelka/"
              target="_blank"
              rel="noopener noreferrer"
              css={navbarStyles.contactOption}
            >
              <FaInstagram size={50} />
            </a>
            <a
              href="https://www.facebook.com/malgorzata.horyn.olszewska"
              target="_blank"
              rel="noopener noreferrer"
              css={navbarStyles.contactOption}
            >
              <FaFacebook size={50} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const navbarStyles = createStyles({
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(12, 12, 12, 0)",
    color: "white",
    zIndex: 1000,
    opacity: 0,
    animation: `${fadeIn} 0.5s ease-in forwards`,
  },
  navbarContent: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "5%",
  },
  navbarOption: {
    width: "80px",
    height: "50px",
    backgroundColor: "rgba(24, 24, 24, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contactContent: {
    display: "flex",
    gap: "20px",
  },
  contactOption: {
    color: "white",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    padding: "20px 10px",
    transition: "background-color 0.3s ease"
  },
});

