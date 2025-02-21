import { useState, useEffect } from "react";
import { createStyles } from "../../theme/utils";
import { fadeInKeyframes } from "../../theme/keyframes";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const img = new Image();
    img.src = "/home.jpg";
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <div
      css={[
        homePageStyles.home,
        loaded ? homePageStyles.homeLoaded : homePageStyles.homeInitial,
      ]}
    >
      <div css={homePageStyles.infoContainer}>
        <div css={homePageStyles.nameContainer}>
          <div css={homePageStyles.firstnameContainer}>
            <div>Małgorzata </div>
          </div>
          <div className="surname-container">Horyń-Olszewska </div>
        </div>
        <div css={homePageStyles.careerContainer}>{t("homeDescription")}</div>
      </div>
    </div>
  );
};

export default HomePage;

const homePageStyles = createStyles({
  home: ({ breakPoints, colors }) => ({
    position: "relative",
    backgroundColor: colors.black,
    height: "100vh",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "10%",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "30% center",
      transition: "opacity 1s ease-in-out",
    },
    backgroundPosition: "30% center",
    [breakPoints.up("xl")]: {
      backgroundPosition: "center 10%",
    },
    [breakPoints.up("2xl")]: {
      backgroundPosition: "center 25%",
    },
    [breakPoints.up("3xl")]: {
      backgroundPosition: "center 50%",
    },
  }),
  homeInitial: {
    "&::before": {
      backgroundImage: "url('')",
      opacity: 0,
    },
  },
  homeLoaded: {
    "&::before": {
      backgroundImage: "url('/home.jpg')",
      opacity: 1,
    },
  },
  nameContainer: ({
    breakPoints,
    colors,
    typography: { fontWeight, fontSize },
  }) => ({
    fontFamily: "'Playfair Display SC', sans-serif",
    textAlign: "left",
    borderBottom: "2px solid white",
    paddingBottom: "0.5rem",
    color: colors.white,
    fontSize: fontSize.lg,
    letterSpacing: "3px",
    fontWeight: fontWeight.bold,
    textShadow: "1px 1px 10px rgba(0, 0, 0, 0.3)",
    opacity: 0,
    animation: `${fadeInKeyframes} 1s ease-in forwards`,
    [breakPoints.up("xl")]: {
      fontSize: fontSize.xl,
    },
  }),
  infoContainer: ({ breakPoints }) => ({
    zIndex: 20,
    marginBottom: "35%",
    [breakPoints.up("xl")]: {
      marginBottom: "20%",
    },
  }),
  firstnameContainer: {
    display: "flex",
    justifyContent: "center",
  },
  careerContainer: ({ breakPoints, colors, typography: { fontWeight, fontSize } }) => ({
    fontFamily: "'Playfair Display', sans-serif",
    textShadow: "1px 1px 10px rgba(0, 0, 0, 0.3)",
    color: colors.white,
    fontSize: fontSize.xs,
    letterSpacing: "1px",
    fontWeight: fontWeight.bold,
    paddingTop: "20px",
    display: "flex",
    justifyContent: "flex-end",
    animation: `${fadeInKeyframes} 1s ease-in forwards`,
    [breakPoints.up("xl")]: {
      fontSize: fontSize.sm,
    },
  }),
});
