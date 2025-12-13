import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logoImage from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">

        {/* LOGO */}
        <NavLink to="/" className="logo">
          <img
            src={logoImage}
            alt="Shimi-Infotech Logo"
            className="logo-img"
          />
        </NavLink>

        {/* NAV MENU */}
        <nav className="nav-menu">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/services" className="nav-link">Our Services</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>

          <NavLink
            to="/contact"
            className="contact-btn bounce-on-hover"
          >
            Get In Touch
          </NavLink>
        </nav>

      </div>
    </header>
  );
};

export default Header;
