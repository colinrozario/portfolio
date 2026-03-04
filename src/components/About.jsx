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
                            Building Today, Upgrading Tomorrow!
                        </h3>
                        <p className="about-text font-body">
                              

                            I learn best by building — experimenting with ideas, breaking systems, and understanding how things work under the hood. Over time, that curiosity has shaped how I approach problems: with structured thinking, clean execution, and a focus on efficiency and scalability.  

                            Most of my growth comes from self-driven projects, hackathons, and pushing beyond the classroom. I believe progress compounds, and I treat every project as another iteration toward becoming a stronger engineer — focused on creating systems that deliver real impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
