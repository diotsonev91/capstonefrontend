import React, { useReducer, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import CustomersSay from "./CustomersSay";
import BookingPage from "./BookingPage";
import CallToAction from "./CallToAction";
import Homepage from "./HomePage";
import Specials from "./Specials";
import ConfirmedBooking from "./ConfirmedBooking";
import { useNavigate } from "react-router-dom";

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, date) => {
  // Logic to update available times based on the selected date
  // For now, returning the same available times regardless of the date
  return state;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return updateTimes(state, action.date);
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);
  const [submitting, setSubmitting] = useState(false); // State for submitting status

  const navigate = useNavigate();

  const submitForm = async (formData) => {
    // Simulating API call with a delay
    setSubmitting(true); // Set submitting state to true

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay

    setSubmitting(false); // Set submitting state to false

    return true; // Simulated successful submission
  };

  const handleSubmit = async (formData) => {
    try {
      const response = await submitForm(formData);

      if (response === true) {
        navigate("/booking-confirmed"); // Navigate to booking confirmation page
        console.log("submited", formData);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/specials" element={<Specials />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<CustomersSay />} />
      <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      <Route
        path="/contact"
        element={
          <BookingPage
            dispatch={dispatch}
            handleSubmit={handleSubmit}
            submitting={submitting} // Pass submitting state to the form component
          />
        }
      />
      <Route path="/order-online" element={<CallToAction />} />
      <Route
        path="/booking-page"
        element={
          <BookingPage
            dispatch={dispatch}
            handleSubmit={handleSubmit}
            submitting={submitting} // Pass submitting state to the form component
          />
        }
      />
    </Routes>
  );
};

export default Main;
