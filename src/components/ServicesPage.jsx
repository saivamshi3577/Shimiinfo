import React, { useState } from 'react';
import './Services.css';
import Header from './Header'; 
import Footer from './Footer'; 

// --- Image Imports (assuming standard asset structure) ---
import ServiceHeroImage from '../assets/service-hero.jpg';
import ProcessImage from '../assets/process-image.jpg';

// --- NEW SERVICE ICONS (Assumed Assets) ---
import IconWeb from '../assets/icon-web.png';
import IconMobile from '../assets/icon-mobile.png';
import IconHR from '../assets/icon-hr.png';
import IconConsulting from '../assets/icon-consulting.png'; // New
import IconStaffing from '../assets/icon-staffing.png';   // New

// --- TECHNOLOGY STACK ICONS (Assumed Assets) ---
import IconReact from '../assets/tech-react.png';
import IconPython from '../assets/tech-python.png';
import IconRN from '../assets/tech-rn.png';
import IconCloud from '../assets/tech-cloud.png';
import IconDatabase from '../assets/tech-database.png';
import IconSecurity from '../assets/tech-security.png';

// --------------------------------------------------------
// DATA ARRAYS (UPDATED with Image Paths)
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
        icon: IconWeb, // Image path
        content: "We deliver scalable and performance-driven web platforms, focusing on robust architecture and exceptional user experience. Our solutions range from enterprise applications to dynamic e-commerce portals.",
        features: ["Enterprise Web App Development", "E-Commerce Platforms (Shopify, Custom)", "API Development & Integration", "UX/UI Design & Prototyping"]
    },
    mobile: {
        title: "Innovative Mobile Applications",
        icon: IconMobile, // Image path
        content: "Reach your audience anywhere with native and cross-platform mobile apps. We prioritize speed, security, and a fluid, intuitive interface across iOS and Android devices.",
        features: ["Native iOS & Android Development", "Cross-Platform (Flutter/RN)", "App Store Optimization (ASO)", "Mobile UX/UI Design"]
    },
    hr: {
        title: "Intelligent HR & Enterprise Software",
        icon: IconHR, // Image path
        content: "Automate complex business processes and empower your HR team with custom tools. Solutions include payroll integration, talent management systems, and employee portals.",
        features: ["Talent Management Systems (TMS)", "Custom CRM Development", "Payroll & Benefits Integration", "Employee Self-Service Portals"]
    },
    'it-consulting': {
        title: "Strategic IT Consulting",
        icon: IconConsulting, // Image path
        content: "Gain a competitive edge with expert technology roadmaps. We analyze your current infrastructure, identify key efficiencies, and guide your digital transformation journey.",
        features: ["Digital Transformation Strategy", "Cloud Migration Planning (AWS, Azure)", "Technology Infrastructure Audits", "IT Risk & Governance Consulting"]
    },
    'it-staffing': {
        title: "Specialized IT Staffing",
        icon: IconStaffing, // Image path
        content: "Rapidly scale your team with highly-vetted technical talent. We provide flexible staffing solutions, from single specialized roles to dedicated project teams.",
        features: ["Contract & Permanent Placement", "Dedicated Offshore Teams", "Technical Skill Vetting", "IT Project Management Staff"]
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
// TAB COMPONENT (MODIFIED to use <img> tag)
// --------------------------------------------------------

const ServiceTabs = () => {
    const [activeTab, setActiveTab] = useState('web');
    const currentService = serviceDetails[activeTab];
    const [tabKey, setTabKey] = useState(0); 

    const handleTabClick = (key) => {
        if (key !== activeTab) {
            setActiveTab(key);
            setTabKey(prevKey => prevKey + 1);
        }
    };

    // Helper component to display the Icon Image
    const IconImage = ({ iconPath, altText }) => {
        return (
            <div className="service-icon-image-wrapper">
                <img src={iconPath} alt={altText} className="service-icon-image" />
            </div>
        );
    };


    return (
        <section className="service-tabs-section">
            <div className="container">
                <h2 className="section-title animate-fade-in-up">Services In Depth</h2>
                <div className="tab-buttons animate-fade-in-up">
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
// MAIN PAGE COMPONENT (MODIFIED to use <img> tag)
// --------------------------------------------------------

const ServicesPage = () => {
    return (
        <div className="services-page">
            
            <Header />

            {/* ... (Hero content) ... */}

            <ServiceTabs />

            {/* --- 3. Technology Grid (Now uses <img> tag) --- */}
            <section className="tech-stack-services-section">
                <div className="container">
                    <h2 className="section-title animate-fade-in-up">Our Expertise Stack</h2>
                    <p className="stack-subtitle">We don't just use technology; we master it to deliver innovation.</p>
                    <div className="tech-stack-grid">
                        {technologyStack.map((tech, index) => (
                            <div className="tech-card animate-zoom-in" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                                {/* Using <img> tag now */}
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

<Footer />

        </div>
    );
};

export default ServicesPage;