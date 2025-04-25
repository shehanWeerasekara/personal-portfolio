import React from "react";
import "./Contact.css"

export default function Contact() {
  return (
    <section id="contact">
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">
            <span className="accent">CONTACT</span> ME
          </h2>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="label">Phone:</span> +94 70 408 5575
            </div>
            <div className="contact-item">
              <span className="label">Email:</span> tharindushehan732@gmail.com
            </div>
            <div className="contact-item">
              <span className="label">Address:</span> 67, Ritigahapala,Halloluwa, Kandy, Sri Lanka
            </div>
            <div className="contact-item">
              <span className="label">GitHub:</span>{" "}
              <a
                href="https://github.com/shehanWeerasekara"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/shehanWeerasekara
              </a>
            </div>
            <div className="contact-item">
              <span className="label">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/shehan-tharindu-b0b43a215/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/shehan-tharindu-b0b43a215/
              </a>
            </div>
            <div className="contact-item">
              <span className="label">Facebook:</span>{" "}
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noreferrer"
              >
                facebook.com/yourprofile
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
