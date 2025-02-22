import { useState } from "react";
import { createStyles } from "../../theme/utils";
import YoutubeLoader from "./components/YoutubeLoader";

type YoutubePlayerProps = {
  src: string;
};

const YoutubePlayer = ({ src }: YoutubePlayerProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div css={orientalStyles.videoContainer}>
      {!loaded && <YoutubeLoader />}
      <iframe
        css={orientalStyles.iframe}
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default YoutubePlayer;

const orientalStyles = createStyles({
  videoContainer: {
    width: "calc(33vh * 16 / 9)",
    height: "33vh",
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
