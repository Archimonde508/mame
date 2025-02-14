import { useState, useEffect } from "react";
import "./home.css";
import { createStyles } from "../../theme/utils";
import { keyframes } from "@emotion/react";
// import { InlineStyles } from "../../types/CssStyles";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/home2.jpg";
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <div css={loaded ? homeStyles.homeLoaded : homeStyles.home}>
      <div css={homeStyles.infoContainer}>
        <div css={homeStyles.nameContainer}>
          <div css={homeStyles.firstnameContainer}>
            <div>Małgorzata </div>
          </div>
          <div className="surname-container">Horyń-Olszewska </div>
        </div>
        <div css={homeStyles.careerContainer}>Aktorka / Modelka dojrzała</div>
      </div>
    </div>
  );
};

export default Home;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const homeStyles = createStyles({
  home: ({ breakPoints }) => ({
    position: "relative",
    backgroundColor: "black",
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
      backgroundImage: "url('')", // No image initially
      opacity: 0,
      transition: "opacity 1s ease-in-out",
    },
    backgroundPosition: "30% center",
  }),
  homeLoaded: ({ breakPoints }) => ({
    position: "relative",
    backgroundColor: "black",
    height: "100vh",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "10%",
    overflow: "hidden",
    "&::before": {
      backgroundImage: "url('/home3.jpg')",
      opacity: 1,
    },
    backgroundPosition: "30% center",
  }),
  nameContainer: ({ breakPoints }) => ({
    textAlign: "left",
    borderBottom: "2px solid white",
    paddingBottom: "0.5rem",
    fontFamily: "'Playfair Display SC', sans-serif",
    color: "white",
    fontSize: "2.3rem",
    letterSpacing: "3px",
    fontWeight: 600,
    textShadow: "1px 1px 10px rgba(0, 0, 0, 0.3)",
    opacity: 0,
    animation: `${fadeIn} 0.5s ease-in forwards`,
    [breakPoints.up("xl")]: {
      fontSize: "3rem",
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
  careerContainer: ({ breakPoints }) => ({
    fontFamily: "'Playfair Display', sans-serif",
    textShadow: "1px 1px 10px rgba(0, 0, 0, 0.3)",
    color: "white",
    fontSize: "1.25rem",
    letterSpacing: "1px",
    fontWeight: 600,
    paddingTop: "20px",
    display: "flex",
    justifyContent: "flex-end",
    [breakPoints.up("xl")]: {
      fontSize: "1.5rem",
    },
  }),
});

// home:

// [breakPoints.up("xl")]: {
//   backgroundPosition: "center 10%",
// },
// [breakPoints.up("2xl")]: {
//   backgroundPosition: "center 25%",
// },
// [breakPoints.up("3xl")]: {
//   backgroundPosition: "center 50%",
// },
