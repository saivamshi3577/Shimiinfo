import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './HeroSection.css';

// 🚨 IMPORTANT: Replace with the actual path to your images
import HeroBackgroundImage from "../assets/tech-bg.jpg"; 
// Placeholder for the IT worker image on the right (similar to the screenshot)
import RightSideImage from "../assets/tech-bg.jpg"; 
// Note: You must have the GSAP Text Plugin installed for the most efficient typing effect. 
// If not installed, this relies on a CSS-based illusion, but we'll use a robust method here.

const DYNAMIC_WORDS = [
    "Digital Experiences", 
    "Web Platforms", 
    "Mobile Solutions", 
    "Future-Ready Apps"
];
const TRANSCRIPT_TEXT = "We build secure cloud networks that target your business needs";


// --- Component for the Animating Text Cards ---
const HighlightCard = ({ icon, title, description, className }) => {
    const cardRef = useRef(null);

    // GSAP Hover Effect: Zoom, lift, and color change
    const handleMouseEnter = () => {
        gsap.to(cardRef.current, { 
            scale: 1.05, 
            y: -10, 
            duration: 0.3, 
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
            backgroundColor: 'rgba(255, 255, 255, 0.95)' // Slight color change on hover
        });
        gsap.to(cardRef.current.querySelector('.card-title'), { 
            color: '#a27900', // Gold title on hover
            duration: 0.3 
        });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, { 
            scale: 1, 
            y: 0, 
            duration: 0.3, 
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white' // Revert background
        });
        gsap.to(cardRef.current.querySelector('.card-title'), { 
            color: '#1f2937', // Revert title color
            duration: 0.3 
        });
    };

    return (
        <div 
            ref={cardRef} 
            className={`highlight-card ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-icon">{icon}</div>
            <h4 className="card-title">{title}</h4>
            <p className="card-description">{description}</p>
            <p className="card-sub-description">A statistic that sets you apart from all of your competition</p>
        </div>
    );
};


// --- Main Hero Section Component ---
const HeroSection = () => {
    const heroRef = useRef();
    const dynamicWordRef = useRef();
    const transcriptRef = useRef();

    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    // --- Dynamic Text Animation Logic ---
    useEffect(() => {
        const interval = 2000;
        const rotationTl = gsap.timeline({ repeat: -1, repeatDelay: interval / 1000 });

        DYNAMIC_WORDS.forEach((word, index) => {
            const isGold = index % 2 !== 0;
            
            rotationTl.to(dynamicWordRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => {
                    setCurrentWordIndex(index);
                }
            }, index === 0 ? 2 : `+=${interval / 1000}`);

            rotationTl.to(dynamicWordRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power2.out',
                color: isGold ? '#a27900' : '#ffffff',
            });
        });

        return () => rotationTl.kill(); 
    }, []);

    // --- GSAP Initial Animations ---
    useGSAP(() => {
        const masterTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // 1. HEADER / NAV BAR Fade-in
        masterTl.from('.nav-item', { opacity: 0, y: -10, stagger: 0.1 }, 0.5);

        // 2. LEFT CONTENT STAGGER
        masterTl.from('.split-static-word', { y: 80, opacity: 0, duration: 0.8, stagger: 0.05 }, 1.0);
        masterTl.from('.dynamic-word-rotator', { opacity: 0, duration: 0.8 }, 1.3);

        // 3. TRANSCRIPT TYPING EFFECT
        masterTl.fromTo(transcriptRef.current, 
            { width: 0, opacity: 0 }, 
            { 
                width: '100%', 
                opacity: 1,
                duration: 1.5, 
                ease: "none",
            }, 1.5); 
        
        // 4. RIGHT IMAGE ENTRANCE (Matches image style)
        masterTl.from('.hero-right-image-container', {
            x: 100,
            opacity: 0,
            duration: 1.5,
            ease: 'power3.out',
        }, 1.0);

        // 5. CTA Button Reveal
        masterTl.from('.hero-cta-button', { scale: 0.8, opacity: 0, duration: 0.6 }, 2.0);

        // 6. HIGHLIGHTS BAR ENTRANCE (Staggered reveal after the hero)
        masterTl.from('.highlight-card', {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 1.0,
            scrollTrigger: {
                trigger: '.highlights-bar-container',
                start: 'top 95%', // Starts almost immediately after hero leaves
                toggleActions: 'play none none none',
            }
        }, 2.5); // Start after the main hero content is visible


        // --- Continuous Animations ---
        gsap.to('.background-image-style', { scale: 1.1, rotation: 0.05, duration: 10, ease: 'sine.inOut', repeat: -1, yoyo: true });

    }, { scope: heroRef });

    const highlightsData = [
        { icon: '🏆', title: 'Voted the leading IT company in Orlando', description: 'A statistic that sets you apart from all of your competition' },
        { icon: '🔒', title: 'Industry experts in network security', description: 'A statistic that sets you apart from all of your competition' },
        { icon: '🤝', title: 'Trusted by over 100 Florida businesses', description: 'A statistic that sets you apart from all of your competition' },
    ];

    return (
        <section ref={heroRef} className="hero-section-animated">
            
            {/* Background Image */}
            <div className="hero-background-img">
                <img src={HeroBackgroundImage} alt="Abstract Tech Background" className="background-image-style" />
                <div className="image-overlay"></div>
            </div>

            {/* --- TOP NAV BAR --- */}
            <header className="main-header">
                <div className="header-top-bar">
                    <span className="nav-item header-meta">Serving Central Florida Since 2002</span>
                    <span className="nav-item header-meta right-contact">Contact Us Today <a href="tel:8885554342">888.555.4342</a></span>
                </div>
                <nav className="header-nav-bar">
                    <span className="nav-item header-logo">CloudSecure IT</span>
                    <div className="nav-links">
                        {['Home', 'Services', 'About', 'Blog', 'Styles'].map((link, index) => (
                            <a href={`#${link.toLowerCase()}`} key={link} className={`nav-item nav-link ${link === 'Home' ? 'active-link' : ''}`}>{link}</a>
                        ))}
                        <a href="#contact" className="nav-item nav-link contact-button">Connect</a>
                    </div>
                </nav>
            </header>

            <div className="hero-grid-container">
                
                {/* --- LEFT COLUMN: Text Content --- */}
                <div className="hero-content-left">
                    <h1 className="hero-heading-main">
                        <span className="static-heading-part">
                            {/* Static part: "Managed IT Solutions for" */}
                            Managed IT Solutions for
                        </span>
                        {/* Dynamic Part: Rotates text and changes color */}
                        <span ref={dynamicWordRef} className="dynamic-word-rotator">
                            {DYNAMIC_WORDS[currentWordIndex]}
                        </span>
                    </h1>

                    {/* Transcript Typing Effect Area */}
                    <p className="transcript-text-container">
                        <span ref={transcriptRef} className="transcript-text-inner">
                            {TRANSCRIPT_TEXT}
                        </span>
                        <span className="transcript-cursor">|</span> 
                    </p>
                    
                    {/* CTA Button */}
                    <button className="hero-cta-button primary-cta">
                        Schedule a Consultation
                    </button>
                </div>

                {/* --- RIGHT COLUMN: Image Area --- */}
                <div className="hero-right-image-container">
                    <img src={RightSideImage} alt="IT workers collaborating" className="hero-right-image" />
                </div>
            </div>

            {/* --- HIGHLIGHTS BAR / 3 CARDS --- */}
            <div className="highlights-bar-container">
                <h3 className="highlights-bar-title">Highlights bar</h3>
                <div className="highlights-grid">
                    {highlightsData.map((data, index) => (
                        <HighlightCard key={index} {...data} className={`card-${index}`} />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default HeroSection;