import React from 'react';
import './HeroSection.css';
import profileImage from '../assets/profileImage.png'; // Replace with your image file
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Importing Font Awesome Icons

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h5>HELLO</h5>
        <h1>
          I’m <span className="highlight-text">Arjun</span> V
        </h1>
        <p>
          A passionate and results-driven Computer Science Engineering student with a versatile skill set, eager to apply programming, problem-solving, and analytical skills as a Full Stack Developer Intern at Entri Elevate to enhance the integrity and efficiency of digital systems across various domains.
        </p>
        <div className="hero-buttons">
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/arjunvaradiyill/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/arjunvaradiyill" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
          <a href="https://drive.google.com/file/d/1Kp_j0dFRBru4-dBVoHp2jYvPaGvVdGxl/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="cv-button">Download CV</button>
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
};

export default HeroSection;
