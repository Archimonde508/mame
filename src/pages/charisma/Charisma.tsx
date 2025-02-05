import React, { useState } from 'react';
import './charisma.css';
import galleryData from '../../assets/data/orient.json';
import { GalleryItem } from '../../types/GalleryItem';
import ImageModal from './ImageModal';


function Charisma() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<GalleryItem | null>(null);

  const images: GalleryItem[] = galleryData;

  const openModal = (image: GalleryItem) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  const handleNext = (event?: React.MouseEvent) => {
    event?.stopPropagation();
    if (currentImage) {
      const currentIndex = images.findIndex(img => img === currentImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[nextIndex]);
    }
  };

  const handlePrevious = (event?: React.MouseEvent) => {
    event?.stopPropagation();
    if (currentImage) {
      const currentIndex = images.findIndex(img => img === currentImage);
      const previousIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setCurrentImage(images[previousIndex]);
    }
  }

  return (
    <div className='charisma-container'>
      <div className='charisma-header-bar'>
        Uroda Orientalna
      </div>
      <div className='charisma-content'>
        <div className='charisma-videos-container'>
          <div className="charisma-video-container">
            <iframe className="charisma-iframe"
              src="https://www.youtube.com/embed/PHYqr8vvfe0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="charisma-video-container">
            <iframe className="charisma-iframe"
              src="https://www.youtube.com/embed/PHYqr8vvfe0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className='charisma-right-container'>
          <div className='charisma-gallery-container'>
            <div className="gallery">
              {images.map((image, index) => {
                const fileName = `/orient/${image.fileName}`
                return (
                  <div className="gallery-item" key={index}>
                    <img
                      key={index}
                      src={fileName}
                      alt={`Gallery ${index + 1}`}
                      className="gallery-image"
                      onClick={() => openModal(image)}
                    />
                    <div className="gallery-caption">{image.description}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {isOpen && currentImage && (
        <ImageModal
          closeModal={closeModal}
          currentImage={currentImage}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          isOpen={isOpen} />
      )}
    </div>
  );
}

export default Charisma;
