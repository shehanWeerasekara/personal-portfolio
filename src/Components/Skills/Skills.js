import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container container">
        
        <div className="skills-title">
          <h2><span className="accent">SHEHAN</span> WEERASEKARA</h2>
          <span className="role">Technical Skills</span>
        </div>

        <div className="skills-content">
          
          <div className="skills-category">
            <h3 className="category-title">Frontend</h3>
            <p>HTML, CSS, JavaScript, ReactJS, NextJS</p>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Database</h3>
            <p>MySQL, Microsoft SQL Server, MongoDB</p>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Cloud & DevOps</h3>
            <p>Docker, Jenkins, Linux/Unix, Shell Scripting, CI/CD, GitOps, Git, Kubernetes (concept)</p>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Frameworks</h3>
            <p>ASP.NET Framework (MVC)</p>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Programming Languages</h3>
            <p>Python, Java</p>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Development Tools</h3>
            <p>Visual Studio, VS Code, GitHub, Bitbucket, LinkedIn</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
