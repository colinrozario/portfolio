import React from 'react';
import {
    SiPython, SiTensorflow, SiPytorch, SiScikitlearn,
    SiReact, SiDocker, SiAwslambda, SiPostgresql,
    SiJavascript, SiTypescript, SiHtml5, SiCss3,
    SiNodedotjs, SiGit, SiMongodb, SiFastapi, SiRedux, SiTailwindcss, SiSass, SiBootstrap, SiNextdotjs, SiNestjs,
    SiNumpy, SiPandas, SiKeras, SiOpencv, SiSpacy, SiRoboflow,
    SiC, SiCplusplus
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/Stack.css';

const stackData = [
    {
        category: "LANGUAGES",
        tools: [
            { name: 'C', icon: <SiC />, color: '#A8B9CC' },
            { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
            { name: 'Java', icon: <FaJava />, color: '#007396' },
            { name: 'Python', icon: <SiPython />, color: '#3776AB' },
        ]
    },
    {
        category: "FRONTEND",
        tools: [
            { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
            { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
            { name: 'React', icon: <SiReact />, color: '#61DAFB' },
            { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
            { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
            { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
        ]
    },
    {
        category: "BACKEND",
        tools: [
            { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
            { name: 'NestJS', icon: <SiNestjs />, color: '#E0234E' },
            { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
            { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
            { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        ]
    },
    {
        category: "AI / ML",
        tools: [
            { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00' },
            { name: 'PyTorch', icon: <SiPytorch />, color: '#EE4C2C' },
            { name: 'Scikit-Learn', icon: <SiScikitlearn />, color: '#F7931E' },
            { name: 'NumPy', icon: <SiNumpy />, color: '#013243' },
            { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
            { name: 'Keras', icon: <SiKeras />, color: '#D00000' },
            { name: 'XGBoost', icon: <SiPython />, color: '#15BDB9' }, // Fallback to Python icon as XGBoost has no simple icon
            { name: 'OpenCV', icon: <SiOpencv />, color: '#5C3EE8' },
            { name: 'Roboflow', icon: <SiRoboflow />, color: '#6600FF' },
            { name: 'spaCY', icon: <SiSpacy />, color: '#09A3D5' },
        ]
    }
];

const Stack = () => {
    return (
        <section id="stack" className="stack-section">
            <div className="container">
                <div className="stack-header">
                    <h2 className="section-title font-display">MY <span className="text-outline">STACK</span></h2>
                </div>

                <div className="stack-groups">
                    {stackData.map((group, groupIndex) => (
                        <div key={groupIndex} className="stack-group">
                            <h3 className="group-title font-display">{group.category}</h3>
                            <div className="group-grid">
                                {group.tools.map((tool, toolIndex) => (
                                    <motion.div
                                        key={toolIndex}
                                        className="tool-item"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: toolIndex * 0.1 }}
                                    >
                                        <span className="tool-icon" style={{ color: tool.color }}>
                                            {tool.icon}
                                        </span>
                                        <span className="tool-name">{tool.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stack;
