import React from "react";
import "./CallToAction.css";
const CallToAction = () => {
  return (
    <header className="header">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chalange</h2>
        <article>
          Lorem ipsum dor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </article>
        <button className="black-button">reserve a table</button>
      </div>
      <div>
        <img src="path_to_little_lemon_logo.png" alt="Little Lemon Big Logo" />
      </div>
    </header>
  );
};

export default CallToAction;
