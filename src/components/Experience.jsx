import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Software Engineer-INTERN',
            company: 'ivPRO Technologies, Coimbatore',
            period: 'December 2025 - Present',
            description: 'Built real-time AI surveillance systems for CCTV/NVR pipelines using YOLO and RTSP.\nFocused on improving detection accuracy, reducing false alerts, and deploying scalable inference APIs.'
        },
        {
            id: 2,
            role: 'AI/ML- INTERN',
            company: 'SolutionChamps Technologies, Coimbatore',
            period: 'April 2025 - June 2025',
            description: "Worked end-to-end on computer vision and NLP systems for wildlife, fire, and threat detection.\nBuilt robust data pipelines, fine-tuned models, and deployed real-time AI solutions."
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.3
            }
        })
    };

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <h2 className="section-title font-display">Journey <span className="text-outline">So Far</span></h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="timeline-item"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={cardVariants}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content holographic-card">
                                <span className="exp-date">{exp.period}</span>
                                <h3 className="exp-role font-display">{exp.role}</h3>
                                <h4 className="exp-company">{exp.company}</h4>
                                <p className="exp-desc">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
