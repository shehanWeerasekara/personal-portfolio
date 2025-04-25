import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <h2 className="about-title">About <span className="accent">Me</span></h2>

        <div className="about-block">
          <span className="about-label">Degree:</span>
          <div className="about-value">BSc (Hons) Statistics & Operations Research</div>
        </div>

        <div className="about-block">
          <span className="about-label">University:</span>
          <div className="about-value">University of Peradeniya</div>
        </div>

        <div className="about-description">
          <p>
            Passionate about developing scalable, innovative solutions combining software development and DevOps practices.
          </p>
          <p>
            Proficient in <strong>ReactJS, C#, HTML, CSS, JavaScript, Python, Java, MySQL</strong>, and DevOps tools such as <strong>Docker, Jenkins, GitOps, CI/CD pipelines</strong>.
          </p>
          <p>
            Strong in <strong>software engineering, infrastructure automation, teamwork, time management</strong> and critical problem-solving.
          </p>
        </div>

        <div className="about-school">School: Sri Rahula College, Katugastota</div>
      </div>
    </section>
  );
}

export default About;
