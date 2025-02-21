import { createStyles } from "../../theme/utils";
import YoutubePlayer from "../../components/youtube-player/YoutubePlayer";
import ImageGallery from "../../components/image-gallery/ImageGallery";
import { arabianImages } from "../../gallery/Images";
import { useTypedTranslation } from "../../hooks/useTypedTranslation/useTypedTranslation";

const Arabian = () => {
  const { t } = useTypedTranslation()
  return (
    <div css={arabianStyles.container}>
      <div css={arabianStyles.headerBar}>{t("orientPageName")}</div>
      <div css={arabianStyles.content}>
        <div css={arabianStyles.videosContainer}>
          <YoutubePlayer src={"https://www.youtube.com/embed/qon4GfrfwFM"} />
          <YoutubePlayer src={"https://www.youtube.com/embed/F0sqfPkCcyM"} />
        </div>
        <div css={arabianStyles.galleryContainer}>
          <ImageGallery images={arabianImages}/>
        </div>
      </div>
    </div>
  );
};

export default Arabian;

const arabianStyles = createStyles({
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
