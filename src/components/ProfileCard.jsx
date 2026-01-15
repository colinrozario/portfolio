import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { SiDribbble, SiX, SiInstagram, SiGmail } from 'react-icons/si';
import profileImg from '../assets/profile-cartoon.png';
import '../styles/ProfileCard.css';

const ProfileCard = () => {
    const cardRef = useRef(null);

    // Mouse tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();

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

    return (
        <div className="profile-card-wrapper">
            {/* Dogtag Chain SVG Overlay */}
            <svg className="chain-overlay" viewBox="0 0 300 600">
                {/* 
                  Path simulating the chain:
                  Starts from top center (hanging point)
                  Loops down through the "hole" in the card
                  Then goes behind the picture (simulated by layering)
                  Then comes out and hangs a bit
                */}
                <motion.path
                    d="M 80 0 Q 80 50 60 80 T 46 130" // Top string entering the hole
                    className="chain-path"
                    style={{
                        pathLength: 1,
                        pathOffset: 0,
                    }}
                />
                <motion.path
                    d="M 46 130 C 46 250 250 250 250 130" // Loop roughly behind/around card - simplified for visual flair
                    className="chain-path"
                    style={{ opacity: 0.3 }} // Faint line behind
                />
            </svg>

            <motion.div
                ref={cardRef}
                className="profile-card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                animate={{
                    y: [0, -10, 0], // Floating Effect
                }}
                transition={{
                    y: {
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }
                }}
            >
                {/* Hole punch */}
                <div className="card-hole" style={{ top: '25px', left: '40px' }}></div>

                <div className="profile-img-container">
                    <img src={profileImg} alt="Colin Rozario" className="profile-img" />
                </div>

                <div className="profile-info">
                    <h2 className="profile-name">Colin Rozario</h2>
                    <p className="profile-role">
                        A Software Engineer who has developed countless innovative solutions.
                    </p>

                    <div className="profile-socials">
                        <a href="#" className="social-icon"><SiDribbble /></a>
                        <a href="#" className="social-icon"><SiX /></a>
                        <a href="#" className="social-icon"><SiInstagram /></a>
                        <a href="mailto:colin@example.com" className="social-icon"><SiGmail /></a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProfileCard;
