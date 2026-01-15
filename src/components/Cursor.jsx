import React, { useEffect, useRef } from 'react';
import '../styles/Cursor.css';

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        let mouseX = -100;
        let mouseY = -100;
        let cursorX = -100;
        let cursorY = -100;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            const ease = 0.15; // Slightly faster for responsiveness
            cursorX += (mouseX - cursorX) * ease;
            cursorY += (mouseY - cursorY) * ease;

            if (cursor) {
                cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', onMouseMove);
        const animationId = requestAnimationFrame(animate);

        // Hover Effects
        const handleMouseEnter = () => {
            cursor?.classList.add('hovering');
        };
        const handleMouseLeave = () => {
            cursor?.classList.remove('hovering');
        };

        const addListeners = () => {
            const clickables = document.querySelectorAll('a, button, .clickable, .tab-btn, .tool-card');
            clickables.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
        };

        addListeners();

        const observer = new MutationObserver(() => {
            addListeners();
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationId);
            observer.disconnect();
            const clickables = document.querySelectorAll('a, button, .clickable, .tab-btn, .tool-card');
            clickables.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <div ref={cursorRef} className="custom-cursor" />
    );
};

export default Cursor;
