import { aboutImage } from "../../gallery/Images";
import { createStyles } from "../../theme/utils";

const About = () => {
  return (
    <div css={aboutStyles.container}>
      <div css={aboutStyles.headerBar}>O mnie</div>
      <div css={aboutStyles.content}>
        <img src={aboutImage.src} alt="About me" css={aboutStyles.image} />
        {/* <Image src={aboutImage.src} alt="About Me" styles={aboutStyles.image} /> */}
        <div css={aboutStyles.textContainer}>
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

const aboutStyles = createStyles({
  container: {
    marginTop: "90px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "0 10%",
  },
  headerBar: ({ colors, typography }) => ({
    borderBottom: `2px solid ${colors.white}`,
    paddingBottom: "0.5rem",
    letterSpacing: "3px",
    fontSize: typography.fontSize.lg,
    textShadow: `1px 1px 10px ${colors.black}`,
    fontWeight: typography.fontWeight.normal,
    color: colors.white,
    fontFamily: "'Times New Roman', Times, serif",
  }),
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "5%",
    width: "100%",
  },
  image: ({ breakPoints }) => ({
    flex: "0 0 35%",
    maxWidth: "35%",
    height: "auto",
    [breakPoints.up("2xl")]: {
      maxWidth: "30%",
    },
  }),
  textContainer: ({ typography }) => ({
    flex: "0 0 50%",
    maxWidth: "50%",
    paddingTop: "30px",
    letterSpacing: "1.4px",
    textAlign: "justify",
    fontSize: typography.fontSize.xs,
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  }),
});
