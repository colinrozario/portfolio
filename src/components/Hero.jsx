import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <h2 className="greeting font-display">HI! I'M COLIN</h2>
                        <h1 className="title font-display">
                            ASPIRING <br />
                            <span className="text-outline">AI/ML ENGINEER</span>
                        </h1>

                        <a href="#contact" className="hire-btn font-display">GET IN TOUCH</a>
                    </div>

                    <div className="hero-stats font-display">
                        <div className="stat-item">
                            <span className="stat-num text-accent">3+</span>
                            <span className="stat-label">Years Exp.</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-num text-accent">15+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-num text-accent">10K+</span>
                            <span className="stat-label">Hours Code</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
