import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Login from '../../pages/Login/Login'; // Import LoginModal
import Register from '../../pages/Register/register'; // Import RegisterModal
import './Header.css';

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false); // State to manage hamburger menu

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <header className="header">
                <div className="logo">
                    <Link to="/">Sustainify</Link>
                </div>
                <nav className={`nav-links ${isNavOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={toggleNav}>Home</Link>
                    <ScrollLink to="features" smooth={true}duration={500}onClick={toggleNav}>
                        Features
                    </ScrollLink>
                    {/* <Link to="#feature" onClick={toggleNav}>Features</Link> */}
                    <Link to="/services" onClick={toggleNav}>Services</Link>
                    <Link to="/contact" onClick={toggleNav}>Contact</Link>
                </nav>
                <div className="action-buttons">
                    <button className="login-btn" onClick={() => setShowLogin(true)}>Login</button>
                    <button className="signup-btn" onClick={() => setShowRegister(true)}> Sign Up</button>
                    <button className="hamburger" onClick={toggleNav}>☰</button>
                </div>
            </header>

            {/* Render Modals */}
            {showLogin && (
                <Login
                    show={showLogin}
                    onClose={() => setShowLogin(false)}
                />
            )}
            {showRegister && (
                <Register
                    show={showRegister}
                    onClose={() => setShowRegister(false)}
                />
            )}
        </>
    );
};

export default Header;
