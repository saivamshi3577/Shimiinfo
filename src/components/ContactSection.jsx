// This component should be in ./ContactSection.jsx
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ContactSection = ({ className }) => {
    const contactRef = useRef();

    useGSAP(() => {
        // Continuous, subtle pulse animation for the primary CTA
        gsap.to('.cta-main-button', {
            scale: 1.05,
            boxShadow: '0 0 15px rgba(79, 70, 229, 0.7)',
            duration: 1.5,
            ease: 'power1.inOut',
            yoyo: true, // Go back and forth
            repeat: -1, // Infinite repeat
        });
        
        // Scroll reveal for the whole section (similar to the global effect)
        gsap.from(contactRef.current.children, {
            opacity: 0,
            y: 50,
            stagger: 0.3,
            duration: 1,
            scrollTrigger: {
                trigger: contactRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
            }
        });

    }, { scope: contactRef });

    return (
        <section ref={contactRef} className={`${className} contact-section`}>
            <h2 className="contact-heading">Ready to Build Something Amazing?</h2>
            <p className="contact-subtext">
                Let’s turn your ideas into reality with modern design and powerful development.
            </p>
            <div className="contact-cta-group">
                <button className="cta-main-button">
                    Contact Us
                </button>
                <button className="cta-secondary-button">
                    Schedule a Call
                </button>
            </div>
        </section>
    );
};
export default ContactSection;