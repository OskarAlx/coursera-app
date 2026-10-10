import { useNavigate } from "react-router-dom";
import mainImage from "../assets/icons_assets/restauranfood.jpg";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section className="main-content">
      <div className="main-container">
        <div className="main-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned <br />
            Mediterranean restaurant, <br />
            focused on traditional <br />
            recipes served with a modern
            <br /> twist.
          </p>
          <button
            id="reserve-table"
            className="reserve-button"
            onClick={() => navigate("/reservations")}
          >
            Reserve a Table
          </button>
        </div>

        <img id="main-image" src={mainImage} alt="Little Lemon" />
      </div>
    </section>
  );
};

export default CallToAction;
