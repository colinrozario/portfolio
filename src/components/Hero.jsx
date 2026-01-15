import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    const [offset, setOffset] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Parallax: Title moves faster than scroll (negative translateY relative to flow)
    // "shifted upwards... faster than the scroll" -> visual position moves UP faster.
    const titleStyle = {
        transform: `translateY(${offset * -0.2}px)`
    };

    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <div className="hero-grid">
                    <div className="hero-main">
                        <h2 className="greeting font-display">HELLO I AM COLIN</h2>
                        <h1 className="title font-display" style={titleStyle}>
                            ASPIRING <span className="text-accent">AI/ML</span> ENGINEER
                            <br />
                            <span className="title-outline">& DATA SCIENTIST</span>
                        </h1>
                        <p className="description font-body">
                            I’m a Computer Science student who loves building things with code—whether it’s web apps, AI/ML projects, or experimental ideas that start with “what if?”. I enjoy learning by doing, breaking stuff (sometimes), and figuring out how to make it better. When I’m not coding, I’m probably exploring new tech, working on side projects, or planning the next big idea.
                        </p>
                        <a href="#contact" className="hire-btn font-display">HIRE ME</a>
                    </div>

                    <div className="hero-stats font-display">
                        <div className="stat-item">
                            <span className="stat-num text-accent">3+</span>
                            <span className="stat-label">Years Exp.</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-num text-accent">15+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-num text-accent">10K+</span>
                            <span className="stat-label">Commits</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
