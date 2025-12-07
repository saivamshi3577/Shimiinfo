import React, { useState, useEffect } from 'react';
import './Services.css';
import Header from './Header';
import Footer from './Footer';

// --- Image Imports (assuming standard asset structure) ---
import ServiceHeroImage from '../assets/service-hero.jpg';
import ProcessImage from '../assets/process-image.jpg';

// --- SERVICE ICONS ---
import IconWeb from '../assets/icon-web.png';
import IconMobile from '../assets/icon-mobile.png';
import IconHR from '../assets/icon-hr.png';
import IconConsulting from '../assets/icon-consulting.png';
import IconStaffing from '../assets/icon-staffing.png';
import IconDigitalMarketing from "../assets/digitalmarketing.png";

// --- TECHNOLOGY STACK ICONS ---
import IconReact from '../assets/tech-react.png';
import IconPython from '../assets/tech-python.png';
import IconRN from '../assets/tech-rn.png';
import IconCloud from '../assets/tech-cloud.png';
import IconDatabase from '../assets/tech-database.png';
import IconSecurity from '../assets/tech-security.png';
// --------------------------------------------------------
// DATA ARRAYS (Kept the same)
// --------------------------------------------------------
const technologyStack = [
    { icon: IconReact, name: 'React/Next.js', category: 'Frontend' },
    { icon: IconPython, name: 'Python/Django', category: 'Backend' },
    { icon: IconRN, name: 'React Native', category: 'Mobile' },
    { icon: IconCloud, name: 'AWS/GCP', category: 'Cloud' },
    { icon: IconDatabase, name: 'PostgreSQL/MongoDB', category: 'Database' },
    { icon: IconSecurity, name: 'Cybersecurity', category: 'Security' },
];

const serviceDetails = {
    web: {
        title: "Custom Web Solutions",
        icon: IconWeb,
        content: "We deliver scalable and performance-driven web platforms, focusing on robust architecture and exceptional user experience. Our solutions range from enterprise applications to dynamic e-commerce portals.",
        features: ["Enterprise Web App Development", "E-Commerce Platforms (Shopify, Custom)", "API Development & Integration", "UX/UI Design & Prototyping"]
    },
    mobile: {
        title: "Innovative Mobile Applications",
        icon: IconMobile,
        content: "Reach your audience anywhere with native and cross-platform mobile apps. We prioritize speed, security, and a fluid, intuitive interface across iOS and Android devices.",
        features: ["Native iOS & Android Development", "Cross-Platform (Flutter/RN)", "App Store Optimization (ASO)", "Mobile UX/UI Design"]
    },
    hr: {
        title: "Intelligent HR & Enterprise Software",
        icon: IconHR,
        content: "Automate complex business processes and empower your HR team with custom tools. Solutions include payroll integration, talent management systems, and employee portals.",
        features: ["Talent Management Systems (TMS)", "Custom CRM Development", "Payroll & Benefits Integration", "Employee Self-Service Portals"]
    },
    'it-consulting': {
        title: "Strategic IT Consulting",
        icon: IconConsulting,
        content: "Gain a competitive edge with expert technology roadmaps. We analyze your current infrastructure, identify key efficiencies, and guide your digital transformation journey.",
        features: ["Digital Transformation Strategy", "Cloud Migration Planning (AWS, Azure)", "Technology Infrastructure Audits", "IT Risk & Governance Consulting"]
    },
    'it-staffing': {
        title: "Specialized IT Staffing",
        icon: IconStaffing,
        content: "Rapidly scale your team with highly-vetted technical talent. We provide flexible staffing solutions, from single specialized roles to dedicated project teams.",
        features: ["Contract & Permanent Placement", "Dedicated Offshore Teams", "Technical Skill Vetting", "IT Project Management Staff"]
    },
    'digital-marketing': {
        title: "Performance Digital Marketing",
        icon: IconDigitalMarketing,
        content: "Drive measurable growth and expand your online visibility through targeted digital campaigns. We leverage data and creativity to connect you with the right audience.",
        features: ["Search Engine Optimization (SEO)", "Pay-Per-Click (PPC) Management", "Content Marketing Strategy", "Social Media Marketing (SMM)"]
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
// TAB COMPONENT (MODIFIED FOR MOBILE DROPDOWN)
// --------------------------------------------------------

const ServiceTabs = () => {
    const [activeTab, setActiveTab] = useState('web');
    const currentService = serviceDetails[activeTab];
    const [tabKey, setTabKey] = useState(0);
    const [isMobile, setIsMobile] = useState(false); // New state for responsiveness

    // Helper to check screen size
    useEffect(() => {
        const checkMobile = () => {
            // Define mobile break point (e.g., 768px)
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile(); // Initial check
        window.addEventListener('resize', checkMobile); // Listen for resize

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleTabClick = (key) => {
        if (key !== activeTab) {
            setActiveTab(key);
            setTabKey(prevKey => prevKey + 1);
        }
    };

    const handleDropdownChange = (event) => {
        handleTabClick(event.target.value);
    };

    // Helper component to display the Icon Image
    const IconImage = ({ iconPath, altText }) => {
        return (
            // Added mobile-specific class for better control
            <div className="service-icon-image-wrapper">
                <img src={iconPath} alt={altText} className="service-icon-image" />
            </div>
        );
    };


    return (
        <section className="service-tabs-section">
            <div className="container">
                <h2 className="section-title animate-fade-in-up">Services In Depth</h2>

                {/* --- Tab Buttons (Desktop/Tablet View) --- */}
                <div className="tab-buttons tab-buttons-desktop animate-fade-in-up">
                    {Object.keys(serviceDetails).map(key => (
                        <button
                            key={key}
                            className={`tab-btn ${activeTab === key ? 'active' : ''}`}
                            onClick={() => handleTabClick(key)}
                        >
                            {serviceDetails[key].title}
                        </button>
                    ))}
                </div>

                {/* --- Dropdown Select (Mobile View) --- */}
                {isMobile && (
                    <div className="tab-dropdown-mobile animate-fade-in-up">
                        <select
                            className="mobile-service-select"
                            value={activeTab}
                            onChange={handleDropdownChange}
                        >
                            {Object.keys(serviceDetails).map(key => (
                                <option key={key} value={key}>
                                    {serviceDetails[key].title}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                <div className="tab-content-container" key={tabKey}>
                    <IconImage
                        iconPath={currentService.icon}
                        altText={`${currentService.title} Icon`}
                    />

                    <div className="tab-content animate-slide-right-slow">
                        <h3>{currentService.title}</h3>
                        <p>{currentService.content}</p>

                        <ul className="feature-list">
                            {currentService.features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="feature-item animate-feature-stagger"
                                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                                >
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
// MAIN PAGE COMPONENT (Kept the same)
// --------------------------------------------------------

const ServicesPage = () => {
    // The Hero content was missing in the original code, but I've added a basic structure here
    // to apply the necessary responsiveness classes.
    return (
        <div className="services-page">

            <Header />

            <section className="services-hero-header">
                <div className="container">
                    <h1 className="animate-fade-in-up">Our Services & Expertise</h1>
                    <p className="breadcrumb animate-fade-in-up">Home &gt; <span>Services</span></p>

                    <div className="hero-content-wrapper">
                        <div className="hero-text animate-slide-left">
                            <h2>Building the Future, Together.</h2>
                            <p>From complex enterprise systems to intuitive mobile apps, we deliver end-to-end technology solutions that drive business outcomes. Explore our core services below.</p>
                            <button className="primary-btn">Get a Free Consultation</button>
                        </div>
                        <div className="hero-image-container animate-fade-in">
                            <img src={ServiceHeroImage} alt="Service Overview" className="service-hero-image" />
                        </div>
                    </div>
                </div>
            </section>

            <ServiceTabs />

            {/* --- 3. Technology Grid --- */}
            <section className="tech-stack-services-section">
                <div className="container">
                    <h2 className="section-title animate-fade-in-up">Our Expertise Stack</h2>
                    <p className="stack-subtitle">We don't just use technology; we master it to deliver innovation.</p>
                    <div className="tech-stack-grid">
                        {technologyStack.map((tech, index) => (
                            <div className="tech-card animate-zoom-in" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                                <span className="tech-icon">
                                    <img src={tech.icon} alt={tech.name} className="tech-icon-image" />
                                </span>
                                <h6>{tech.name}</h6>
                                <p className="tech-category">{tech.category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 4. Our Process (Re-added for completeness and responsiveness) --- */}
            <section className="process-section">
                <div className="container">
                    <h2 className="section-title animate-fade-in-up">Our 5-Step Development Process</h2>
                    <div className="process-wrapper">
                        <div className="process-steps">
                            {processSteps.map((step, index) => (
                                <div className="step-card animate-slide-left" key={index} style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                                    <span className="step-number">{step.num}</span>
                                    <div>
                                        <h3>{step.title}</h3>
                                        <p>{step.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="process-image-container animate-fade-in">
                            <img src={ProcessImage} alt="Project Workflow" className="process-image" />
                        </div>
                    </div>
                </div>
            </section>


            <Footer />

        </div>
    );
};

export default ServicesPage;