import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

// Logo
import Logo from "../assets/logo.png";

// React Icons
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* ========== BRANDING COLUMN ========== */}
        <div className="footer-col footer-branding">
          <div
            className="logo"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <img
              src={Logo}
              alt="Shimi Infotech Logo"
              className="footer-logo"
            />
          </div>

          <p>
            Your partner in digital transformation and innovative product
            development.
          </p>

          {/* SOCIAL ICONS */}
          <div className="footer-social-links">
            <a onClick={() => navigate("/")}>
              <FaFacebookF />
            </a>
            <a onClick={() => navigate("/")}>
              <FaTwitter />
            </a>
            <a onClick={() => navigate("/")}>
              <FaInstagram />
            </a>
            <a onClick={() => navigate("/")}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* ========== QUICK LINKS ========== */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a onClick={() => navigate("/about")}>About Us</a></li>
            <li><a onClick={() => navigate("/services")}>Services</a></li>
            <li><a onClick={() => navigate("/portfolio")}>Portfolio</a></li>
            {/* <li><a onClick={() => navigate("/blog")}>Blog</a></li> */}
          </ul>
        </div>

        {/* ========== COMPANY LINKS ========== */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>Careers</li>
            <li>Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* ========== NEWSLETTER ========== */}
        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>
            Subscribe to our newsletter for the latest updates from
            Shimi-Infotech.
          </p>

          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your Email" />
            <button type="submit" className="primary-btn">
              &rarr;
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Shimi-Infotech. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
