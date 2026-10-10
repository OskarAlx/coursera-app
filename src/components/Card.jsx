import "../components/Card.css";
import { FaMotorcycle } from "react-icons/fa";

const Card = ({ title, price, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <div className="card-heading">
          <h3 className="card-title">{title}</h3>
          <span className="card-price">${price}</span>
        </div>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <button className="order-button">Order a Delivery</button>
          <FaMotorcycle size={24} id="motorcycle-icon" />
        </div>
      </div>
    </div>
  );
};

export default Card;
