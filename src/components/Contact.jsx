import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <div className="contact-left">
                    <h2 className="section-header font-display">LET'S WORK <br /><span className="text-accent">TOGETHER</span></h2>
                    <p className="contact-desc">
                        Have a project in mind? I'm always open to discussing new opportunities in AI, Machine Learning, and Web Development.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><FaGithub /></a>
                        <a href="#" className="social-icon"><FaLinkedin /></a>
                        <a href="#" className="social-icon"><FaTwitter /></a>
                    </div>
                </div>

                <div className="contact-right">
                    <form className="contact-form">
                        <div className="form-group">
                            <label>NAME</label>
                            <input type="text" placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label>EMAIL</label>
                            <input type="email" placeholder="john@example.com" />
                        </div>
                        <div className="form-group">
                            <label>MESSAGE</label>
                            <textarea rows="4" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button type="submit" className="submit-btn font-display">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
            <footer className="footer-mini">
                <p>© 2024 Colin Rozario. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
