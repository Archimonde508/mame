import { aboutImage } from "../../gallery/Images";
import { useTypedTranslation } from "../../hooks/useTypedTranslation/useTypedTranslation";
import { createStyles } from "../../theme/utils";
import Image from "../../components/image/Image"

const About = () => {
  const { t } = useTypedTranslation()

  return (
    <div css={aboutStyles.container}>
      <div css={aboutStyles.headerBar}>{t("aboutPageName")}</div>
      <div css={aboutStyles.content}>
        <Image src={aboutImage.src} alt="About Me" styles={aboutStyles.image} />
        <div css={aboutStyles.textContainer}>
          {t("aboutText")}
          <p>
            {t("contactText")}
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
    width: "40vh",
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
