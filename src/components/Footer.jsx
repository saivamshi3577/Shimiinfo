import React from 'react';
import './Footer.css'; // Import the CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-col footer-branding">
                    <div className="logo">
                        <span className="logo-icon">⚡</span>
                        <span className="logo-text">Shimi-Infotech</span>
                    </div>
                    <p>Your partner in digital transformation and innovative product development.</p>
                    <div className="footer-social-links">
                        <a href="#">F</a><a href="#">T</a><a href="#">I</a><a href="#">L</a>
                    </div>
                </div>
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h3>Newsletter</h3>
                    <p>Subscribe to our newsletter for the latest updates from Shimi-Infotech.</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Your Email" />
                        <button type="submit" className="primary-btn">&rarr;</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Shimi-Infotech. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;