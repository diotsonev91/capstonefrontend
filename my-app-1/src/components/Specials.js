import React from "react";
import "./Specials.css";

const Specials = () => {
  return (
    <div className="specials">
      <div className="specials-header">
        <h3 className="specials-title">Specials</h3>
        <button className="black-button">See More</button>
      </div>
      <div className="specials-container">
        <div className="specials-column">
          <img src="path_to_image1.png" alt="Special 1" />
          <div className="special-column-content">
            <h5>special name</h5>
            <p>special price</p>
          </div>
          <p>Special 1 description</p>
        </div>
        <div className="specials-column">
          <img src="path_to_image2.png" alt="Special 2" />
          <div className="special-column-content">
            <h5>special name</h5>
            <p>special price</p>
          </div>
          <p>Special 1 description</p>
        </div>
        <div className="specials-column">
          <img src="path_to_image3.png" alt="Special 3" />
          <div className="special-column-content">
            <h5>special name</h5>
            <p>special price</p>
          </div>
          <p>Special 1 description</p>
        </div>
      </div>
    </div>
  );
};

export default Specials;
