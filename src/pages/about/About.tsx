import { InlineStyles } from "../../types/CssStyles";

const About = () => {
  return (
    <div style={aboutStyles.container}>
      <div style={aboutStyles.headerBar}>O mnie</div>
      <div style={aboutStyles.content}>
        <div>
          <img src="/about.jpg" alt="About me" style={aboutStyles.image} />
        </div>
        <div style={aboutStyles.textContainer}>
          Zanim zostałam fotomodelką, spróbowałem swoich sił w wodzie. 10 lat
          pływania zawodowego, praca jako ratownik wodny oraz instruktor
          pływania pozwoliły mi ukształtować charakter. Przez te lata
          zaszczepiła się we mnie sumienność, wytrwałość i punktualność co
          pozwala mi profesjonalnie podchodzić do każdej sesji zdjęciowej,
          pokazu mody, gry w teledyskach, reklamach czy też serialach oraz
          filmach. Fotomodeling łączę ze służbą w Państwowej Straży Pożarnej.
          „Drodzy Państwo, nazywam się Szymon Chrobok i z przyjemnością wezmę
          udział w Waszej reklamie.” Zapraszam do współpracy.
          <p>
            <strong>Kontakt email: malgorzata.horyn-olszewska@wp.pl</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

const aboutStyles: InlineStyles = {
  container: {
    marginTop: '90px',
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "0 10%",
  },
  headerBar: {
    borderBottom: "2px solid white",
    paddingBottom: "0.5rem",
    letterSpacing: "3px",
    fontSize: "35px",
    textShadow: "1px 1px 10px rgba(0, 0, 0, 0.99)",
    fontWeight: 400,
    color: "rgba(255, 255, 255, 0.95)",
    fontFamily: "'Times New Roman', Times, serif",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    gap: "15%",
  },
  image: {
    width: "40vh",
    height: "auto",
  },
  textContainer: {
    paddingTop: "30px",
    letterSpacing: "1.4px",
    textAlign: "justify",
    fontSize: "20px",
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  },
};

