"use client";
import { useState } from "react";
import styles from "./Rating.module.css";

export default function Rating({ onRatingSelect }) {
  const [rating, setRating] = useState(0);

  const handleNumberClick = (value) => {
    setRating(value);
    onRatingSelect(value);
  };

  return (
    <div className={styles.rateCardNumbers}>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          onClick={() => handleNumberClick(value)}
          className={`${styles.rateCardNumbersSpan} ${value == rating ? styles.selected : ""}`}
        >
          {value}
        </span>
      ))}
    </div>
  );
}
