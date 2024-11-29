import React, { useState } from 'react';
import '../../components/Modal/Modal.css';
import '../Register/register.css'
import { useNavigate } from 'react-router-dom';

const Register = ({ show, onClose }) => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    if (!show) return null; // Render nothing if `show` is false

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            setErrorMessage("Passwords do not match!");
            setConfirmPassword("");
            return;
        }

        setErrorMessage("");

        try{
            const response = await fetch('http://localhost:8081/api/register',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                }),
            });

            const data = await response.json();
            if (response.ok){
                alert('User registered successfully!');
                navigate('/');
            } else {
                setErrorMessage(data.error || 'An error occurred.');
            }

        } catch (error){
            setErrorMessage('Unable to connect to the server.');
        }
    }

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
                        <button type="submit" className='action-btn'>Sign Up</button>
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
