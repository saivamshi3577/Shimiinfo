import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logoImage from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container">

        {/* LOGO */}
        <a
          className="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img
            src={logoImage}
            alt="Shimi-Infotech Logo"
            className="logo-img"
          />
        </a>

        {/* NAV MENU */}
        <nav className="nav-menu">
          <a onClick={() => navigate("/")}>Home</a>
          <a onClick={() => navigate("/services")}>Our Services</a>
          <a onClick={() => navigate("/about")}>About</a>
          <a onClick={() => navigate("/portfolio")}>Portfolio</a>

          <a
            className="contact-btn bounce-on-hover"
            onClick={() => navigate("/contact")}
          >
            Get In Touch
          </a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
