import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import Header from './Header'; 
import Footer from './Footer'; 

// --- Image Imports (assuming standard asset structure) ---
import Project1 from '../assets/icon-web.png';
import Project2 from '../assets/icon-mobile.png';
import Project3 from '../assets/icon-hr.png';
import Project4 from '../assets/post4.jpg';
import Project5 from '../assets/post5.jpg';
import Project6 from '../assets/post7.jpg';
// New imports for Staffing and Consulting projects (reusing existing images for example)
import Project7 from '../assets/post4.jpg'; 
import Project8 from '../assets/post5.jpg'; 
import Project9 from '../assets/digitalmarketing.png'
import CaseStudyFocusImage from '../assets/process-image.jpg'; // New image import

// --------------------------------------------------------
// DATA ARRAYS (FINAL EXPANSION)
// --------------------------------------------------------

const allProjects = [
    { id: 1, title: 'Enterprise CRM Platform', category: 'Web', tags: ['SaaS', 'React', 'Node.js'], image: Project1, description: 'Developed a robust, scalable CRM to manage sales pipelines and customer relations.' },
    { id: 2, title: 'Fitness Tracker App', category: 'Mobile', tags: ['ReactNative', 'UX/UI', 'Fitness'], image: Project2, description: 'A cross-platform mobile application for tracking workouts and nutrition.' },
    { id: 3, title: 'Global Talent Portal', category: 'HR', tags: ['HR Tech', 'AI Matching', 'GCP'], image: Project3, description: 'An AI-powered system for global recruitment and talent matching.' },
    // New Project 1: IT Staffing (Existing)
    { id: 7, title: 'Scale-up Team Placement', category: 'Staffing', tags: ['Direct Hire', 'DevOps', 'Contract-to-Hire'], image: Project7, description: 'Successfully placed a full-stack engineering team to accelerate a fintech scale-up project.' },
    // New Project 2: IT Consulting (Existing)
    { id: 8, title: 'Cloud Migration Strategy', category: 'Consulting', tags: ['AWS', 'Strategy', 'Optimization'], image: Project8, description: 'Provided a comprehensive consulting roadmap for migrating legacy infrastructure to AWS, achieving 30% cost savings.' },
    { id: 4, title: 'Data Visualization Dashboard', category: 'Web', tags: ['Analytics', 'D3.js', 'Python'], image: Project4, description: 'Real-time dashboard for complex business intelligence reporting.' },
    { id: 5, title: 'B2B E-Commerce Solution', category: 'Web', tags: ['E-Commerce', 'Next.js', 'Stripe'], image: Project5, description: 'High-performance e-commerce gateway for wholesale distributors.' },
    { id: 6, title: 'Logistics Optimization Tool', category: 'HR', tags: ['Logistics', 'Automation', 'Cloud'], image: Project6, description: 'Internal tool to optimize route planning and resource allocation.' },
    
    // --- NEW PROJECT: DIGITAL MARKETING (ID 9) ---
    { id: 9, title: 'Global SEO and Content Strategy', category: 'Digital Marketing', tags: ['SEO', 'Content', 'Analytics', 'Visibility'], image: Project9, description: 'Developed and executed a comprehensive SEO and content strategy resulting in a 60% increase in organic traffic.' },

    // --- NEW PROJECT: IT STAFFING (ID 10) ---
    // Note: I'm keeping the three new projects added in the previous step to maintain the full data set.
    { id: 10, title: 'Managed Services & IT Outsourcing', category: 'Staffing', tags: ['Managed Team', 'Outsourcing', 'Support', 'DevOps'], image: Project2, description: 'Provided a fully managed, dedicated offshore team for 24/7 application maintenance and feature development.' },

    // --- NEW PROJECT: IT CONSULTING (ID 11) ---
    { id: 11, title: 'Cybersecurity Posture Assessment', category: 'Consulting', tags: ['Security', 'Risk Assessment', 'Compliance', 'Audit'], image: Project3, description: 'Conducted a full cybersecurity assessment and developed a strategy to achieve ISO 27001 compliance.' },
];

const impactMetrics = [
    { metric: '35%', detail: 'Reduction in operational cost' },
    { metric: '99.9%', detail: 'Uptime guarantee for all deployments' },
    { metric: '+4.8', detail: 'Average user satisfaction score' },
    { metric: '60+', detail: 'Successful project launches last year' },
];

const caseStudyFocus = {
    title: "Revolutionizing Warehouse Management",
    project: "Logistics Optimization Tool",
    impact: "Achieved 25% faster inventory cycles and 15% fewer errors within the first quarter.",
    details: "We developed a bespoke, cloud-native warehouse management system (WMS) integrating AI algorithms for real-time pathfinding and dynamic inventory allocation. This project highlights our commitment to solving complex operational challenges with intelligent software.",
    image: CaseStudyFocusImage
};

const clientTestimonials = [
    "Shimi-Infotech delivered a scalable solution that fundamentally changed how we manage our supply chain. Highly recommend!",
    "The attention to detail in the mobile UX was exceptional. Our user adoption rates doubled immediately.",
    "Their HR portal cut our manual processing time by over 40%. True experts in enterprise integration.",
    "The **Consulting team** provided clear strategic direction, and the **Staffing service** quickly placed high-quality engineers who were a perfect cultural fit."
];

// --------------------------------------------------------
// CORE COMPONENT
// --------------------------------------------------------

const PortfolioPage = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const filteredProjects = activeFilter === 'All'
        ? allProjects
        : allProjects.filter(project => project.category === activeFilter);

    // Categories list now includes Digital Marketing
    const categories = ['All', 'Web', 'Mobile', 'HR', 'Staffing', 'Consulting', 'Digital Marketing'];

    // Testimonial cycling logic
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % clientTestimonials.length);
        }, 5000); // Cycles every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="portfolio-page">
            
            <Header /> 
            
            {/* --- 1. Portfolio Header --- */}
            <section className="portfolio-hero-header">
                <div className="container">
                    <h1>Our Digital Portfolio </h1>
                    <p className="subtitle animate-fade-in-up">Showcasing innovation and measurable results across web, mobile, enterprise solutions, **IT Staffing, and strategic Consulting**.</p>
                </div>
            </section>

            {/* --- 2. Testimonial Bar (Animated Slider) --- */}
            <section className="testimonial-bar">
                <div className="container">
                    <div className="testimonial-text-wrapper">
                        <span className="quote-mark">❝</span>
                        <p className="testimonial-text animate-slide-in-up-bar" key={currentTestimonial}>
                            {clientTestimonials[currentTestimonial]}
                        </p>
                    </div>
                </div>
            </section>

            {/* --- 3. Project Filter & Grid --- */}
            <section className="project-filter-section">
                <div className="container">
                    <div className="filter-buttons animate-fade-in-up">
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                className={`filter-btn pulse-on-hover ${activeFilter === category ? 'active' : ''}`}
                                onClick={() => setActiveFilter(category)}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="project-grid">
                        {filteredProjects.map((project, index) => (
                            <div 
                                className="project-card animate-zoom-in" 
                                key={project.id} 
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="card-image-wrapper">
                                    <img src={project.image} alt={project.title} className="project-image" />
                                </div>
                                <div className="card-content">
                                    <span className="project-category">{project.category}</span>
                                    <h4>{project.title}</h4>
                                    <div className="project-tags">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                {/* Animated Hover Overlay */}
                                <div className="card-overlay">
                                    <h5>{project.title}</h5>
                                    <p>{project.description}</p>
                                    
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <p className="no-results">No projects found in this category.</p>
                    )}
                </div>
            </section>
            
            {/* --- NEW 4. Case Study Focus --- */}
            <section className="case-study-focus-section">
                <div className="container focus-content-wrapper">
                    <div className="focus-text animate-slide-left">
                        <span className="section-subtitle"> \ Case Study Spotlight \ </span>
                        <h2>{caseStudyFocus.title}</h2>
                        <p className="focus-detail">{caseStudyFocus.details}</p>
                        <div className="focus-impact-bar">
                            <span className="impact-text">Key Result:</span>
                            <span className="impact-highlight">{caseStudyFocus.impact}</span>
                        </div>
                        <button className="primary-btn pulse-on-hover">Read Full Case Study</button>
                    </div>
                    <div className="focus-image-container animate-fade-in">
                        <img src={caseStudyFocus.image} alt={caseStudyFocus.title} className="focus-image" />
                    </div>
                </div>
            </section>


            {/* --- 5. Impact Metrics --- */}
            <section className="metrics-section">
                <div className="container">
                    <h2 className="section-title animate-fade-in-up">Impact and Results</h2>
                    <div className="metrics-grid">
                        {impactMetrics.map((item, index) => (
                            <div className="metric-card animate-slide-up" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                                <div className="metric-value">{item.metric}</div>
                                <p className="metric-detail">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 6. Final CTA --- */}
            {/* <section className="cta-banner cta-portfolio">
                <div className="container cta-content">
                    <h2>Ready to Create Your Own Success Story?</h2>
                    <p>Let's discuss how Shimi-Infotech can deliver the next innovative solution, provide expert consultation, or secure the perfect talent for your business.</p>
                    <button className="primary-btn dark-btn bounce-on-hover">Start a Project Today</button>
                </div>
            </section> */}

            <Footer />

        </div>
    );
};

export default PortfolioPage;