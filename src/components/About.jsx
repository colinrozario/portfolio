import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import {
    SiPython, SiTensorflow, SiPytorch, SiScikitlearn,
    SiReact, SiDocker, SiAwslambda, SiPostgresql
} from 'react-icons/si';
import '../styles/About.css';

const skills = [
    { name: 'Python', category: 'AI/ML', icon: <SiPython /> },
    { name: 'TensorFlow', category: 'AI/ML', icon: <SiTensorflow /> },
    { name: 'PyTorch', category: 'AI/ML', icon: <SiPytorch /> },
    { name: 'Scikit', category: 'AI/ML', icon: <SiScikitlearn /> },
    { name: 'React', category: 'DEV', icon: <SiReact /> },
    { name: 'PostgreSQL', category: 'DEV', icon: <SiPostgresql /> },
    { name: 'Docker', category: 'DEV', icon: <SiDocker /> },
    { name: 'AWS', category: 'DEV', icon: <SiAwslambda /> },
];

const About = () => {
    const sceneRef = useRef(null);
    const engineRef = useRef(null);
    const renderRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        // Physics setup
        const Engine = Matter.Engine;
        const Render = Matter.Render;
        const World = Matter.World;
        const Bodies = Matter.Bodies;
        const Mouse = Matter.Mouse;
        const MouseConstraint = Matter.MouseConstraint;

        const engine = Engine.create();
        engineRef.current = engine;

        const container = sceneRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;

        // Create bodies for each skill
        const bodies = skills.map((skill, index) => {
            const x = Math.random() * (width - 100) + 50;
            const y = -Math.random() * 500 - 100; // Start above viewport

            return Bodies.rectangle(x, y, 80, 80, { // Approximate card size
                restitution: 0.5,
                friction: 0.1,
                render: { opacity: 0 } // Invisible physics body
            });
        });

        // Add walls
        const ground = Bodies.rectangle(width / 2, height + 50, width, 100, { isStatic: true, render: { opacity: 0 } });
        const leftWall = Bodies.rectangle(-50, height / 2, 100, height * 2, { isStatic: true, render: { opacity: 0 } });
        const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height * 2, { isStatic: true, render: { opacity: 0 } });

        World.add(engine.world, [...bodies, ground, leftWall, rightWall]);

        // Mouse control
        const mouse = Mouse.create(container);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });
        // Scroll fix for mouse interaction
        mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
        mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

        World.add(engine.world, mouseConstraint);

        // Run the engine
        Matter.Runner.run(engine);

        // Sync loop
        let animationId;
        const update = () => {
            bodies.forEach((body, index) => {
                const item = itemsRef.current[index];
                if (item) {
                    const { x, y } = body.position;
                    const angle = body.angle;
                    item.style.transform = `translate(${x - 40}px, ${y - 40}px) rotate(${angle}rad)`; // -40 for center offset (half of 80 width)
                }
            });
            animationId = requestAnimationFrame(update);
        };
        update();

        // Cleanup
        return () => {
            cancelAnimationFrame(animationId);
            Matter.Engine.clear(engine);
            Matter.World.clear(engine.world);
        };
    }, []);

    return (
        <section id="stack" className="stack-section">
            <div className="container" style={{ position: 'relative', height: '100%' }}>
                <div className="stack-header-static">
                    <h2 className="stack-title font-display text-outline">Skills</h2>
                    <p className="stack-desc">Drag and throw the technologies I use.</p>
                </div>

                <div ref={sceneRef} className="physics-container">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            ref={el => itemsRef.current[index] = el}
                            className="physics-item tool-card"
                            style={{ position: 'absolute', left: 0, top: 0, width: '80px', height: '80px' }} // Initial positioning
                        >
                            <div className="tool-icon" style={{ fontSize: '2rem' }}>{skill.icon}</div>
                            <span className="tool-name" style={{ fontSize: '0.7rem' }}>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
