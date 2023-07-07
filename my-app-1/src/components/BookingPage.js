import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI } from "../utilities/dataAPIs";
import Logo from "../assets/little-lemo-logo.png"
import "./styles/Booking.css"; // Import the CSS file for styling

const BookingPage = ({ handleSubmit, submitting }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);
  const [nameError, setNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      try {
        const times = await fetchAPI(date);
        setAvailableTimes(times);
      } catch (error) {
        console.error("Error fetching available times:", error);
      }
    };

    fetchAvailableTimes();
  }, [date]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (submitting) {
      return;
    }

    if (!name || !phoneNumber) {
      // Validate name and phone number fields
      setNameError(!name);
      setPhoneNumberError(!phoneNumber);
      return;
    }

    handleSubmit({ date, time, guests, occasion });
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);

    // Check if the selected date is in the past
    const currentDate = new Date(); // Get the current date
    if (selectedDate < currentDate) {
      // Selected date is in the past, show an error message or take appropriate action
      console.error("Selected date is in the past.");
      return;
    }

    setDate(selectedDate);
  };

  return (
    <div className="grid-book">
      <div>
    <form
      className="booking-form" // Apply the CSS class for styling
      onSubmit={handleFormSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date.toISOString().slice(0, 10)} // Format the date to match the input value format
        onChange={handleDateChange} // Call the handleDateChange function on date change
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((timeOption) => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setNameError(false); // Reset the name error when the input changes
        }}
        className={nameError ? "error" : ""} // Apply the error class if nameError is true
      />
      {nameError && <span className="error-message">Name is required</span>}

      <label htmlFor="phone">Telephone Number</label>
      <input
        type="tel"
        id="phone"
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
          setPhoneNumberError(false); // Reset the phone number error when the input changes
        }}
        className={phoneNumberError ? "error" : ""} // Apply the error class if phoneNumberError is true
      />
      {phoneNumberError && (
        <span className="error-message">Phone number is required</span>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value={submitting ? "Submitting..." : "Make Your Reservation"}
        disabled={submitting}
      />
    </form>
    </div>
    <div>
      <img src={Logo}/>
    </div>
    </div>
  );
};

export default BookingPage;
