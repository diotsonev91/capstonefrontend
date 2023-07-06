import React from "react";
import "./CustomersSay.css";

const CustomersSay = () => {
  return (
    <div className="customers-say-container">
      <div className="square">
        <img src="path_to_person_image1.jpg" alt="Person 1" />
        <p>Opinion 1</p>
      </div>
      <div className="square">
        <img src="path_to_person_image2.jpg" alt="Person 2" />
        <p>Opinion 2</p>
      </div>
      <div className="square">
        <img src="path_to_person_image3.jpg" alt="Person 3" />
        <p>Opinion 3</p>
      </div>
    </div>
  );
};

export default CustomersSay;
