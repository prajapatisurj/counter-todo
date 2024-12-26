import React from "react";

const Rating = ({ rating }) => {
  // Calculate the number of full stars, half stars, and empty stars
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Check if there's a half star
  const emptyStars = 5 - fullStars - halfStars; // Calculate the remaining empty stars

  // Create an array of stars
  const stars = [
    ...Array(fullStars).fill("*"), // Full stars
    ...Array(halfStars).fill("⚪"), // Half star (using a different character)
    ...Array(emptyStars).fill("@"), // Empty stars
  ];

  return (
    <div>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default Rating;