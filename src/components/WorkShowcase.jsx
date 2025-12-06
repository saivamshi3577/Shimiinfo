// This component should be in ./WorkShowcase.jsx
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Card component with hover animation
const ProjectCard = ({ title, tags }) => {
    const cardRef = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(cardRef.current, { scale: 1.03, y: -5, duration: 0.3 });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, { scale: 1, y: 0, duration: 0.3 });
    };

    return (
        <div 
            ref={cardRef}
            className="project-card" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-image-placeholder"></div>
            <h4 className="card-title">{title}</h4>
            <div className="card-tags">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
        </div>
    );
};

const WorkShowcase = ({ className }) => {
    const showcaseRef = useRef();

    useGSAP(() => {
        // Staggered fade/slide for all cards in the section
        gsap.from(showcaseRef.current.querySelectorAll('.project-card'), {
            opacity: 0,
            y: 50,
            scale: 0.95,
            stagger: 0.1, // Each card animates shortly after the previous one
            duration: 0.8,
            scrollTrigger: {
                trigger: showcaseRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });
    }, { scope: showcaseRef });


    const projects = [
        { title: 'Web App Dashboard', tags: ['React', 'Next.js', 'UI/UX'] },
        { title: 'E-commerce Platform', tags: ['Node.js', 'E-commerce'] },
        { title: 'Mobile App UI', tags: ['Mobile App', 'Figma', 'UI/UX'] },
        { title: 'Branding & UI kits', tags: ['Design', 'Branding'] },
    ];

    return (
        <section ref={showcaseRef} className={`${className} work-showcase-section`}>
            <h2 className="work-heading">Our Recent Work</h2>
            
            <div className="work-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>

            <button className="work-cta">View All Our Work</button>
        </section>
    );
};
export default WorkShowcase;