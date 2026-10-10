import { useState } from "react";
import "./BookingForm.css";
import {
  validateDate,
  validateGuests,
  validateTime,
} from "./BookingValidation.js";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (event) => {
    event.preventDefault();
    const isDateValid = validateDate(date);
    const isGuestsValid = validateGuests(guests);
    const isTimeValid = validateTime(time, availableTimes);
    if (!isDateValid || !isGuestsValid || !isTimeValid) {
      return;
    }
    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="booking-date">Choose date</label>
      <input
        id="booking-date"
        type="date"
        value={date}
        onChange={(event) => {
          const selectedDate = event.target.value;
          setDate(selectedDate);

          dispatch({
            type: "UPDATE_TIMES",
            date: selectedDate,
          });
        }}
        min={new Date().toISOString().split("T")[0]}
        required
      />

      <label htmlFor="booking-time">Choose time</label>
      <select
        id="booking-time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="booking-guests">Number of guests</label>
      <input
        id="booking-guests"
        type="number"
        min="1"
        max="10"
        value={guests}
        onChange={(event) => setGuests(event.target.value)}
        required
      />

      <label htmlFor="booking-occasion">Occasion</label>
      <select
        id="booking-occasion"
        value={occasion}
        onChange={(event) => setOccasion(event.target.value)}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Other">Other</option>
      </select>

      <button
        type="submit"
        className="booking-submit"
        aria-label="Make Your Reservation"
      >
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;
