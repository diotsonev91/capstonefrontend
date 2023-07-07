import { render, screen } from "@testing-library/react";
import BookingPage, { initializeTimes, updateTimes } from "./BookingPage";
import { act } from "react-dom/test-utils";

test("Renders the heading in BookingPage component", () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns the expected initial state", () => {
  const initialState = initializeTimes();
  expect(initialState).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});

test("updateTimes returns the same state when no date is provided", () => {
  const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const updatedState = updateTimes(state, "");
  expect(updatedState).toEqual(state);
});
