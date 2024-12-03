import React, { useState } from 'react';
import '../../components/Modal/Modal.css';
import '../Register/register.css';
import axios from 'axios';  // Import axios
import { useNavigate } from 'react-router-dom';

const Register = ({ show, onClose }) => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    if (!show) return null; // Render nothing if `show` is false

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log('Submitting registration form...');  // Debug log

        // Passwords do not match check
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match!");
            setConfirmPassword("");
            setLoading(false);  // Make sure loading is set to false here
            return;
        }

        // Ensure all fields are filled
        if (!name || !email || !password) {
            setErrorMessage("All fields are required.");
            setLoading(false);  // Make sure loading is set to false here
            return;
        }

        setErrorMessage(""); // Clear previous error messages

        const data = { name, email, password };
        console.log("Sending data:", data);  // Debug log

        try {
            // Sending POST request to the backend
            const response = await axios.post('http://localhost:8081/api/register', data);

            console.log('Response from server:', response.data); // Log the response from server

            // Handle successful response
            if (response.status === 200) {
                // Reset form fields after successful registration
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setLoading(false);  // Stop loading animation

                // Navigate to home page or any other page
                navigate('/');// Redirect after successful registration
                onClose();  
            } else {
                // If response status is not 200, display the error message
                setErrorMessage(response.data.error || 'An error occurred.');
                setLoading(false);  // Make sure loading is set to false in case of error
            }
        } catch (error) {
            console.error('Error occurred during registration:', error);
            setLoading(false);  // Make sure loading is set to false if an error occurs

            // Handle error responses (e.g., if error.response is available)
            if (error.response) {
                setErrorMessage(error.response.data.error || 'Unable to register user.');
            } else {
                setErrorMessage('Unexpected error occurred. Please try again later.');
            }
        }
    };

    return (
        <>
            <div className="modal-overlay">
                <div className="modal-content">
                    <button className="close-button" onClick={onClose}>
                        ×
                    </button>
                    <h2>Sign Up</h2>
                    <form className='register-form' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errorMessage && (
                            <p className='error-message'>{errorMessage}</p>
                        )}
                        <button type="submit" className="action-btn" disabled={loading}>
                            {loading ? (
                                <div className="loading-spinner"></div> // Loading spinner
                            ) : (
                                'Sign Up'
                            )}
                        </button>
                    </form>
                    <button
                        className="guest-button"
                        onClick={() => {
                            navigate('/guest'); // Navigate to guest route
                            onClose(); // Call onClose to close the modal
                        }}
                    >
                        Continue as Guest
                    </button>
                </div>
            </div>
        </>
    );
};

export default Register;
