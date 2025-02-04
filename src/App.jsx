import TestimonialSlider from "./components/TestimonialSlider";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Explore Our Top Travel Destinations</h1>
      <TestimonialSlider />
    </div>
  );
}

export default App;
