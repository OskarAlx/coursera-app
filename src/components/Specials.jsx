import { useNavigate } from "react-router-dom";
import Card from "./Card";
import saladImage from "../assets/icons_assets/greek salad.jpg";
import bruschettaImage from "../assets/icons_assets/bruchetta.svg";
import dessertImage from "../assets/icons_assets/lemon dessert.jpg";

const Specials = () => {
  const navigate = useNavigate();
  return (
    <section className="body-text">
      <div className="body-text-container">
        <h2>This Week's Specials!</h2>
        <button
          id="online-menu"
          className="reserve-button"
          onClick={() => navigate("/menu")}
        >
          Online Menu
        </button>
      </div>

      <div className="card-container">
        <Card
          title="Greek Salad"
          price="12.99"
          description="The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
          imageUrl={saladImage}
        />

        <Card
          title="Bruschetta"
          price="5.99"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
          imageUrl={bruschettaImage}
        />

        <Card
          title="Lemon Dessert"
          price="4.99"
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          imageUrl={dessertImage}
        />
      </div>
    </section>
  );
};

export default Specials;
