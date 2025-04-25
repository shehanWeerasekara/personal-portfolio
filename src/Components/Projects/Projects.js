//import Aos from 'aos';
import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container container">
        <div className="skills-title">
          <h2>
            <span className="accent">SHEHAN</span> WEERASEKARA
          </h2>
          <span className="role">My Projects</span>
        </div>

        <div className="projects-content">
          <div className="project-category">
            <h3 className="category-title">Tea Factory Website</h3>
            <p>ReactJS, HTML, CSS, JavaScript</p>
            <div className="project-description">
              <p>
                Developed an interactive website to display the sales and tea
                product data for "Embilmeegama" Tea Factory.
              </p>
              <a
                href="https://embillian-tea-factory.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="project-category">
            <h3 className="category-title">Employee Management System</h3>
            <p>C#, MySQL</p>
            <div className="project-description">
              <p>
                Created an Employee Management System to including employee data management, payroll handling, and performance evaluation.
              </p>
              <a
                href="https://github.com/shehanWeerasekara/EmployeeManagementSystem"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="project-category">
            <h3 className="category-title">Electricity Bill Calculator</h3>
            <p>C#, MySQL</p>
            <div className="project-description">
              <p>
                Developed an Electricity Bill Calculator to accurately compute
                monthly electricity costs based on usage, rates, and tariffs.
              </p>
              <a
                href="https://github.com/your-username/electricity-bill-calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
