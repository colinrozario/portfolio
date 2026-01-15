import React, { useState } from 'react';
import {
    SiPython, SiTensorflow, SiPytorch, SiScikitlearn,
    SiReact, SiDocker, SiAwslambda, SiPostgresql,
    SiJavascript, SiTypescript, SiHtml5, SiCss3,
    SiNodedotjs, SiGit, SiMongodb, SiFastapi
} from 'react-icons/si';
import '../styles/Stack.css';

const stackData = {
    "Frontend": [
        { name: 'React', icon: <SiReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'HTML5', icon: <SiHtml5 /> },
        { name: 'CSS3', icon: <SiCss3 /> },
    ],
    "Backend": [
        { name: 'Python', icon: <SiPython /> },
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'FastAPI', icon: <SiFastapi /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    "AI / ML": [
        { name: 'TensorFlow', icon: <SiTensorflow /> },
        { name: 'PyTorch', icon: <SiPytorch /> },
        { name: 'Scikit-Learn', icon: <SiScikitlearn /> },
    ],
    "Tools": [
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'AWS', icon: <SiAwslambda /> },
        { name: 'Git', icon: <SiGit /> },
    ]
};

const Stack = () => {
    const [activeTab, setActiveTab] = useState("Frontend");

    return (
        <section id="stack" className="stack-section">
            <div className="container">
                <div className="stack-header">
                    <h2 className="section-title font-display">MY <span className="text-outline">STACK</span></h2>
                    <p className="section-desc">Tools & Technologies I work with</p>
                </div>

                <div className="stack-tabs">
                    {Object.keys(stackData).map(category => (
                        <button
                            key={category}
                            className={`tab-btn ${activeTab === category ? 'active' : ''}`}
                            onClick={() => setActiveTab(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="stack-grid">
                    {stackData[activeTab].map((tool, index) => (
                        <div key={index} className="tool-card fadeIn">
                            <div className="tool-icon">{tool.icon}</div>
                            <span className="tool-name">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stack;
