// This component should be in ./HighlightsBar.jsx
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HighlightsBar = () => {
    const barRef = useRef();

    useGSAP(() => {
        // Pop-in animation for each item
        gsap.from('.highlight-item', {
            scale: 0, // Start from zero size
            opacity: 0,
            duration: 0.8,
            stagger: 0.1, // Staggered reveal
            ease: 'back.out(1.7)',
        });
    }, { scope: barRef });

    const highlights = [
        { icon: '⚡', text: 'Fast Delivery' },
        { icon: '⭐', text: 'Top-Quality Development' },
        { icon: '💡', text: 'Creative UI/UX Team' },
        { icon: '🔐', text: 'Secure & Scalable Apps' },
        { icon: '📞', text: '24/7 Support' },
    ];

    return (
        <section ref={barRef} style={{ padding: '30px 0', backgroundColor: '#eef2ff', display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center', borderBottom: '1px solid #ddd' }}>
            {highlights.map((item, index) => (
                <div key={index} className="highlight-item" style={{ flex: 1, padding: '10px' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '5px' }}>{item.icon}</div>
                    <p style={{ fontWeight: 600, margin: 0, color: '#374151' }}>{item.text}</p>
                </div>
            ))}
        </section>
    );
};
export default HighlightsBar;