import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <motion.div
                            className="availability-badge font-tech"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <span className="pulse-dot"></span>
                            Looking for opportunities
                        </motion.div>
                        <h2 className="greeting font-display">HI! I'M COLIN ROZARIO</h2>
                        <h1 className="title font-display">
                            ASPIRING <br />
                            <span className="text-outline">AI/ML ENGINEER</span>
                        </h1>

                      <p className="description">
  Hey there, I’m <strong>Colin Rozario</strong>, a third-year CSE student at XIM University, Bhubaneswar, passionate about AI/ML and Data Science.
  I love building intelligent, data-driven systems that solve real-world problems.
  Currently seeking internships or part-time roles where I can learn fast and make real impact. 
</p>

                        <a href="#contact" className="hire-btn font-tech">GET IN TOUCH</a>
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
