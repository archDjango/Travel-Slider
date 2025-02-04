import { useEffect, useState } from "react";
import testimonials from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";
import styles from "../styles/Testimonial.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.navBtn} onClick={() => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1))}>
        <FaChevronLeft />
      </button>

      <div className={styles.slide}>
        <TestimonialCard testimonial={testimonials[current]} />
      </div>

      <button className={styles.navBtn} onClick={() => setCurrent((prev) => (prev + 1) % length)}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default TestimonialSlider;
