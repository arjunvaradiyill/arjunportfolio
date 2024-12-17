import React from 'react';
import './AboutMe.css';
import profileImage from '../assets/profileImage.png';
import Projects from './Projects';

const AboutMe = () => {
  return (
    <div className="about-me-section">
      <div className="about-me-container">
        {/* Profile Image and About Me */}
        <img src={profileImage} alt="Profile" className="about-me-image" />
        <h1 className="about-me-title">About Me</h1>
        <p className="about-me-description">
          A passionate and results-driven Computer Science Engineering student currently pursuing 
          <strong> Full Stack Development at Entri</strong>, with a strong enthusiasm for building 
          dynamic and scalable web applications. Alongside my studies, I contribute as a 
          <strong> Faculty in Computer Science</strong> at 
          <strong> Xceed Competitive Examination Center</strong>, where I share my knowledge 
          and help students excel.
        </p>

        {/* Education Section */}
        <h2 className="education-title">Education</h2>
        <div className="education-container">
          <div className="education-card">
            <h3>Bachelor of Technology - Computer Science Engineering</h3>
            <span className="education-duration">2020 - 2024</span>
            <p className="education-grade">Percentage: 75%</p>
          </div>
        </div>

        {/* Experience Section */}
        <h2 className="experience-title">Experience</h2>
        <div className="experience-container">
          <div className="experience-card">
            <h3>Faculty - Computer Science</h3>
            <span className="experience-duration">2024 july - Present</span>
            <p className="experience-description">
              Currently working as a Faculty at Xceed Competitive Examination Center. I mentor and guide students 
              preparing for competitive exams, helping them improve their skills and excel in their subjects.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default AboutMe;
