import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useAnimation } from 'framer-motion';
import { SiGmail, SiLinkedin, SiGithub, SiKaggle } from 'react-icons/si';
import profileImg from '../assets/profile-cartoon.png';
import '../styles/ProfileCard.css';

const ProfileCard = () => {
    const wrapperRef = useRef(null);
    const [isShuffling, setIsShuffling] = useState(false);

    // Controls for orchestraing complex animations
    const controlsMain = useAnimation();
    const controlsGhost1 = useAnimation();
    const controlsGhost2 = useAnimation();

    // Mouse tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        if (!wrapperRef.current || isShuffling) return; // Disable tilt while shuffling
        const rect = wrapperRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        if (isShuffling) return;
        x.set(0);
        y.set(0);
    };

    const playShuffleSequence = async () => {
        setIsShuffling(true);
        // Reset tilt so cards are flat during shuffle
        x.set(0); y.set(0);

        // Step 1: Main left/back, Ghost1 front, Ghost2 right/back
        controlsMain.start({ x: -120, rotate: -15, scale: 0.85, zIndex: 1, transition: { duration: 0.3 } });
        controlsGhost1.start({ x: 0, rotate: 0, scale: 1, zIndex: 10, transition: { duration: 0.3 } });
        await controlsGhost2.start({ x: 120, rotate: 15, scale: 0.85, zIndex: 0, transition: { duration: 0.3 } });

        // Step 2: Ghost1 right/back, Ghost2 front, Main left/back waiting to pop
        controlsGhost1.start({ x: 120, rotate: 15, scale: 0.85, zIndex: 0, transition: { duration: 0.3 } });
        controlsGhost2.start({ x: 0, rotate: 0, scale: 1, zIndex: 10, transition: { duration: 0.3 } });
        await controlsMain.start({ x: -120, rotate: -15, scale: 0.85, zIndex: 1, transition: { duration: 0.3 } });

        // Step 3: Main pops back to front center, ghosts settle
        controlsGhost1.start({ x: 0, rotate: -5, scale: 0.95, zIndex: 2, transition: { duration: 0.4, type: 'spring' } });
        controlsGhost2.start({ x: 0, rotate: 5, scale: 0.9, zIndex: 1, transition: { duration: 0.4, type: 'spring' } });
        await controlsMain.start({ x: 0, rotate: 0, scale: 1, zIndex: 10, transition: { duration: 0.4, type: 'spring' } });

        setIsShuffling(false);
    };

    // Initial load sequence
    useEffect(() => {
        const initialLoad = async () => {
            // Set initial off-screen states
            controlsGhost1.set({ y: -500, opacity: 0, zIndex: 2 });
            controlsGhost2.set({ y: -500, opacity: 0, zIndex: 1 });
            controlsMain.set({ y: -600, opacity: 0, zIndex: 10 });

            // Drop in
            controlsGhost1.start({ y: 0, opacity: 1, rotate: -5, scale: 0.95, transition: { type: 'spring', stiffness: 50, damping: 15 }});
            controlsGhost2.start({ y: 0, opacity: 1, rotate: 5, scale: 0.9, transition: { delay: 0.1, type: 'spring', stiffness: 50, damping: 15 }});
            await controlsMain.start({ y: 0, opacity: 1, transition: { delay: 0.2, type: 'spring', stiffness: 60, damping: 12 }});

            // Trigger the first shuffle
            setTimeout(() => {
                playShuffleSequence();
            }, 500); // Wait half a sec after drop in
        };
        initialLoad();
    }, []);

    // Hover effects for ghost cards (only active when resting)
    const handleGhost1Hover = () => { if(!isShuffling) controlsGhost1.start({ rotate: -12, x: -40, y: 10, scale: 0.95, opacity: 0.6, transition: { duration: 0.4, type: 'spring', stiffness: 100 } }); };
    const handleGhost1Leave = () => { if(!isShuffling) controlsGhost1.start({ rotate: -5, x: 0, y: 0, scale: 0.95, opacity: 1, transition: { duration: 0.4, type: 'spring', stiffness: 100 } }); };
    
    const handleGhost2Hover = () => { if(!isShuffling) controlsGhost2.start({ rotate: 12, x: 40, y: 20, scale: 0.9, opacity: 0.4, transition: { duration: 0.4, type: 'spring', stiffness: 100 } }); };
    const handleGhost2Leave = () => { if(!isShuffling) controlsGhost2.start({ rotate: 5, x: 0, y: 0, scale: 0.9, opacity: 1, transition: { duration: 0.4, type: 'spring', stiffness: 100 } }); };

    return (
        <motion.div
            ref={wrapperRef}
            className="profile-card-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Ghost Cards (Background) */}
            <motion.div 
                className="ghost-card ghost-1" 
                animate={controlsGhost1}
                onMouseEnter={handleGhost1Hover}
                onMouseLeave={handleGhost1Leave}
            >
                <div className="profile-img-container"></div>
                <div className="ghost-lines">
                    <div className="ghost-line title"></div>
                    <div className="ghost-line text"></div>
                    <div className="ghost-line text"></div>
                </div>
            </motion.div>
            
            <motion.div 
                className="ghost-card ghost-2" 
                animate={controlsGhost2}
                onMouseEnter={handleGhost2Hover}
                onMouseLeave={handleGhost2Leave}
            >
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
                animate={controlsMain}
                style={{
                    rotateX: isShuffling ? 0 : rotateX,
                    rotateY: isShuffling ? 0 : rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                <div className="profile-img-container" onClick={!isShuffling ? playShuffleSequence : undefined} style={{ cursor: isShuffling ? 'default' : 'pointer' }}>
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
