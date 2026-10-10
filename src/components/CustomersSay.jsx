import "./CustomersSay.css";

const testimonials = [
  {
    name: "María",
    rating: 5,
    comment: "Delicious food and excellent service!",
  },
  {
    name: "James",
    rating: 5,
    comment: "A wonderful place for Mediterranean food.",
  },
  {
    name: "Sofia",
    rating: 4,
    comment: "Fresh ingredients and a lovely atmosphere.",
  },
  {
    name: "Daniel",
    rating: 5,
    comment: "The Greek salad is one of my favorites!",
  },
];

const CustomersSay = () => {
  return (
    <section className="customers-say">
      <h2>Testimonials</h2>

      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <p className="testimonial-rating">
              {"★".repeat(testimonial.rating)}
              {"☆".repeat(5 - testimonial.rating)}
            </p>

            <h3>{testimonial.name}</h3>

            <p className="testimonial-comment">{testimonial.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CustomersSay;
