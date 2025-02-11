import { createStyles } from "../../theme/utils";

const Actress = () => {
  return (
    <div css={actressStyles.videoContainer}>
      <iframe
        css={actressStyles.iframe}
        src="https://www.youtube.com/embed/5t7to00JerI"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Actress;

const actressStyles = createStyles({
  videoContainer: {
    width: "800px",
    height: "calc(800px * 9 / 16)",
    margin: "0 auto",
    position: "relative",
  },
  iframe: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
});
