import React from "react";
import "./Footer.css";

// 🔥 Import your logo
import Logo from "../assets/logo.png";

// 🔥 Import social media icons
import FacebookIcon from "../assets/social/fb.png";
import InstagramIcon from "../assets/social/insta.png";
import TwitterIcon from "../assets/social/x.png";
import LinkedinIcon from "../assets/social/in.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">

                {/* ========== BRANDING COLUMN ========== */}
                <div className="footer-col footer-branding">
                    <div className="logo">
                        <img src={Logo} alt="Shimi Infotech Logo" className="footer-logo" />
                        
                    </div>

                    <p>Your partner in digital transformation and innovative product development.</p>

                    {/* 🔥 Social Icons with Images */}
                    <div className="footer-social-links">
                        <a href="#">
                            <img src={FacebookIcon} alt="Facebook" />
                        </a>
                        <a href="#">
                            <img src={TwitterIcon} alt="Twitter" />
                        </a>
                        <a href="#">
                            <img src={InstagramIcon} alt="Instagram" />
                        </a>
                        <a href="#">
                            <img src={LinkedinIcon} alt="LinkedIn" />
                        </a>
                    </div>
                </div>

                {/* ========== QUICK LINKS ========== */}
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                {/* ========== COMPANY LINKS ========== */}
                <div className="footer-col">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* ========== NEWSLETTER ========== */}
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
