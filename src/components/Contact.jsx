import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = React.useState(''); // 'sending', 'success', 'error'

    const form = React.useRef();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');


        emailjs
            .sendForm(
                'service_ynpm7y5',
                'template_c571ew3',
                form.current,
                {
                    publicKey: 'MVPg8l9XirdUYSQE9',
                }
            )
            .then(
                () => {
                    setStatus('success');
                    setFormData({ name: '', email: '', message: '' });
                    setTimeout(() => setStatus(''), 5000);
                },
                (error) => {
                    setStatus('error');
                    console.error('FAILED...', error.text);
                },
            );
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <div className="contact-left">
                    <h2 className="section-header font-display">LET'S WORK <br /><span className="text-accent">TOGETHER</span></h2>
                    <p className="contact-desc">
                        Have a project in mind? I'm always open to discussing new opportunities in AI, Machine Learning, and Web Development.
                    </p>
                    <div className="social-links">
                        <a href="https://github.com/colinrozario" className="social-icon" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/colin-michael-d-rozario-b03258196/" className="social-icon" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=colinmichaeldrozario1@gmail.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
                    </div>
                </div>

                <div className="contact-right">
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                className="success-message"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <div className="check-icon">
                                    <motion.svg viewBox="0 0 50 50" className="checkmark">
                                        <motion.path
                                            fill="none"
                                            stroke="#00F0FF"
                                            strokeWidth="3"
                                            d="M 10 25 L 22 37 L 40 10"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                        />
                                    </motion.svg>
                                </div>
                                <h3>Message Sent!</h3>
                                <p>I'll get back to you soon.</p>
                            </motion.div>
                        ) : (
                            <motion.form
                                className="contact-form"
                                ref={form}
                                onSubmit={sendEmail}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="form-group">
                                    <label>NAME</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>EMAIL</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>MESSAGE</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        placeholder="Tell me about your project..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="submit-btn font-display" disabled={status === 'sending'}>
                                    {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Contact;
