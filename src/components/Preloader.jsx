import React, { useEffect, useState } from 'react';
import '../styles/Preloader.css';

const Preloader = ({ onComplete }) => {
    const [animateOut, setAnimateOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateOut(true);
            setTimeout(() => {
                onComplete();
            }, 500); // Wait for transition out
        }, 2000); // 2 seconds display time

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`preloader ${animateOut ? 'fade-out' : ''}`}>
            <h1 className="preloader-text">Colin Michael</h1>
        </div>
    );
};

export default Preloader;
