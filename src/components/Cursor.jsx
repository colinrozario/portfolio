import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import '../styles/Cursor.css';

const Cursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    // Mouse position state
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Spring physics for the trailing ring
    // Stiffness: tension (higher = snappier)
    // Damping: friction (higher = less oscillation)
    const springConfig = { damping: 25, stiffness: 120, mass: 0.8 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseDown = () => setIsClicked(true);
        const handleMouseUp = () => setIsClicked(false);

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        // Track mouse movement
        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        // Attach hover listeners to interactive elements dynamically
        const addHoverListeners = () => {
            const interactiveElements = document.querySelectorAll(
                'a, button, input, textarea, select, .clickable, .social-icon, .card, .project-item'
            );

            interactiveElements.forEach((el) => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });

            return () => {
                interactiveElements.forEach((el) => {
                    el.removeEventListener('mouseenter', handleMouseEnter);
                    el.removeEventListener('mouseleave', handleMouseLeave);
                });
            };
        };

        // Initial attach
        const cleanupListeners = addHoverListeners();

        // Re-attach on DOM mutations (e.g., route changes or dynamic content)
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            cleanupListeners();
            observer.disconnect();
        };
    }, [mouseX, mouseY]);

    // Animation Variants for the Ring
    const ringVariants = {
        default: {
            height: 32,
            width: 32,
            x: -16, // Center offset (half of width)
            y: -16,
            backgroundColor: "transparent",
            border: "1px solid white",
        },
        hover: {
            height: 64,
            width: 64,
            x: -32,
            y: -32,
            backgroundColor: "white", // Fill the ring
            border: "1px solid white",
        },
        click: {
            scale: 0.8,
            transition: { duration: 0.1 }
        }
    };

    // Animation Variants for the Dot
    const dotVariants = {
        default: {
            x: -4, // Center offset (half of width 8px)
            y: -4,
        },
        hover: {
            scale: 0, // Hide dot when ring expands
        }
    };

    return (
        <>
            {/* The Dot: Follows mouse perfectly */}
            <motion.div
                className="cursor-dot"
                style={{
                    translateX: mouseX,
                    translateY: mouseY,
                }}
                variants={dotVariants}
                animate={isHovered ? "hover" : "default"}
            />

            {/* The Ring: Follows with physics */}
            <motion.div
                className="cursor-ring"
                style={{
                    translateX: springX,
                    translateY: springY,
                }}
                variants={ringVariants}
                animate={isClicked ? "click" : isHovered ? "hover" : "default"}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
        </>
    );
};

export default Cursor;
