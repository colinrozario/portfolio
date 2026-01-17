import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            id: '01',
            title: 'MindTrace',
            category: 'Computer Vision',
            tech: 'YOLOv8, OpenCV'
        },
        {
            id: '02',
            title: 'TrueLogo',
            category: 'OCR & AI',
            tech: 'Tesseract, OpenCV'
        },
        {
            id: '03',
            title: 'TUMOR SEGMENTATION',
            category: 'Healthcare AI',
            tech: 'U-Net, PyTorch'
        },
        {
            id: '04',
            title: 'CHURN ANALYSIS',
            category: 'Data Science',
            tech: 'XGBoost, Sklearn'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-header font-display">SELECTED <span className="text-outline">WORKS</span></h2>

                <div className="project-list">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`project-item ${activeProject && activeProject !== project.id ? 'dimmed' : ''}`}
                            onMouseEnter={() => setActiveProject(project.id)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                            <span className="project-num font-display">_{project.id}</span>
                            <div className="project-info">
                                <h3 className="project-title font-display">{project.title}</h3>
                                <p className="project-cat">{project.category} — <span className="text-secondary">{project.tech}</span></p>
                            </div>
                            <div className="project-arrow">→</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
