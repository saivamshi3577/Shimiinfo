import React, { useState } from 'react';
import './Portfolio.css';
import Header from './Header'; 
import Footer from './Footer'; 

// --- Image Imports (assuming standard asset structure) ---
import Project1 from '../assets/project-web.jpg';
import Project2 from '../assets/project-mobile.jpg';
import Project3 from '../assets/project-hr.jpg';
import Project4 from '../assets/project-data.jpg';
import Project5 from '../assets/project-mobile.jpg';
import Project6 from '../assets/project-mobile.jpg';
import CaseStudyFocusImage from '../assets/project-mobile.jpg'; // New image import

// --------------------------------------------------------
// DATA ARRAYS (EXPANDED)
// --------------------------------------------------------

const allProjects = [
    { id: 1, title: 'Enterprise CRM Platform', category: 'Web', tags: ['SaaS', 'React', 'Node.js'], image: Project1, description: 'Developed a robust, scalable CRM to manage sales pipelines and customer relations.' },
    { id: 2, title: 'Fitness Tracker App', category: 'Mobile', tags: ['ReactNative', 'UX/UI', 'Fitness'], image: Project2, description: 'A cross-platform mobile application for tracking workouts and nutrition.' },
    { id: 3, title: 'Global Talent Portal', category: 'HR', tags: ['HR Tech', 'AI Matching', 'GCP'], image: Project3, description: 'An AI-powered system for global recruitment and talent matching.' },
    { id: 4, title: 'Data Visualization Dashboard', category: 'Web', tags: ['Analytics', 'D3.js', 'Python'], image: Project4, description: 'Real-time dashboard for complex business intelligence reporting.' },
    { id: 5, title: 'B2B E-Commerce Solution', category: 'Web', tags: ['E-Commerce', 'Next.js', 'Stripe'], image: Project5, description: 'High-performance e-commerce gateway for wholesale distributors.' },
    { id: 6, title: 'Logistics Optimization Tool', category: 'HR', tags: ['Logistics', 'Automation', 'Cloud'], image: Project6, description: 'Internal tool to optimize route planning and resource allocation.' },
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
    "Their HR portal cut our manual processing time by over 40%. True experts in enterprise integration."
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

    const categories = ['All', 'Web', 'Mobile', 'HR'];

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
                    <h1>Our  Digital Portfolio </h1>
                    <p className="subtitle animate-fade-in-up">Showcasing innovation and measurable results across web, mobile, and enterprise solutions.</p>
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
                                    <button className="secondary-btn">View Case Study</button>
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
            <section className="cta-banner cta-portfolio">
                <div className="container cta-content">
                    <h2>Ready to Create Your Own Success Story?</h2>
                    <p>Let's discuss how Shimi-Infotech can deliver the next innovative solution for your business.</p>
                    <button className="primary-btn dark-btn bounce-on-hover">Start a Project Today</button>
                </div>
            </section>

            <Footer />

        </div>
    );
};

export default PortfolioPage;