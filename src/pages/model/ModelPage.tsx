import { createStyles } from "../../theme/utils";
import YoutubePlayer from "../../components/youtube-player/YoutubePlayer";
import ImageGallery from "../../components/image-gallery/ImageGallery";
import { modelImages } from "../../gallery/Images";
import { useTypedTranslation } from "../../hooks/useTypedTranslation/useTypedTranslation";

const ModelPage = () => {
  const { t } = useTypedTranslation()
  return (
    <div css={modelPageStyles.container}>
      <div css={modelPageStyles.headerBar}>{t("modelPageName")}</div>
      <div css={modelPageStyles.content}>
        <div css={modelPageStyles.videosContainer}>
          <YoutubePlayer src={"https://www.youtube.com/embed/dlwrdQscU6M"} />
          <YoutubePlayer src={"https://www.youtube.com/embed/5eu_jRHHusg"} />
        </div>
        <div css={modelPageStyles.galleryContainer}>
          <ImageGallery images={modelImages}/>
        </div>
      </div>
    </div>
  );
};

export default ModelPage;

const modelPageStyles = createStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "0 5%",
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
    display: "grid",
    gridTemplateColumns: "auto 1fr 5fr",
    gridTemplateAreas: `"videosContainer . galleryContainer"`,
  },
  videosContainer: {
    gridArea: "videosContainer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "70vh",
  },
  galleryContainer: ({colors}) => ({
    gridArea: "galleryContainer",
    height: "70vh",
    overflowY: "auto",
    scrollbarWidth: "auto",
    scrollbarColor: `${colors.scrollThumb} ${colors.scrollTrack}`,
    backgroundColor: colors.darkBackground
  }),
});
