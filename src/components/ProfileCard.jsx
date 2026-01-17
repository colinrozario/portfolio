import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { SiGmail, SiLinkedin, SiGithub, SiKaggle } from 'react-icons/si';
import profileImg from '../assets/profile-cartoon.png';
import '../styles/ProfileCard.css';

const ProfileCard = () => {
    const wrapperRef = useRef(null);

    // Mouse tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        if (!wrapperRef.current) return;

        const rect = wrapperRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Shuffle Variants
    const containerVariants = {
        rest: {},
        hover: {}
    };

    const ghostCard1 = {
        rest: {
            rotate: -5,
            x: 0,
            y: 0,
            scale: 0.95,
            opacity: 0
        },
        hover: {
            rotate: -12,
            x: -40,
            y: 10,
            scale: 0.95,
            opacity: 0.6,
            transition: {
                duration: 0.4,
                type: 'spring',
                stiffness: 100
            }
        }
    };

    const ghostCard2 = {
        rest: {
            rotate: 5,
            x: 0,
            y: 0,
            scale: 0.9,
            opacity: 0
        },
        hover: {
            rotate: 12,
            x: 40,
            y: 20,
            scale: 0.9,
            opacity: 0.4,
            transition: {
                duration: 0.4,
                delay: 0.1,
                type: 'spring',
                stiffness: 100
            }
        }
    };

    return (
        <motion.div
            ref={wrapperRef}
            className="profile-card-wrapper"
            variants={containerVariants}
            initial="rest"
            whileHover="hover"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Dogtag Chain Overlay positioned relative to wrapper */}
            <svg className="chain-overlay" viewBox="0 0 300 600">
                <motion.path
                    d="M 150 0 L 150 100" // Simple string hanging down to card center-ish
                    className="chain-path"
                />
            </svg>

            {/* Ghost Cards (Background) */}
            <motion.div className="ghost-card ghost-1" variants={ghostCard1}>
                <div className="card-hole"></div>
                <div className="profile-img-container"></div>
                <div className="ghost-lines">
                    <div className="ghost-line title"></div>
                    <div className="ghost-line text"></div>
                    <div className="ghost-line text"></div>
                </div>
            </motion.div>
            <motion.div className="ghost-card ghost-2" variants={ghostCard2}>
                <div className="card-hole"></div>
                <div className="profile-img-container"></div>
                <div className="ghost-lines">
                    <div className="ghost-line title"></div>
                    <div className="ghost-line text"></div>
                    <div className="ghost-line text"></div>
                </div>
            </motion.div>

            {/* Main Card */}
            <motion.div
                className="profile-card"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                <div className="card-hole"></div>

                <div className="profile-img-container">
                    <img src={profileImg} alt="Colin Rozario" className="profile-img" />
                </div>

                <div className="profile-info">
                    <h2 className="profile-name">Colin Rozario</h2>
                    <p className="profile-role">
                        A Software Engineer who has developed countless innovative solutions.
                    </p>

                    <div className="profile-socials">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=colinmichaeldrozario1@gmail.com" target="_blank" rel="noreferrer" className="social-icon gmail" title="Gmail"><SiGmail /></a>
                        <a href="https://linkedin.com/in/colin-michael-d-rozario-b03258196/" target="_blank" rel="noreferrer" className="social-icon linkedin" title="LinkedIn"><SiLinkedin /></a>
                        <a href="https://github.com/colinrozario" target="_blank" rel="noreferrer" className="social-icon github" title="GitHub"><SiGithub /></a>
                        <a href="https://www.kaggle.com/colinmichaeldrozario" target="_blank" rel="noreferrer" className="social-icon kaggle" title="Kaggle"><SiKaggle /></a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProfileCard;
