import React, { useEffect, useRef, useState } from 'react';
import '../styles/Cursor.css';

const Cursor = () => {
    const cursorRef = useRef(null);
    const trailerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const trailer = trailerRef.current;

        let mouseX = 0;
        let mouseY = 0;
        let trailerX = 0;
        let trailerY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Instant update for the main dot
            if (cursor) {
                cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
        };

        const animate = () => {
            // Lerp for the trailer
            const ease = 0.15;
            trailerX += (mouseX - trailerX) * ease;
            trailerY += (mouseY - trailerY) * ease;

            if (trailer) {
                trailer.style.transform = `translate3d(${trailerX}px, ${trailerY}px, 0)`;
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', onMouseMove);
        const animationId = requestAnimationFrame(animate);

        // Add hover listeners to clickable elements
        const handleMouseOver = () => trailer?.classList.add('hovering');
        const handleMouseOut = () => trailer?.classList.remove('hovering');

        const clickables = document.querySelectorAll('a, button, .clickable, .tool-card');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', handleMouseOver);
            el.addEventListener('mouseleave', handleMouseOut);
        });

        // Dynamic observer for new elements (like falling skills)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    const newClickables = document.querySelectorAll('a, button, .clickable, .tool-card');
                    newClickables.forEach(el => {
                        el.removeEventListener('mouseenter', handleMouseOver); // Prevent duplicates
                        el.removeEventListener('mouseleave', handleMouseOut);
                        el.addEventListener('mouseenter', handleMouseOver);
                        el.addEventListener('mouseleave', handleMouseOut);
                    });
                }
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationId);
            observer.disconnect();
            clickables.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseOver);
                el.removeEventListener('mouseleave', handleMouseOut);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="cursor-dot" />
            <div ref={trailerRef} className="cursor-trailer" />
        </>
    );
};

export default Cursor;
