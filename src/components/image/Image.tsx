import { useState } from "react";
import { Styles } from "../../theme/utils";

type ImageProps = {
    styles: Styles,
    src: string,
    alt: string
}
const Image = ({ alt, src, styles }: ImageProps) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <img src={src} alt={alt} css={styles} />
    )
}

export default Image;