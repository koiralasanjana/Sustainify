import React, { useState } from 'react';
import axios from 'axios';  // Import axios
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook for navigation
import '../../components/Modal/Modal.css';

const Login = ({ show, onClose }) => {
    const navigate = useNavigate();  // Hook for navigation after successful login

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    if (!show) return null;  // Render nothing if `show` is false

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Ensure email and password are provided
        if (!email || !password) {
            setErrorMessage("Both email and password are required.");
            setLoading(false);
            return;
        }

        setErrorMessage(""); // Clear previous error messages

        const data = { email, password };

        try {
            // Sending POST request to the backend for login
            const response = await axios.post('http://localhost:8081/api/login', data);

            if (response.status === 200) {
                // On successful login, store JWT token in localStorage
                localStorage.setItem('token', response.data.token);

                // Navigate to the dashboard or home page
                navigate('/');
                onClose();  // Close the login modal
            } else {
                setErrorMessage(response.data.error || 'Invalid credentials.');
                setLoading(false);
            }
        } catch (error) {
            console.error('Error occurred during login:', error);
            setLoading(false);
            setErrorMessage('Unexpected error occurred. Please try again later.');
        }
    };

    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <button className="close-button" onClick={onClose}>×</button>
                    <h2>Login</h2>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button type="submit" className="action-btn" disabled={loading}>
                            {loading ? <div className="loading-spinner"></div> : 'Log In'}
                        </button>
                    </form>
                    <button className="guest-button" onClick={() => { navigate('/guest'); onClose(); }}>
                        Continue as Guest
                    </button>
                </div>
            </div>
        </>
    );
};

export default Login;
