import React, { useState } from 'react';
import Header from './Header'; // Assuming Header component is available
import Footer from './Footer'; // Assuming Footer component is available
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// --------------------------------------------------------
// DATA ARRAYS
// --------------------------------------------------------

const services = [
    { value: '', label: 'Select a Service' },
    { value: 'web', label: 'Custom Web Solutions' },
    { value: 'mobile', label: 'Innovative Mobile Applications' },
    { value: 'hr', label: 'HR & Enterprise Software' },
    { value: 'consulting', label: 'Strategic IT Consulting' },
    { value: 'staffing', label: 'Specialized IT Staffing' },
];

// UK Contact Details (Reused for consistency)
const ukContactDetails = [
    { type: 'location', value: 'International House, 776-778 Barking Road, London E13 9PJ' },
    { type: 'phone', value: '+44-208 637 3036' },
    { type: 'email', value: 'info@shimi-infotech.com' },
];

// Placeholder for icons (Assume FaMapMarkerAlt, FaPhone, FaEnvelope are imported or replaced with images)
const IconMap = {
    location: 'FaMapMarkerAlt',
    phone: 'FaPhone',
    email: 'FaEnvelope',
};

// --------------------------------------------------------
// REACT COMPONENT
// --------------------------------------------------------

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        project: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you for your inquiry! We will be in touch shortly.');
        // Add actual submission logic (API call) here
    };

    return (
        <div className="contact-page">
            <Header />

            {/* --- 1. Hero Header & Introduction --- */}
            <section className="contact-hero-section">
                <div className="container hero-content animate-fade-in-up">
                    <span className="pre-title">\ Get In Touch \</span>
                    <h1>Ready to Start Your Digital Journey?</h1>
                    <p className="hero-subtitle">
                        Tell us about your project needs, business challenges, and how we can help you achieve your goals. Our experts are ready to listen.
                    </p>
                </div>
            </section>

            {/* --- 2. Main Contact Form & Info --- */}
            <section className="contact-form-section">
                <div className="container contact-grid">
                    
                    {/* Left: Contact Form */}
                    <div className="form-wrapper animate-slide-left">
                        <h2>Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your Name" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                            />
                            
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Your Email Address" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />

                            <select 
                                name="service" 
                                value={formData.service} 
                                onChange={handleChange} 
                                required
                            >
                                {services.map((option, index) => (
                                    <option key={index} value={option.value} disabled={!option.value}>{option.label}</option>
                                ))}
                            </select>

                            <textarea 
                                name="project" 
                                placeholder="Tell us about your project or challenge..." 
                                rows="6" 
                                value={formData.project}
                                onChange={handleChange}
                                required
                            ></textarea>

                            <button type="submit" className="primary-btn pulse-on-hover">
                                Submit Inquiry &rarr;
                            </button>
                        </form>
                    </div>

                    {/* Right: Contact Information */}
                    <div className="info-wrapper animate-slide-right">
                        <h2>Office Details</h2>
                        <div className="office-info">
                            <span className="country-title">UNITED KINGDOM HQ</span>
                            <p className="registration-info">
                                Shimi-Infotech is a trading division of Shimi Consultancy. 
                                <br />Registration #: 12385467 (England and Wales)
                            </p>
                            <div className="separator"></div>

                            {ukContactDetails.map((item, index) => (
                                <div className="contact-detail-item" key={index}>
                                  
                                    <p>{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. CTA/Next Step --- */}
            <section className="contact-cta-section">
                <div className="container cta-content animate-zoom-in">
                    <h2>Prefer a Direct Call?</h2>
                    <p>Schedule a 15-minute consultation with our lead solutions architect today.</p>
                    <button className="secondary-btn">Book a Meeting</button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;