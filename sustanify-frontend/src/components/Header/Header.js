import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Login from '../../pages/Login/Login'; // Import LoginModal
import Register from '../../pages/Register/register'; // Import RegisterModal
import './Header.css';

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false); // State to manage hamburger menu

    const navigate = useNavigate();
    const location = useLocation();

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleScrollToFeatures = (e) => {
        e.preventDefault();
        if(location.pathname === '/'){
            scroller.scrollTo('features',{
                smooth: true,
                duration: 500,
            });
        }else{
            navigate('/');
            setTimeout(()=>{
                scroller.scrollTo('features',{
                    smooth: true,
                    duration: 500,
                });
            }, 100)
        }
        toggleNav();
    }

    return (
        <>
            <header className="header">
                <div className="logo">
                    <Link to="/">Sustainify</Link>
                </div>
                <nav className={`nav-links ${isNavOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={toggleNav}>Home</Link>
                    {/* <ScrollLink to="features" smooth={true}duration={500}onClick={toggleNav}>
                        Features
                    </ScrollLink> */}
                    <Link to="/" onClick={handleScrollToFeatures}>Features</Link>
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
