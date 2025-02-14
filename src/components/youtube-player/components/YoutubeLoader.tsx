import { spinKeyframes } from "../../../theme/keyframes";
import { createStyles } from "../../../theme/utils";

const YoutubeLoader = () => {
  return (
    <div css={loaderStyles.loaderContainer}>
      <div css={loaderStyles.spinner}></div>
    </div>
  );
};

const loaderStyles = createStyles({
  loaderContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  spinner: ({ colors }) => ({
    width: "40px",
    height: "40px",
    border: `4px solid ${colors.scrollThumb}`,
    borderTop: `4px solid ${colors.white}`,
    borderRadius: "50%",
    animation: `${spinKeyframes} 1s linear infinite`,
  })
});

export default YoutubeLoader;
