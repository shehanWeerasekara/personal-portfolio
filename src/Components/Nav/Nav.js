import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <a href="/" className="logo">Shehan</a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#hero" onClick={handleLinkClick}>Home</a>
        <a href="#skills" onClick={handleLinkClick}>Skills</a>
        <a href="#projects" onClick={handleLinkClick}>Projects</a>
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Nav;
