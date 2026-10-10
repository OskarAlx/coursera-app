import "./Chicago.css";
import restaurantImage from "../assets/icons_assets/restaurant.jpg";
import foodImage from "../assets/icons_assets/restaurant chef B.jpg";

const Chicago = () => {
  return (
    <section className="chicago">
      <div className="chicago-content">
        <p className="chicago-eyebrow">OUR STORY</p>

        <h2>
          Little Lemon
          <br />
          Chicago
        </h2>

        <p>
          Little Lemon is a family-owned Mediterranean restaurant inspired by
          traditional recipes and fresh ingredients. We combine our love for
          food with a modern twist to create a welcoming dining experience.
        </p>

        <p>
          Our goal is to bring people together through delicious food, warm
          hospitality, and the flavors of the Mediterranean.
        </p>
      </div>

      <div className="chicago-images">
        <img
          className="chicago-restaurant"
          src={foodImage}
          alt="Interior of the Little Lemon restaurant"
        />

        <img
          className="chicago-food"
          src={restaurantImage}
          alt="Mediterranean food served at Little Lemon"
        />
      </div>
    </section>
  );
};

export default Chicago;
