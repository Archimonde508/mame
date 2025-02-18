import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { createStyles } from "../../theme/utils";
import { fadeInKeyframes } from "../../theme/keyframes";
import { languages } from "../../constants/languages";
import { useTypedTranslation } from "../../hooks/useTypedTranslation/useTypedTranslation";

const Navbar = () => {
  const { i18n, t } = useTypedTranslation()

  const onLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const langCode = e.target.value
    i18n.changeLanguage(langCode)
  }

  return (
    <nav css={navbarStyles.navbar}>
      <div>
        <div css={navbarStyles.navbarContent}>
          <div className="navigation-content">
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
            <select defaultValue={i18n.language} onChange={onLanguageChange}>
              {languages.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
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
  contactContent: {
    display: "flex",
    gap: "20px",
  },
  contactOption: ({ colors }) => ({
    color: colors.white,
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    padding: "20px 10px",
    transition: "background-color 0.3s ease",
    "&:hover": {
      color: colors.linkHover,
    },
  }),
});
