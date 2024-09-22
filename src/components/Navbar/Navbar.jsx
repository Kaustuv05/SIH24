import React, { useEffect } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".navbar-cat");

      let currentSectionId = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSectionId = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-logo">Right2Know</div>
      <ul className="navbar-menu">
        <li className="navbar-cat"><Link to="/">Home</Link></li>
        <li className="navbar-cat"><Link to="/articles">Articles</Link></li>
        <li className="navbar-cat"><Link to="/playgames">Play Games</Link></li>
        {/* Dropdown Menu */}
        <li className="dropdown">
          More
          <ul className="dropdown-menu">
            {/* External link to Translator */}
            <li className="navbar-cat">
              <a href="https://14235d3b4d459175fc.gradio.live/" target="_blank" rel="noopener noreferrer">Translator</a>
            </li>
            <li className="navbar-cat"><Link to="/historical-background">Historical Background</Link></li>
            <li className="navbar-cat"><Link to="/explore">Explore</Link></li>
            <li className="navbar-cat"> <a href="/forum.html" target="_self" rel="noopener noreferrer">Community Forum</a></li>
            <li className="navbar-cat"><Link to="/contact">Contact</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;