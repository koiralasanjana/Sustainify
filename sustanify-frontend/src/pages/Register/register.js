import React, { useState } from 'react';
import '../../components/Modal/Modal.css';
import '../Register/register.css';
import { register } from '../../services/reporter-service';
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
    
        // Passwords do not match check
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match!");
            setConfirmPassword("");
            setLoading(false);
            return;
        }
    
        // Ensure all fields are filled
        if (!name || !email || !password) {
            setErrorMessage("All fields are required.");
            setLoading(false);
            return;
        }
    
        setErrorMessage(""); // Clear previous error messages
    
        const data = { name, email, password };
    
        console.log("Sending data:", data);
    
        try {
            const resp = await register(data);
            setLoading(false);
    
            console.log('Response from server:', resp);
    
            // Check if response has a success message or data
            if (resp && resp.status === 200) {
                alert('User registered successfully!');
                navigate('/');
                // Reset form fields after successful registration
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            } else {
                // Handle errors if the response is not successful
                setErrorMessage(resp?.data?.error || 'An error occurred.');
            }
    
        } catch (error) {
            setLoading(false);
            console.error('Error occurred:', error);
    
            // Check for the error response
            setErrorMessage(error?.response?.data?.error || 'Unable to register user.');
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
                        <input type="text" placeholder="Name" required value={name} onChange={(e)=>setName(e.target.value)}/>
                        <input type="email" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <input type="password" placeholder="Confirm Password" required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                        {errorMessage && (
                            <p className='error-message'>{errorMessage}</p>
                        )}
                        <button type="submit" className="action-btn" disabled={loading}>
                            {loading ? 'Registering...' : 'Sign Up'}
                        </button>
                    </form>
                    <button
                        className="guest-button"
                        onClick={() => navigate('/guest')}
                    >
                        Continue as Guest
                    </button>
                </div>
            </div>
    
        </>
    );
};

export default Register;
