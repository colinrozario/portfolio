import React, { useEffect, useRef } from 'react';
import '../styles/Cursor.css';

const Cursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Immediate update for dot
            if (dot) {
                dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
        };

        const animate = () => {
            // Lerp for ring (smoother/slower)
            const ease = 0.1;
            ringX += (mouseX - ringX) * ease;
            ringY += (mouseY - ringY) * ease;

            if (ring) {
                ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', onMouseMove);
        const animationId = requestAnimationFrame(animate);

        // Hover Effects
        const handleMouseEnter = () => {
            ring?.classList.add('hovering');
            dot?.classList.add('hovering');
        };
        const handleMouseLeave = () => {
            ring?.classList.remove('hovering');
            dot?.classList.remove('hovering');
        };

        const addListeners = () => {
            const clickables = document.querySelectorAll('a, button, .clickable, .tab-btn, .tool-card');
            clickables.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
        };

        addListeners();

        // Mutation observer to handle new elements (like switching tabs in Skills)
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
        <>
            <div ref={ringRef} className="cursor-ring-wrapper">
                <div className="cursor-ring-inner" />
            </div>
            <div ref={dotRef} className="cursor-dot-wrapper">
                <div className="cursor-dot-inner" />
            </div>
        </>
    );
};

export default Cursor;
