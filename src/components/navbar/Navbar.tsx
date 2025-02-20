import { createStyles } from "../../theme/utils";
import { fadeInKeyframes } from "../../theme/keyframes";
import { useTypedTranslation } from "../../hooks/useTypedTranslation/useTypedTranslation";
import { Link } from "react-router-dom";
import ContactIcon from "../contact-icon/ContactIcon";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import LanguageSelector from "../language-selector/LanguageSelector";

const Navbar = () => {
  const { t } = useTypedTranslation();

  return (
    <nav css={navbarStyles.navbar}>
      <div>
        <div css={navbarStyles.navbarContent}>
          <ul css={navbarStyles.navbarList}>
            <Link to="/" css={navbarStyles.navbarOption}>
              <li>{t("homePageName")}</li>
            </Link>
            <Link to="/acting" css={navbarStyles.navbarOption}>
              <li>{t("actingPageName")}</li>
            </Link>
            <Link to="/arabian" css={navbarStyles.navbarOption}>
              <li>{t("orientPageName")}</li>
            </Link>
            <Link to="/charisma" css={navbarStyles.navbarOption}>
              <li>{t("modelPageName")}</li>
            </Link>
            <Link to="/about" css={navbarStyles.navbarOption}>
              <li>{t("aboutPageName")}</li>
            </Link>
          </ul>
          <div css={navbarStyles.contactAndLanguageContainer}>
            <ContactIcon
              href="https://www.instagram.com/aktorka.modelka/"
              icon={FaInstagram}
            />
            <ContactIcon
              href="https://www.facebook.com/malgorzata.horyn.olszewska"
              icon={FaFacebook}
            />
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const navbarStyles = createStyles({
  navbar: ({ colors }) => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    color: colors.white,
    zIndex: 1000,
    opacity: 0,
    animation: `${fadeInKeyframes} 0.5s ease-in forwards`,
  }),
  navbarList: {
    listStyleType: "none",
    display: "flex",
    gap: "20px",
  },
  navbarContent: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "5%",
  },
  navbarOption: ({ colors, typography: { fontWeight } }) => ({
    width: "80px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: colors.white,
    textDecoration: "none",
    fontWeight: fontWeight.medium,
    "&:hover": {
      color: colors.linkHover,
    },
  }),
  contactAndLanguageContainer: {
    display: "flex",
    gap: "20px",
    padding: "20px 0",
  },
});
