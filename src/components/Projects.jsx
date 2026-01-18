import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import '../styles/Projects.css';

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const projects = [
        {
            id: '01',
            title: 'MindTrace',
            category: 'Computer Vision',
            tech: 'FastAPI • React • PyTorch • InsightFace • LangChain',
            description: 'Developed a real-time wearable AI assistant combining face recognition and speech transcription for live identity recall. Integrated LangChain and vector search to generate conversation summaries, reminders, and emergency SOS alerts. Engineered a web dashboard that consolidates detection data and conversation logs.',
            githubLink: 'https://github.com/colinrozario/mindtrace',
            color: 'linear-gradient(135deg, #FF6B6B 0%, #556270 100%)', // Fallback color
            image: '/projects/mindtrace.png'
        },
        {
            id: '02',
            title: 'TruLogo',
            category: 'OCR & AI',
            tech: 'FastAPI • PyTorch • FAISS • OpenCV • Next.js',
            description: 'Built an end-to-end logo similarity and trademark risk analysis system using deep visual embeddings and vector search. Implemented FAISS-based ANN retrieval, reducing logo comparison latency by ~70% while maintaining high accuracy. Enhanced a scalable FastAPI backend and Next.js dashboard.',
            githubLink: 'https://github.com/colinrozario/TruLogo',
            color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            image: '/projects/trulogo.png'
        },
        {
            id: '03',
            title: 'divergeX',
            category: 'Full Stack / Innovation',
            tech: 'React • Node.js • AWS',
            description: 'Architected a scalable digital platform fostering collaborative innovation. Implemented secure authentication, real-time data synchronization, and a responsive UI for seamless user engagement.',
            githubLink: 'https://github.com/colinrozario/divergeX',
            color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            image: '/projects/divergex.png'
        },
        {
            id: '04',
            title: 'Netflix Churn',
            category: 'Data Science',
            tech: 'XGBoost • Scikit-learn • Pandas',
            description: 'Built a predictive machine learning model to identify at-risk subscribers. Analyzed viewing patterns and user behavior to engineer features that improved churn prediction accuracy by 15%.',
            githubLink: 'https://github.com/colinrozario/netflix_churn_prediction',
            color: 'linear-gradient(135deg, #E50914 0%, #221f1f 100%)',
            image: '/projects/netflix_churn_new.jpg'
        },
        {
            id: '05',
            title: 'Iris Pred',
            category: 'Machine Learning',
            tech: 'Python • Streamlit • ML Algorithms',
            description: 'Designed a foundational classification model to predict Iris flower species. Demonstrates core competencies in data preprocessing, feature selection, and model evaluation metrics.',
            githubLink: 'https://github.com/colinrozario/iris_pred',
            color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            image: '/projects/iris_pred.png'
        }
    ];

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <section
            id="projects"
            className="section projects-section"
            ref={containerRef}
            onMouseMove={handleMouseMove}
        >
            <div className="container">
                <h2 className="section-title font-display">Selected <span className="text-outline">Works</span></h2>

                <div className="project-list">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`project-item ${hoveredProject && hoveredProject !== project.id ? 'dimmed' : ''}`}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="project-content">
                                <span className="project-num font-display">/{project.id}</span>
                                <div className="project-main">
                                    <div className="project-header-row">
                                        <h3 className="project-title font-display">
                                            {project.title}
                                            <motion.span
                                                className="project-arrow"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{
                                                    opacity: hoveredProject === project.id ? 1 : 0,
                                                    x: hoveredProject === project.id ? 0 : -10
                                                }}
                                            >
                                                <FiArrowUpRight />
                                            </motion.span>
                                        </h3>
                                        <span className="tech-badge">{project.tech}</span>
                                    </div>
                                    <p className="project-desc">{project.description}</p>
                                </div>
                                <motion.a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-github"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{
                                        opacity: hoveredProject === project.id ? 1 : 0,
                                        x: hoveredProject === project.id ? 0 : 20
                                    }}
                                    whileHover={{ scale: 1.1, color: "var(--accent-green)" }}
                                >
                                    <FiGithub />
                                </motion.a>
                            </div>
                        </div>
                    ))}
                </div>

                <AnimatePresence>
                    {hoveredProject && (
                        <motion.div
                            className="hover-reveal-image"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                top: mousePosition.y - 120,
                                left: mousePosition.x + 80,
                            }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            style={{
                                background: projects.find(p => p.id === hoveredProject)?.color
                            }}
                        >
                            {/* Render Image if available, else text */}
                            {(() => {
                                const activeProj = projects.find(p => p.id === hoveredProject);
                                if (activeProj?.image) {
                                    return (
                                        <img
                                            src={activeProj.image}
                                            alt={activeProj.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    );
                                }
                                return <div className="placeholder-text">View On GitHub</div>;
                            })()}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
