import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Make an Impact in Your Community Today!</h1>
                    <p>Report environmental issues, track progress, and contribute to sustainability efforts.</p>
                    <button className="cta-button">Get Started</button>
                </div>
                <div className="hero-map">
                    <img src="/assets/map-placeholder.png" alt="Map" />
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2>Our Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <img src="/assets/report-issue.png" alt="Feature 1" />
                        <h3>Report Issues</h3>
                        <p>Easily report environmental concerns in your community.</p>
                    </div>
                    <div className="feature-card">
                        <img src="/assets/track-progress.png" alt="Feature 2" />
                        <h3>Track Progress</h3>
                        <p>Monitor the status and updates of reported issues.</p>
                    </div>
                    <div className="feature-card">
                        <img src="/assets/earn-rewards.png" alt="Feature 3" />
                        <h3>Earn Rewards</h3>
                        <p>Get recognized and rewarded for your contributions.</p>
                    </div>
                    <div className="feature-card">
                        <img src="/assets/interactive-map.png" alt="Feature 4" />
                        <h3>Interactive Map</h3>
                        <p>Explore reported issues in your area with an intuitive map.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
