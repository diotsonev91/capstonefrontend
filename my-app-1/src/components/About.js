// About.js
import React from "react";
import "./styles/About.css";
import Mario1 from "../assets/mario-1.png"
import Mario2 from "../assets/mario.jpeg"

const About = () => {
  return (
    <div className="about-container">
      <div className="text-column">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget
          nulla magna. Phasellus sodales enim ut lorem vestibulum luctus. Fusce
          ullamcorper scelerisque mi, a lobortis lacus efficitur sed.
        </p>
      </div>
      <div className="image-stack">
        <div className="image-stack__item image-stack__item--top">
          <img
            src={Mario2}
            alt="Picsum Photo"
          />
        </div>
        <div className="image-stack__item image-stack__item--bottom">
          <img
            src={Mario1}
            alt="Picsum Photo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
