import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        ARJUN V
      </div>
      <div className="header-right">
        <Link to="/about-me" className="nav-button">ABOUT ME</Link>
        <Link to="/projects" className="nav-button">PROJECTS</Link>
        <Link to="/contact-me" className="nav-button">CONTACT ME</Link> {/* Link to Contact Me */}
      </div>
    </header>
  );
};

export default Header;
