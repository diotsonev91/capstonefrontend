import React from "react";
import "./styles/Specials.css";
import Special1 from "../assets/brucheti.jpeg"
import Special2 from "../assets/greek-salad.jpeg"
import Special3 from "../assets/kuftq.jpg"
const Specials = () => {
  return (
    <div className="specials">
      <div className="specials-header">
        <h3 className="specials-title">Specials</h3>
        <button className="black-button">See More</button>
      </div>
      <div className="specials-container">
        <div className="specials-column">
          <img src={Special1}  alt="Special 1" />
          <div className="special-column-content">
            <h5>special name</h5>
            <p>$15</p>
          </div>
          <p>Special 1 description</p>
        </div>
        <div className="specials-column">
          <img src={Special2} alt="Special 2" />
          <div className="special-column-content">
            <h5>special name</h5>
            <p>$15</p>
          </div>
          <p>Special 1 description</p>
        </div>
        <div className="specials-column">
          <img src={Special3}  alt="Special 3" />
          <div className="special-column-content">
            <h5>special name</h5>
            <p>$15</p>
          </div>
          <p>Special 1 description</p>
        </div>
      </div>
    </div>
  );
};

export default Specials;
