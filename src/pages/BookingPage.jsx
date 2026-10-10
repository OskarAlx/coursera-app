import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import "./BookingPage.css";

const BookingPage = ({ availableTimes, dispatch }) => {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const result = window.submitAPI(formData);

    if (result) {
      navigate("/confirmed");
    }
  };

  return (
    <main className="booking-page">
      <section className="booking-container">
        <h1>Reserve a Table</h1>

        <p className="booking-description">
          Book your table and enjoy our Mediterranean cuisine.
        </p>

        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </section>
    </main>
  );
};

export default BookingPage;
