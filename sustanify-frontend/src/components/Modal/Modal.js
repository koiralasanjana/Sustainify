import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, isSignup }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>×</button>
                <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
                <form>
                    {isSignup && (
                        <input type="text" placeholder="Name" required />
                    )}
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">
                        {isSignup ? 'Sign Up' : 'Login'}
                    </button>
                </form>
                <button
                    className="guest-button"
                    onClick={() => (window.location.href = '/guest')}
                >
                    Continue as Guest
                </button>
            </div>
        </div>
    );
};

export default Modal;
