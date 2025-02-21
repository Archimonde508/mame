import { useState } from "react";
import { createStyles, Styles } from "../../theme/utils";
import { spinKeyframes } from "../../theme/keyframes";

type ImageProps = {
  styles: Styles;
  src: string;
  alt: string;
};

const Image = ({ alt, src, styles }: ImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div css={[styles, imageStyles.loaderContainer]}>
          <div css={imageStyles.spinner}></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        css={[styles, !loaded && { display: "none" }]}
      />
    </>
  );
};

export default Image;

const imageStyles = createStyles({
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  spinner: ({ colors }) => ({
    width: "40px",
    height: "40px",
    border: `4px solid ${colors.scrollThumb}`,
    borderTop: `4px solid ${colors.white}`,
    borderRadius: "50%",
    animation: `${spinKeyframes} 1s linear infinite`,
  }),
});
