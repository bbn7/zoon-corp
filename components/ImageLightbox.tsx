import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ImageLightboxProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  imageSrc,
  imageAlt,
  onClose
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div 
      className="image-lightbox-overlay"
      onClick={handleOverlayClick}
    >
      <div className="image-lightbox-container">
        <button 
          className="image-lightbox-close"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="image-lightbox-content">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="image-lightbox-image"
          />
          <div className="image-lightbox-info">
            <h3 className="image-lightbox-title">{imageAlt}</h3>
            <p className="image-lightbox-description">
              Click outside or press ESC to close
            </p>
          </div>
        </div>
        
        <div className="image-lightbox-navigation">
          <button 
            className="image-lightbox-nav image-lightbox-prev"
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="image-lightbox-nav image-lightbox-next"
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ImageLightbox;
