import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Machine Learning Intern',
            company: 'Tech Innovations Inc.',
            period: 'Jan 2024 - Present',
            description: 'Developing computer vision models for quality control. collaborating with senior engineers to optimize model inference time.'
        },
        {
            id: 2,
            role: 'Data Science Student',
            company: 'University Project',
            period: 'Sept 2023 - Dec 2023',
            description: 'Led a team of 4 to analyze large datasets using Pandas and Scikit-Learn. Built a predictive model with 92% accuracy.'
        },
        {
            id: 3,
            role: 'Web Development Freelancer',
            company: 'Self-Employed',
            period: '2022 - 2023',
            description: 'Built responsive websites for local businesses using React and modern CSS. Learned the fundamentals of software engineering.'
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
