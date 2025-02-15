import { useMemo, useState } from "react";
import { Gallery } from "react-grid-gallery";
import { GalleryImage, LightBoxImage } from "./../../types/Image";
import Lightbox from "yet-another-react-lightbox";
import {
  Captions,
  Counter,
  Fullscreen,
  Thumbnails,
  Download,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type ImageGalleryProps = {
  images: GalleryImage[];
};
const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

  const handleClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const lightboxImages: LightBoxImage[] = useMemo(
    () =>
      images.map((image) => ({
        src: image.src,
        title: image.title,
        description: image.description,
      })),
    [images]
  );

  return (
    <>
      <Gallery
        images={images}
        onClick={(index) => handleClick(index)}
        enableImageSelection={false}
        rowHeight={250}
        margin={3}
      />
      <Lightbox
        open={selectedImageIndex > -1}
        close={() => setSelectedImageIndex(-1)}
        slides={lightboxImages}
        index={selectedImageIndex}
        plugins={[Captions, Download, Fullscreen, Counter, Thumbnails]}
        captions={{ showToggle: false, descriptionTextAlign: "center" }}
      />
    </>
  );
};

export default ImageGallery;
