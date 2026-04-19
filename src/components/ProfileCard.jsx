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
        rest: {
            transition: {
                staggerChildren: 0.1
            }
        },
        hover: {}
    };

    const ghostCard1 = {
        intro: {
            y: -500,
            opacity: 0,
            rotate: 0,
            x: 0,
        },
        rest: {
            rotate: -5,
            x: 0,
            y: 0,
            scale: 0.95,
            opacity: 1, // Visible at rest
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 15,
                delay: 0.5 // Wait for main card
            }
        },
        // Dramatic shuffle effect before resting
        shuffle: {
            x: -120, // Fan out left
            rotate: -20,
            transition: { duration: 0.4, type: 'spring' }
        },
        hover: {
            rotate: -12,
            x: -40,
            y: 10,
            scale: 0.95,
            opacity: 0.6, // Slight fade on hover
            transition: {
                duration: 0.4,
                type: 'spring',
                stiffness: 100
            }
        }
    };

    const ghostCard2 = {
        intro: {
            y: -500,
            opacity: 0,
            rotate: 0,
            x: 0,
        },
        rest: {
            rotate: 5,
            x: 0,
            y: 0,
            scale: 0.9,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 15,
                delay: 0.6 // Wait for main card
            }
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

    // Main card intro variant
    const mainCardVariants = {
        intro: {
            y: -600,
            opacity: 0,
        },
        rest: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 60,
                damping: 12,
                mass: 1.2
            }
        },
        hover: {}
    };

    return (
        <motion.div
            ref={wrapperRef}
            className="profile-card-wrapper"
            variants={containerVariants}
            initial="intro"
            animate="rest"
            whileHover="hover"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Illustrative Flowing Lanyard */}
            <svg className="lanyard-svg-overlay" viewBox="0 0 200 1000" preserveAspectRatio="xMidYMax slice">
                <defs>
                    <linearGradient id="lanyardGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#111" />
                        <stop offset="50%" stopColor="#333" />
                        <stop offset="100%" stopColor="#111" />
                    </linearGradient>
                    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="80%" stopColor="rgba(0, 240, 80, 0.6)" />
                        <stop offset="100%" stopColor="rgba(0, 240, 80, 0)" />
                    </linearGradient>
                </defs>
                
                {/* Back strap (shadow/perspective) */}
                <path 
                    d="M 50,-100 C 180,200 -20,500 90,800 L 98,985" 
                    fill="none" 
                    stroke="#1a1a1a" 
                    strokeWidth="10" 
                    strokeLinecap="round" 
                />
                
                {/* Main front flowing strap */}
                <path 
                    d="M 120,-100 C -50,250 250,550 102,985" 
                    fill="none" 
                    stroke="url(#lanyardGrad)" 
                    strokeWidth="14" 
                    strokeLinecap="round" 
                />

                {/* Techy glowing track along the front strap */}
                <path 
                    d="M 120,-100 C -50,250 250,550 102,985" 
                    fill="none" 
                    stroke="url(#accentGrad)" 
                    strokeWidth="3" 
                    strokeDasharray="15 10"
                    strokeLinecap="round" 
                />

                {/* Metal Clip connecting lanyard to the card */}
                <g transform="translate(90, 975)">
                    <rect x="0" y="0" width="20" height="15" rx="3" fill="#666" />
                    <rect x="2" y="2" width="16" height="11" rx="2" fill="#999" />
                    {/* Ring/Hook */}
                    <path d="M 10,15 C 5,20 5,25 10,25 C 15,25 15,20 10,15" fill="none" stroke="#777" strokeWidth="3" />
                </g>
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
                variants={mainCardVariants}
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
                        Computer Science Engineer | AI/ML Enthusiast |
                        <br />
                        FIND ME HERE:

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
