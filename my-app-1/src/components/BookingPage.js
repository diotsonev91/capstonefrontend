import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI } from "../utilities/dataAPIs";

const BookingPage = ({ handleSubmit, submitting }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState([]);
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
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
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
        value={submitting ? "Submitting..." : "Make Your reservation"}
        disabled={submitting}
      />
    </form>
  );
};

export default BookingPage;
