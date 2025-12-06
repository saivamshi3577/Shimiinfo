import React, { useState } from 'react';
import './Services.css';
import Header from './Header'; 
import Footer from './Footer'; 

// --- Image Imports (assuming standard asset structure) ---
import ServiceHeroImage from '../assets/service-hero.jpg';
import ProcessImage from '../assets/process-image.jpg';

// --------------------------------------------------------
// DATA ARRAYS
// --------------------------------------------------------

const technologyStack = [
    { icon: '⚛️', name: 'React/Next.js', category: 'Frontend' },
    { icon: '🐍', name: 'Python/Django', category: 'Backend' },
    { icon: '📱', name: 'React Native', category: 'Mobile' },
    { icon: '☁️', name: 'AWS/GCP', category: 'Cloud' },
    { icon: '📊', name: 'PostgreSQL/MongoDB', category: 'Database' },
    { icon: '🔒', name: 'Cybersecurity', category: 'Security' },
];

const serviceDetails = {
    web: {
        title: "Custom Web Solutions",
        content: "We deliver scalable and performance-driven web platforms, focusing on robust architecture and exceptional user experience. Our solutions range from enterprise applications to dynamic e-commerce portals.",
        features: ["Enterprise Web App Development", "E-Commerce Platforms (Shopify, Custom)", "API Development & Integration", "UX/UI Design & Prototyping"]
    },
    mobile: {
        title: "Innovative Mobile Applications",
        content: "Reach your audience anywhere with native and cross-platform mobile apps. We prioritize speed, security, and a fluid, intuitive interface across iOS and Android devices.",
        features: ["Native iOS & Android Development", "Cross-Platform (Flutter/RN)", "App Store Optimization (ASO)", "Mobile UX/UI Design"]
    },
    hr: {
        title: "Intelligent HR & Enterprise Software",
        content: "Automate complex business processes and empower your HR team with custom tools. Solutions include payroll integration, talent management systems, and employee portals.",
        features: ["Talent Management Systems (TMS)", "Custom CRM Development", "Payroll & Benefits Integration", "Employee Self-Service Portals"]
    }
};

const processSteps = [
    { num: 1, title: "Discovery & Strategy", detail: "Define scope, goals, and technical requirements." },
    { num: 2, title: "Design & Prototyping", detail: "Create wireframes, mockups, and user flows." },
    { num: 3, "title": "Agile Development", detail: "Iterative sprints, coding, and continuous testing." },
    { num: 4, title: "QA & Deployment", detail: "Thorough quality checks and seamless launch." },
    { num: 5, "title": "Support & Scaling", detail: "Post-launch maintenance and optimization." },
];

// --------------------------------------------------------
// TAB COMPONENT
// --------------------------------------------------------

const ServiceTabs = () => {
    const [activeTab, setActiveTab] = useState('web');
    const currentService = serviceDetails[activeTab];

    return (
        <section className="service-tabs-section">
            <div className="container">
                <h2 className="section-title animate-fade-in-up">Services In Depth</h2>
                <div className="tab-buttons animate-fade-in-up">
                    {Object.keys(serviceDetails).map(key => (
                        <button
                            key={key}
                            className={`tab-btn ${activeTab === key ? 'active' : ''}`}
                            onClick={() => setActiveTab(key)}
                        >
                            {serviceDetails[key].title}
                        </button>
                    ))}
                </div>

                <div className="tab-content-container">
                    <div className="tab-content animate-slide-right-slow">
                        <h3>{currentService.title}</h3>
                        <p>{currentService.content}</p>
                        
                        <ul className="feature-list">
                            {currentService.features.map((feature, index) => (
                                <li key={index} className="feature-item">
                                    <span className="check-icon">✓</span> {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="primary-btn pulse-on-hover">Start {currentService.title.split(' ')[0]} Project</button>
                    </div>
                </div>
            </div>
        </section>
    );
};


// --------------------------------------------------------
// MAIN PAGE COMPONENT
// --------------------------------------------------------

const ServicesPage = () => {
    return (
        <div className="services-page">
            
            <Header />

            {/* --- 1. Hero Header --- */}
            <section className="services-hero-header">
                <div className="container">
                    <h1>Our Services Portfolio</h1>
                    <p className="breadcrumb">Home / <span>Services</span></p>
                    <div className="hero-content-wrapper">
                        <div className="hero-text animate-slide-left">
                            <h2>Building the  Digital Future  Your Business Needs</h2>
                            <p>From complex enterprise systems to elegant mobile experiences, Shimi-Infotech provides end-to-end digital mastery.</p>
                            <button className="secondary-btn pulse-on-hover">View Case Studies</button>
                        </div>
                        <div className="hero-image-container animate-fade-in">
                            <img src={ServiceHeroImage} alt="Digital solutions overview" className="service-hero-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 2. Detailed Service Breakdown (Tabs) --- */}
            <ServiceTabs />

            {/* --- 3. Technology Grid --- */}
            <section className="tech-stack-services-section">
                <div className="container">
                    <h2 className="section-title animate-fade-in-up">Our Expertise Stack</h2>
                    <p className="stack-subtitle">We don't just use technology; we master it to deliver innovation.</p>
                    <div className="tech-stack-grid">
                        {technologyStack.map((tech, index) => (
                            <div className="tech-card animate-zoom-in" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                                <span className="tech-icon">{tech.icon}</span>
                                <h4>{tech.name}</h4>
                                <p className="tech-category">{tech.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. Our Process --- */}
            <section className="process-section">
                <div className="container">
                    <h2 className="section-title animate-fade-in-up">Our Proven Delivery Process</h2>
                    <div className="process-wrapper">
                        <div className="process-steps">
                            {processSteps.map((step, index) => (
                                <div className="step-card animate-slide-right" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                                    <div className="step-number">{step.num}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.detail}</p>
                                </div>
                            ))}
                        </div>
                        <div className="process-image-container animate-fade-in">
                            <img src={ProcessImage} alt="Project timeline visualization" className="process-image" />
                        </div>
                    </div>
                </div>
            </section>


            {/* --- 5. Final CTA --- */}
            <section className="cta-banner cta-service-page">
                <div className="container cta-content">
                    <h2>Ready to Transform Your Business?</h2>
                    <p>Discuss your project needs with our solution architects today.</p>
                    <button className="primary-btn dark-btn bounce-on-hover">Schedule a Free Consultation</button>
                </div>
            </section>

            <Footer />

        </div>
    );
};

export default ServicesPage;