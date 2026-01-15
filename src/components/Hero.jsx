import React from 'react';
import ProfileCard from './ProfileCard';
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

                        <p className="description">
                            Passionate about building intelligent systems and crafting intuitive user experiences.
                            Let's solve complex problems together.
                        </p>

                        <a href="#contact" className="hire-btn font-display">GET IN TOUCH</a>
                    </div>

                    <div className="hero-visual">
                        <ProfileCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
