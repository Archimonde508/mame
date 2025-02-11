import { useState, useEffect } from "react";
import "./home.css";
// import { InlineStyles } from "../../types/CssStyles";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/home2.jpg";
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <div className={`home ${loaded ? "loaded" : ""}`}>
      <div className="info-container">
        <div className="name-container">
          <div className="firstname-container">
            <div>Małgorzata </div>
          </div>
          <div className="surname-container">Horyń-Olszewska </div>
        </div>
        <div className="career-container">Aktorka / Modelka dojrzała</div>
      </div>
    </div>
  );
};

export default Home;

// const styles: InlineStyles = {
//   loadingScreen: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#000",
//     color: "#fff",
//     fontSize: "1.5rem",
//     fontFamily: '"Playfair Display SC", serif',
//   },
// }
