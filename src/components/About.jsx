import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-header">
                        <h2 className="font-display">THIS IS <span className="text-outline">ME</span></h2>
                    </div>
                    <div className="about-content">
                        <h3 className="about-quote font-body">
                            I build data-driven systems and make sure they work outside the notebook.
                        </h3>
                        <p className="about-text font-body">
                            Hey there, I'm Colin! Nice to meet you 👋 <br />
                            I build systems that learn from data, break in unexpected ways, and get fixed before shipping.
                            I enjoy turning messy datasets into scalable, high-performance products people actually like using.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
