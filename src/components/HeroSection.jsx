import React from 'react';
import './HeroSection.css';
import profileImage from '../assets/profileImage.png'; // Replace with your image file

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
        <button className="cv-button">Download CV</button>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
};

export default HeroSection;
