import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-header">
                        <h2 className="font-display">this is me :)</h2>
                    </div>
                    <div className="about-content">
                        <h3 className="about-quote font-body">
                            I believe in a data-driven approach, ensuring that every model I build is tailored to solve real-world problems.
                        </h3>
                        <p className="about-text font-body">
                            Hi! I'm Colin. A creative Aspiring AI/ML Engineer with a passion for building intelligent systems.
                            I specialize in creating seamless and intuitive user experiences powered by data.
                            My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
