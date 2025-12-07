import React, { useState, useEffect } from 'react';
import './About.css';
import Header from './Header'; 
import Footer from './Footer';

// --------------------------------------------------------
// 1. IMAGE IMPORTS (Assuming assets are in '../assets/')
// --------------------------------------------------------
import FeatureGroupImage from '../assets/feature-group.jpg';

// Core Values Icons
import IconInnovation from '../assets/process-image.jpg'; // Placeholder for Innovation
import IconPartnership from '../assets/approach-team.jpg'; // Placeholder for Partnership
import IconExcellence from '../assets/icon-consulting.png'; // Placeholder for Excellence

// Tech Stack Icons
import IconWebCloud from '../assets/icon-web.png'; // Placeholder for Web & Cloud
import IconMobile from '../assets/icon-mobile.png'; // Placeholder for Mobile
import IconDataAI from '../assets/post7.jpg'; // Placeholder for Data & AI

// --------------------------------------------------------
// 2. DATA ARRAYS (Using Image Paths)
// --------------------------------------------------------
const coreValues = [
 { icon: IconInnovation, title: 'Innovation First', description: 'Driving progress through cutting-edge technology and creative problem-solving.' },
{ icon: IconPartnership, title: 'Client Partnership', description: 'Building long-term success through trust, transparency, and deep collaboration.' },
 { icon: IconExcellence, title: 'Excellence in Execution', description: 'Committing to high standards and flawless delivery across all projects.' },
];

const techStack = [
 { icon: IconWebCloud, title: 'Web & Cloud', description: 'React, Node.js, Python, AWS/GCP' },
 { icon: IconMobile, title: 'Mobile', description: 'React Native, Flutter, Swift/Kotlin' },
 { icon: IconDataAI, title: 'Data & AI', description: 'TensorFlow, SQL/NoSQL, Data Science' },
];

const strategyPhases = [
 { number: 1, title: 'Discovery & Planning', detail: 'Defining strategic goals, technical scope, and architectural requirements.' },
 { number: 2, title: 'Agile Design & UX', detail: 'Rapid prototyping, wireframing, and iterative user experience validation.' },
 { number: 3, title: 'Development Sprints', detail: 'Continuous integration, testing, and feature delivery in short cycles.' },
 { number: 4, title: 'Launch, Monitor & Scale', detail: 'Deployment, continuous system monitoring, and future scaling optimization.' },
];

const timeline = [
 { year: 2012, event: 'Shimi-Infotech Founded: Launched with a mission to simplify enterprise software.' },
 { year: 2019, event: 'Expanded Services: Introduced dedicated Mobile App Development division.' },
 { year: 2020, event: 'Global Recognition: Won "Fastest Growing IT Solutions Provider" award.' },
 { year: 2024, event: 'Future Forward: Launched AI-driven HR solutions pilot program.' },
];


const AboutPage = () => {
    return (
        <div className="about-page">
            
            <Header /> 
            
            {/* --- 1. Breadcrumb/Title Header --- */}
            <section className="about-hero-header">
                <div className="container">
                    <h1>About</h1>
                    <p className="breadcrumb">Home / <span>About</span></p>
                </div>
            </section>

            {/* --- 2. Company Vision/Introduction --- */}
            <section className="about-intro-section">
                <div className="container intro-content-wrapper">
                    <div className="intro-image animate-fade-in-up">
                        <img src={FeatureGroupImage} alt="Diverse team working collaboratively" className="feature-group-image" />
                    </div>
                    <div className="intro-text animate-slide-left">
                        <span className="section-subtitle"> \ About us \ </span>
                        <h2>One of the  Fastest Way  to  Develop Your Business </h2>
                        <p>
                            Shimi-Infotech is founded on the belief that digital transformation should be accessible, effective, and perfectly aligned with business goals. We are a team of strategic thinkers, designers, and developers dedicated to delivering robust Web, Mobile, and HR solutions that drive tangible growth.
                        </p>
                        <p className="contact-prompt">
                            Get Instant Professional Advice: <a href="tel:+15551234567">   +44-208 637 3036 </a>
                        </p>
                    </div>
                </div>
            </section>

            {/* --- 3. Core Values (FIXED ICONS) --- */}
            <section className="values-section">
                <div className="container">
                    <h2 className="section-title animate-fade-in-up">Our Core Values</h2>
                    <div className="values-grid">
                        {coreValues.map((value, index) => (
                            <div className="value-card animate-zoom-in" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                                <span className="value-icon">
                                    <img src={value.icon} alt={value.title} className="icon-image" /> {/* FIXED HERE */}
                                </span>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* --- NEW 4. Technology Focus (FIXED ICONS) --- */}
            <section className="tech-stack-section">
                <div className="container">
                    <h2 className="section-title animate-fade-in-up">Technology We Master</h2>
                    <p className="tech-intro">We build future-proof solutions by mastering the leading technologies across web, mobile, and data ecosystems.</p>
                    <div className="tech-icon-grid">
                        {techStack.map((tech, index) => (
                            <div className="tech-card animate-slide-up" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                                <span className="tech-icon">
                                    <img src={tech.icon} alt={tech.title} className="icon-image" /> {/* FIXED HERE */}
                                </span>
                                <h4>{tech.title}</h4>
                                <p>{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- NEW 5. Client Success Strategy --- */}
            <section className="strategy-section">
                <div className="container">
                    <h2 className="section-title animate-fade-in-up">Our Client Success Strategy</h2>
                    <div className="strategy-grid">
                        {strategyPhases.map((phase, index) => (
                            <div className="strategy-phase animate-fade-in-up" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                                <div className="phase-number pulse-on-hover">{phase.number}</div>
                                <h3>{phase.title}</h3>
                                <p>{phase.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* --- 6. Milestones/Timeline (Re-numbered) --- */}
{/*             <section className="timeline-section">
                <div className="container">
                    <h2 className="section-title animate-fade-in-up">Our Journey So Far</h2>
                    <div className="timeline-wrapper">
                        {timeline.map((item, index) => (
                            <div className="timeline-item" key={index}>
                                <div className="timeline-dot animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}></div>
                                <div className="timeline-content animate-slide-right" style={{ animationDelay: `${index * 0.2}s` }}>
                                    <div className="timeline-year">{item.year}</div>
                                    <p>{item.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* --- 8. CTA / Video Prompt --- */}
{/*             <section className="cta-video-section">
                <div className="container cta-content">
                    <h2>"Some of the History of Our Company is that We are Catching up Through Video"</h2>
                    <button className="primary-btn dark-btn pulse-on-hover">
                        Watch Our Story &rarr;
                    </button>
                </div>
            </section> */}

            <Footer />

        </div>
    );
};

export default AboutPage;