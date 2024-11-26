import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';  // Import Modal
import './Header.css';

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const openModal = (signup) => {
        setIsSignup(signup);
        setShowModal(true);
    };

    return (
        <>
            <header className="header">
                <div className="logo">
                    <Link to="/">Sustainify</Link>
                </div>
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/features">Features</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <div className="action-buttons">
                    <button className="login-btn" onClick={() => openModal(false)}>Login</button>
                    <button className="signup-btn" onClick={() => openModal(true)}>Sign Up</button>
                </div>
            </header>

            {/* Modal Component */}
            <Modal show={showModal} onClose={() => setShowModal(false)} isSignup={isSignup} />
        </>
    );
};

export default Header;
