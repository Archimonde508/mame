import { createStyles } from "../../theme/utils";

type YoutubePlayerProps = {
  src: string;
};
const YoutubePlayer = ({ src }: YoutubePlayerProps) => {
  return (
    <div css={charismaStyles.videoContainer}>
      <iframe
        css={charismaStyles.iframe}
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubePlayer;

const charismaStyles = createStyles({
  videoContainer: {
    width: "520px",
    height: "calc(520px * 9 / 16)",
    margin: "0 auto",
    position: "relative",
  },
  iframe: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    border: "none",
  },
});
