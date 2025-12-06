// This component should be in ./StatsSection.jsx
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// ScrollTrigger is registered globally in HomePage.jsx

// FIX: Import ScrollTrigger here just in case, though it should be global
import ScrollTrigger from 'gsap/ScrollTrigger'; 
gsap.registerPlugin(ScrollTrigger); 


const StatItem = ({ icon, endValue, label, unit = '' }) => {
    const numRef = useRef(null);
    const scopeRef = useRef(); // A general ref for the component scope

    useGSAP(() => {
        
        // 1. Define the object that will hold the animating value
        const counter = { value: 0 }; 

        // 2. We link the animation to ScrollTrigger
        gsap.to(
            counter, // Animate the simple 'counter' object
            {
                value: endValue, // Target value
                duration: 2.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: numRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
                onUpdate: () => {
                    // FIX: Directly read the 'value' property from the 'counter' object
                    if (numRef.current) {
                        numRef.current.textContent = Math.ceil(counter.value) + unit;
                    }
                },
            }
        );

        // Simple reveal for the container
        gsap.from(numRef.current.parentElement, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: numRef.current.parentElement,
                start: "top 95%",
                toggleActions: "play none none none",
            }
        });

    }, { scope: scopeRef }); // Use the scopeRef for the component

    return (
        // Use scopeRef on the parent element for component scoping
        <div className="stat-item" ref={scopeRef}> 
            <div className="stat-icon">{icon}</div>
            <div className="stat-number" ref={numRef}>0{unit}</div>
            <p className="stat-label">{label}</p>
        </div>
    );
};


const StatsSection = ({ className }) => {
    const achievements = [
        { icon: '🚀', endValue: 30, label: 'Projects Delivered', unit: '+' },
        { icon: '💼', endValue: 15, label: 'Active Clients', unit: '+' },
        { icon: '🧑‍💻', endValue: 5, label: 'Years Combined Expertise', unit: '+' },
        { icon: '🌍', endValue: 4, label: 'Clients Across Countries', unit: '' },
    ];

    return (
        <section className={`${className} stats-section`}>
            <h2 className="stats-heading">Our Achievements</h2>
            <div className="stats-grid">
                {achievements.map((stat, index) => (
                    <StatItem key={index} {...stat} />
                ))}
            </div>
        </section>
    );
};
export default StatsSection;