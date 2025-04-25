import React, { useEffect, useState } from "react";
import "./Hero.css";
import yourPhoto from "../../Assets/image.png";

const roles = ["Software Developer", "Web Developer", "DevOps Engineer"];

function Hero() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[index];
    const speed = isDeleting ? 80 : 150;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500); // Wait before deleting
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <section className="hero" id="hero">
      <div className="hero-content container">
        <div className="text-section">
          <span className="role">{displayText}</span>
          <h1>
            Hello I'm <br />
            <span className="accent">Shehan Weerasekara</span>
          </h1>
          <p>
            I excel at crafting elegant digital experiences and I am proficient
            in various Programming Languages and technologies.
          </p>
        </div>

        <div className="photo-section">
          <img
            src={yourPhoto}
            alt="Shehan Tharindu"
            className="profile-photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
