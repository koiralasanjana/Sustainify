import React, { useState } from 'react';
import '../../components/Modal/Modal.css';

const Register = ({ show, onClose }) => {
    if (!show) return null; // Render nothing if `show` is false

    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <button className="close-button" onClick={onClose}>
                        ×
                    </button>
                    <h2>Sign Up</h2>
                    <form>
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit" className='signup-btn'>Sign Up</button>
                    </form>
                    <button
                        className="guest-button"
                        onClick={() => (window.location.href = '/guest')}
                    >
                        Continue as Guest
                    </button>
                </div>
            </div>
    
        </>
    );
};

export default Register;
