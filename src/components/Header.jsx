import React from 'react';
import './Header.css'; 
// 1. Import the logo image. Adjust the path if your file structure is different.
import logoImage from '../assets/logo.png'; 

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <a href="/" className="logo">
                    {/* 2. Use an <img> tag for the image logo */}
                    <img src={logoImage} alt="Shimi-Infotech Logo" className="logo-img" />
                    {/* Optionally, keep the text for accessibility/SEO, or remove it: */}
                    {/* <span className="logo-text">Shimi-Infotech</span> */}
                </a>
                <nav className="nav-menu">
                    <a href="/">Home</a>
                    <a href="/services">Our Services</a>
                    <a href="/about">About</a>
                    <a href="/portfolio">Portfolio</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact" className="contact-btn bounce-on-hover">Get In Touch</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;