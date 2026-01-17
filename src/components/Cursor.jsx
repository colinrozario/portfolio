import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import '../styles/Cursor.css';

const Cursor = () => {
    const [cursorVariant, setCursorVariant] = useState('default');

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth spring physics for the follower effect
    const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', moveCursor);

        const handleMouseEnter = () => setCursorVariant('hover');
        const handleMouseLeave = () => setCursorVariant('default');

        const addListeners = () => {
            const clickables = document.querySelectorAll('a, button, .clickable, .social-icon, .profile-card, .timeline-content');
            clickables.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
        };

        addListeners();

        const observer = new MutationObserver(addListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            observer.disconnect();
            const clickables = document.querySelectorAll('a, button, .clickable, .social-icon, .profile-card, .timeline-content');
            clickables.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    const variants = {
        default: {
            width: 16,
            height: 16,
            // Triangle shape using clip-path pointing right
            clipPath: 'polygon(0 0, 0 100%, 100% 50%)',
            borderRadius: 0,
            backgroundColor: '#ffffff',
            x: -8,
            y: -8,
            rotate: 0,
            mixBlendMode: 'difference'
        },
        hover: {
            width: 60,
            height: 60,
            // Full circle
            clipPath: 'circle(50% at 50% 50%)',
            borderRadius: '50%',
            backgroundColor: '#ffffff', // Solid white (will be difference moded)
            x: -30,
            y: -30,
            rotate: 180, // Subtle rotation effect on expansion
            mixBlendMode: 'difference'
        }
    };

    return (
        <motion.div
            className="myriad-cursor"
            variants={variants}
            animate={cursorVariant}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }} // Snap for shape change
            style={{
                translateX: cursorX, // Smooth follower movement
                translateY: cursorY,
            }}
        />
    );
};

export default Cursor;
