import { useEffect } from "react";
import { GalleryItem } from "../../types/GalleryItem";
import './charisma.css'

interface ImageModalProps {
    currentImage: GalleryItem | null;
    isOpen: boolean;
    closeModal: () => void;
    handleNext: (event?: React.MouseEvent) => void;
    handlePrevious: (event?: React.MouseEvent) => void;
}

const ImageModal = ({ currentImage, isOpen, closeModal, handleNext, handlePrevious }: ImageModalProps) => {
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (isOpen) {
                if (event.key === 'Escape') {
                    closeModal();
                } else if (event.key === 'ArrowRight') {
                    handleNext();
                } else if (event.key === 'ArrowLeft') {
                    handlePrevious();
                }
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [isOpen, currentImage]);

    const handlePictureClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    }

    return (
        <div className="image-modal" onClick={closeModal}>
            <span className="close" onClick={closeModal}>
                &times;
            </span>
            <span className="arrow left-arrow" onClick={handlePrevious}>
                &#10094;
            </span>
            <img onClick={handlePictureClick} className="modal-content" src={`/orient/${currentImage?.fileName}`} alt="Enlarged" />
            <span className="arrow right-arrow" onClick={handleNext}>
                &#10095;
            </span>
        </div>
    );
}

export default ImageModal;

