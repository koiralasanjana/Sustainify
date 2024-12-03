import React, { useState } from "react";
import "./Home.css";

const OrganizationHome = () => {
    const [isSignup, setIsSignup] = useState(null); // State to toggle between signup and login
    const [currentStep, setCurrentStep] = useState(0); // Track the current step in the signup process

    const handleToggle = () => {
        setIsSignup(!isSignup); // Toggle between signup and login forms
    };

    const handleNextStep = () => {
        if (currentStep < 2) setCurrentStep(currentStep + 1); // Move to next step
    };

    const handlePreviousStep = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1); // Go back to previous step
    };

    return (
        <div className="organization-home">
            <div className="card-container">
                <div className="info-section">
                    {isSignup ? (
                        <>
                            <h2>Signup for a cause</h2>
                            <p>Organizations like you are needed for the society</p>
                            <button className="toggle-button" onClick={handleToggle}>
                                Already part of developing the world? Login
                            </button>
                        </>
                    ) : (
                        <>
                            <h2>Already part of developing the world?</h2>
                            <button className="toggle-button" onClick={handleToggle}>
                                Signup for a cause
                            </button>
                        </>
                    )}
                </div>
                <div className="form-section">
                    {isSignup ? (
                        <div>
                            {/* Step Indicator */}
                            {/* Step Indicator */}
                            <div className="step-indicator">
                                {[0, 1, 2].map((step, index) => (
                                    <React.Fragment key={index}>
                                        <div
                                            className={`step ${currentStep >= step ? "completed" : ""}`}
                                        >
                                            <span>{index + 1}</span>
                                        </div>
                                        {index < 2 && <div className={`dot ${currentStep > step ? "completed" : ""}`}></div>} {/* Dot between steps */}
                                    </React.Fragment>
                                ))}
                            </div>
                            {/* Step 1 */}
                            {currentStep === 0 && (
                                <form className="signup-form">
                                    <h3>Step 1: Organization Details</h3>
                                    <input type="text" placeholder="Organization Name" required />
                                    <input type="text" placeholder="Location" required />
                                    <input type="email" placeholder="Organization Email" required />
                                    <input type="date" placeholder="Established On" required />
                                    <select required>
                                        <option value="">Is your organization for profit?</option>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                    <input type="text" placeholder="Contact Number" required />
                                    <input type="text" placeholder="Registered Charity Number (Optional)" />
                                    <div className="form-buttons">
                                        <button type="button" onClick={handleNextStep}>
                                            Continue
                                        </button>
                                    </div>
                                </form>
                            )}

                            {/* Step 2 */}
                            {currentStep === 1 && (
                                <form className="signup-form">
                                    <h3>Step 2: Primary Contact</h3>
                                    <h4>Primary Contact Person</h4>
                                    <input type="text" placeholder="Position" required />
                                    <input type="text" placeholder="Name" required />
                                    <input type="text" placeholder="Phone Number" required />
                                    <input type="email" placeholder="Email" required />

                                    {/* Alternate Contact */}
                                    <h4>Alternate Contact Person (Optional)</h4>
                                    <input type="text" placeholder="Position" />
                                    <input type="text" placeholder="Name" />
                                    <input type="text" placeholder="Phone Number" />
                                    <input type="email" placeholder="Email" />

                                    <div className="form-buttons">
                                        <button type="button" onClick={handlePreviousStep}>
                                            Back
                                        </button>
                                        <button type="button" onClick={handleNextStep}>
                                            Continue
                                        </button>
                                    </div>
                                </form>
                            )}

                            {/* Step 3 */}
                            {currentStep === 2 && (
                                <form className="signup-form">
                                    <h3>Step 3: Account Security</h3>
                                    <h4>Account Security</h4>
                                    <input type="password" placeholder="Password" required />
                                    <input type="password" placeholder="Reconfirm Password" required />
                                    <div className="form-buttons">
                                        <button type="button" onClick={handlePreviousStep}>
                                            Back
                                        </button>
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            )}
                        </div>
                    ) : (
                        <form className="login-form">
                            <h3>Login Form</h3>
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <button type="submit">Login</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrganizationHome;
