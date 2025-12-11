import { FC } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const modalStyles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '90%',
  },
  closeBtn: {
    backgroundColor: '#ff6b6b',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    float: 'right',
  },
};

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <button style={modalStyles.closeBtn} onClick={onClose}>X</button>
        <h2>Contact Us</h2>
        <p>
          Email: <a href="mailto:info@zooncpl.com">info@zooncpl.com</a>
        </p>
        <p>
          Phone: +91 1800 999999
        </p>
        <p>
          Address: Srinagar, Kashmir, India 190017
        </p>
      </div>
    </div>
  );
};

export default Modal;