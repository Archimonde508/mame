import Flag from "react-world-flags";
import { useTypedTranslation } from "../../hooks/useTypedTranslation/useTypedTranslation";
import { createStyles } from "../../theme/utils";

const LanguageSelector = () => {
  const { i18n } = useTypedTranslation();

  const onLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };
  return (
    <div css={languageSelectorStyles.container}>
      <div
        css={languageSelectorStyles.languageOption}
        onClick={() => onLanguageChange("pl")}
      >
        <Flag
          code="PL"
          style={{ width: "20px", height: "15px", marginRight: "8px" }}
        />
        <span>PL</span>
      </div>
      <div
        css={languageSelectorStyles.languageOption}
        onClick={() => onLanguageChange("en")}
      >
        <Flag
          code="GB"
          style={{ width: "20px", height: "15px", marginRight: "8px" }}
        />
        <span>ENG</span>
      </div>
    </div>
  );
};

export default LanguageSelector;

const languageSelectorStyles = createStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    gap: "8px",
  },
  languageOption: ({ colors }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    padding: "0 10px 0 10px",
    "&:hover": {
      backgroundColor: colors.linkHover,
    },
  }),
});
