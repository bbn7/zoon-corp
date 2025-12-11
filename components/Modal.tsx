
import { FC, useEffect } from 'react';
import styles from '../styles/Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, title = "Contact Us", children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={`${styles.modalContainer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>{title}</h2>
            <button 
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M18 6L6 18M6 6L18 18" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          
          <div className={styles.modalContent}>
            {children || (
              <>
                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className={styles.contactDetails}>
                      <h4>Email</h4>
                      <a href="mailto:info@zooncpl.com">info@zooncpl.com</a>
                    </div>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92V19.92C22 20.52 21.39 21 20.83 21C9.17 21 0 11.83 0 0.17C0 -0.39 0.48 -1 1.08 -1H4.08C4.68 -1 5.08 -0.52 5.08 0.08C5.08 3.73 7.35 7.04 10.83 7.04C11.35 7.04 11.83 7.4 11.83 7.92C11.83 8.44 11.47 8.92 10.95 8.92C6.48 8.92 2.92 5.36 2.92 0.89C2.92 -1.62 5.48 -4 9.08 -4C12.68 -4 16.08 -0.6 16.08 3C16.08 3.52 16.44 4 16.96 4H19.96C20.52 4 21 4.48 21 5.04V8.04C21 8.6 20.52 9.08 19.96 9.08C19.44 9.08 18.96 8.72 18.96 8.2C18.96 7.68 19.32 7.2 19.84 7.2C24.32 7.2 27.92 10.8 27.92 16.24C27.92 18.84 25.36 21 22.76 21C22.18 21 21.7 20.52 21.7 19.94C21.7 19.36 22.18 18.88 22.76 18.88Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className={styles.contactDetails}>
                      <h4>Phone</h4>
                      <a href="tel:+911800999999">+91 1800 999999</a>
                    </div>
                  </div>
                  
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.03 7.03 1 12 1S21 5.03 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className={styles.contactDetails}>
                      <h4>Address</h4>
                      <p>Srinagar, Kashmir, India 190017</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.ctaSection}>
                  <h3>Get In Touch</h3>
                  <p>Ready to start your project? Contact us today for a consultation.</p>
                  <button className={styles.primaryButton}>
                    Send Message
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
