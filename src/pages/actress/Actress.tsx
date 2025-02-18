import { createStyles } from "../../theme/utils";

const Actress = () => {
  
  return (
    <div css={actressStyles.videoContainer}>

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
  }
});
