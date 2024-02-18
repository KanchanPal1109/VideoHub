import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import '../css/Modal.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close-button" onClick={onClose}><i className="fas fa-times"></i></button> {/* Use close icon */}
        <div className="modal-content">
          {children}
          <img src='/Empty State Animation.gif' alt="Empty State Animation"  className='empty-animation'/>
          <Link to="/login" className="modal-login-link">Go to Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
