import React from "react";
import { useNavigate } from "react-router-dom";
import "./CallToAction.css";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleReserveTable = () => {
    navigate("/booking-page"); // Replace "/booking-page" with the actual path to your BookingPage component
  };

  return (
    <header className="header">
      <div>
        <h1>Little Lemon</h1>
        <h2>Challenge</h2>
        <article>
          Lorem ipsum dor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </article>
        <button className="black-button" onClick={handleReserveTable}>
          Reserve a Table
        </button>
      </div>
      <div>
        <img src="path_to_little_lemon_logo.png" alt="Little Lemon Big Logo" />
      </div>
    </header>
  );
};

export default CallToAction;
