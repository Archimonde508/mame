import { createStyles } from "../../theme/utils";

const ActressPage = () => {
  
  return (
    <div css={actressPageStyles.videoContainer}>

    </div>
  );
};

export default ActressPage;

const actressPageStyles = createStyles({
  videoContainer: {
    width: "800px",
    height: "calc(800px * 9 / 16)",
    margin: "0 auto",
    position: "relative",
  }
});
