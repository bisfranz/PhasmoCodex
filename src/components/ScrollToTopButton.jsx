import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.pageYOffset > 300);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        visible && (
            <button
                onClick={scrollToTop}
                className="scroll-to-top-btn"
                aria-label="Volver arriba"
            />
        )
    );
};

export default ScrollToTopButton;