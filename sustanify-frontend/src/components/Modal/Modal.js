import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, isSignup }) => {
    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>×</button>
                {isSignup ? <SignupForm /> : <LoginForm />}
                <button className="guest-button" onClick={() => {
                    window.location.href = '/guest';
                }}>
                    Continue as Guest
                </button>
            </div>
        </div>
    );
};

const LoginForm = () => (
    <div>
        <h2>Login</h2>
        <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    </div>
);

const SignupForm = () => (
    <div>
        <h2>Sign Up</h2>
        <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
        </form>
    </div>
);

export default Modal;
