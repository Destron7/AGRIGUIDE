import React from "react";
// import logo from "./assets/react.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="mynavbar">
        <div className="navbar-logo">
          {/* <img src={logo} alt="logo" /> */}
          <span className="agri">Agri</span>
          <span className="guide">Guide</span>
        </div>

        <div className="navbar-links">
          <a href="/" className="cool-link">
            Home
          </a>
          <a href="/services" className="cool-link">
            Our service
          </a>
          <a href="/about" className="cool-link">
            About us
          </a>
          <a href="/blog" className="cool-link">
            Yojnas
          </a>
          <a href="/contact" className="cool-link">
            Contact us
          </a>
          {/* <a href="/crop" className="cool-link">
            Crops
          </a>
          <a href="/fertilzer" className="cool-link">
            Fertilizer
          </a> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
