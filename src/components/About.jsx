import React from 'react';
import {
    SiPython, SiTensorflow, SiPytorch, SiScikitlearn,
    SiReact, SiDocker, SiAwslambda, SiPostgresql
} from 'react-icons/si';
import '../styles/About.css';

const Stack = () => {
    const stack = [
        {
            category: 'AI / ML',
            description: 'Building intelligent models.',
            tools: [
                { name: 'Python', icon: <SiPython /> },
                { name: 'TensorFlow', icon: <SiTensorflow /> },
                { name: 'PyTorch', icon: <SiPytorch /> },
                { name: 'Scikit', icon: <SiScikitlearn /> },
            ]
        },
        {
            category: 'DEV',
            description: 'Creating robust applications.',
            tools: [
                { name: 'React', icon: <SiReact /> },
                { name: 'PostgreSQL', icon: <SiPostgresql /> },
                { name: 'Docker', icon: <SiDocker /> },
                { name: 'AWS', icon: <SiAwslambda /> },
            ]
        }
    ];

    return (
        <section id="stack" className="stack-section">
            <div className="container">
                {stack.map((item, index) => (
                    <div key={index} className="stack-row">
                        <div className="stack-header">
                            <h2 className="stack-title font-display text-outline">{item.category}</h2>
                            <p className="stack-desc">{item.description}</p>
                        </div>
                        <div className="stack-grid">
                            {item.tools.map((tool, i) => (
                                <div key={i} className="tool-card">
                                    <div className="tool-icon">{tool.icon}</div>
                                    <span className="tool-name">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stack;
