import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./About";
import CustomersSay from "./CustomersSay";
import BookingPage from "./BookingPage";
import CallToAction from "./CallToAction";
import Homepage from "./HomePage";
import Specials from "./Specials";
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/specials" element={<Specials></Specials>}></Route>
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<CustomersSay />} />
      <Route path="/contact" element={<BookingPage />} />
      <Route path="/order-online" element={<CallToAction />} />
    </Routes>
  );
};

export default Main;
