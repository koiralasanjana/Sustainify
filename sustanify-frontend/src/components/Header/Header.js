import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            {/* Logo */}
            <div className="logo">
                <Link to="/">Sustanify</Link>
            </div>

            {/* Navigation Menu */}
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/features">Features</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            {/* Action Buttons */}
            <div className="action-buttons">
                <Link to="/login">
                    <button className="login-btn">Login</button>
                </Link>
                <Link to="/register">
                    <button className="signup-btn">Sign Up</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
