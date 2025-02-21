import { useState } from "react";
import { createStyles } from "../../theme/utils";
import YoutubeLoader from "./components/YoutubeLoader";

type YoutubePlayerProps = {
  src: string;
};

const YoutubePlayer = ({ src }: YoutubePlayerProps) => {
  const [loading, setLoading] = useState(true)
   
  return (
    <div css={charismaStyles.videoContainer}>
      {loading && <YoutubeLoader />}
      <iframe
        css={charismaStyles.iframe}
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setLoading(true)}
      />
    </div>
  );
};

export default YoutubePlayer;

const charismaStyles = createStyles({
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
