import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h3 className="font-display">COLIN ROZARIO</h3>
                        <p>Building the future with AI & Code.</p>
                    </div>
                    <div className="footer-socials">
                        <a href="https://github.com/colinrozario" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/colin-michael-d-rozario-b03258196/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=colinmichaeldrozario1@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 Colin Rozario. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
