import React, { useState } from 'react';
import '../../components/Modal/Modal.css';

const Login = ({ show, onClose }) => {
    if (!show) return null; // Render nothing if `show` is false

    return (
        <>
      
            <div className="modal-overlay">
                <div className="modal-content">
                    <button className="close-button" onClick={onClose}>
                        ×
                    </button>
                    <h2>Login</h2>
                    <form>
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Login</button>
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

export default Login;
