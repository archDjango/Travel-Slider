import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "../styles/Testimonial.module.css";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className={styles.card}>
      <img src={testimonial.image} alt={testimonial.name} className={styles.avatar} />
      <h3>{testimonial.name}</h3>
      <p>{testimonial.feedback}</p>
      <div className={styles.stars}>
        {[...Array(5)].map((_, i) =>
          i < testimonial.rating ? <FaStar key={i} className={styles.filledStar} /> : <FaRegStar key={i} className={styles.emptyStar} />
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
