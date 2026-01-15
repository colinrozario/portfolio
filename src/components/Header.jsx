import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <div className="container header-content">
                <a href="#" className={`logo font-display ${isScrolled ? 'hidden' : ''}`}>
                    COLIN ROZARIO<span className="text-accent">.</span>
                </a>

                <div className="header-controls">
                    <a href="/resume.pdf" target="_blank" className="resume-btn font-display">
                        RESUME
                    </a>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>

                <nav className={`nav-overlay ${isMenuOpen ? 'open' : ''}`}>
                    <div className="nav-bg-accent"></div>
                    <div className="nav-links font-display">
                        <a href="#hero" onClick={toggleMenu}><span className="nav-num">01</span>Home</a>
                        <a href="#about" onClick={toggleMenu}><span className="nav-num">02</span>About</a>
                        <a href="#stack" onClick={toggleMenu}><span className="nav-num">03</span>Skills</a>
                        <a href="#projects" onClick={toggleMenu}><span className="nav-num">04</span>Projects</a>
                        <a href="#contact" onClick={toggleMenu}><span className="nav-num">05</span>Contact</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
