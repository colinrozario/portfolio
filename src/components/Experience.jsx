import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Software Engineer-INTERN',
            company: 'ivPRO Technologies,Coimbatore',
            period: 'December 2025 - Present',
            description: 'Developing computer vision models for quality control. collaborating with senior engineers to optimize model inference time.'
        },
        {
            id: 2,
            role: 'AI/ML- INTERN',
            company: 'SolutionChamps Technologies,Coimbatore',
            period: 'April 2025 - June 2025',
            description: 'Led a team of 4 to analyze large datasets using Pandas and Scikit-Learn. Built a predictive model with 92% accuracy.'
        }
    ];

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <h2 className="section-title">Journey So Far</h2>

                <div className="timeline">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="exp-date">{exp.period}</span>
                                <h3 className="exp-role">{exp.role}</h3>
                                <h4 className="exp-company">{exp.company}</h4>
                                <p className="exp-desc">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
