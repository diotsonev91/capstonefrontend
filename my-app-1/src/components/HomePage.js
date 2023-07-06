import React from "react";
import About from "./About";
import CustomersSay from "./CustomersSay";
import CallToAction from "./CallToAction";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div id="home">
      <CallToAction></CallToAction>
      <CustomersSay></CustomersSay>
      <About></About>
    </div>
  );
};

export default Homepage;
