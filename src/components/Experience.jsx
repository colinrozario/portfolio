import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Software Engineer - INTERN',
            company: 'ivPRO Technologies, Coimbatore, TN, India',
            period: 'December 2025 - February 2026',
            description: [
                'Engineered real-time AI surveillance pipelines using YOLO and RTSP, significantly enhancing threat detection speed.',
                'Boosted detection accuracy while minimizing false positive alerts in complex NVR systems.',
                'Architected and deployed highly scalable inference APIs to support continuous processing.'
            ]
        },
        {
            id: 2,
            role: 'AI/ML - INTERN',
            company: 'SolutionChamps Technologies, Coimbatore, TN, India',
            period: 'April 2025 - June 2025',
            description: [
                'Spearheaded end-to-end development of localized computer vision and NLP systems for critical threat detection.',
                'Constructed robust data pipelines to accelerate model training and fine-tuning cycles.',
                'Successfully deployed production-ready, real-time AI solutions for automated wildlife and fire monitoring.'
            ]
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
                                <ul className="exp-desc-list">
                                    {exp.description.map((point, idx) => (
                                        <li key={idx} className="exp-desc-item">{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
