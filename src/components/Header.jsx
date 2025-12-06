import React from 'react';
// 1. Import Link from react-router-dom for proper routing.
import { Link } from 'react-router-dom';
import './Header.css'; 
import logoImage from '../assets/logo.png'; 

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                {/* Replaced <a> with <Link> and href with to="/" */}
                <Link to="/" className="logo">
                    <img src={logoImage} alt="Shimi-Infotech Logo" className="logo-img" />
                    {/* Optionally, keep the text for accessibility/SEO, or remove it: */}
                    {/* <span className="logo-text">Shimi-Infotech</span> */}
                </Link>
                <nav className="nav-menu">
                    {/* All internal navigation <a> tags are now <Link> */}
                    <Link to="/">Home</Link>
                    <Link to="/services">Our Services</Link>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/blog">Blog</Link>
                    {/* Contact button uses <Link> */}
                    <Link to="/contact" className="contact-btn bounce-on-hover">Get In Touch</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;