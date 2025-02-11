import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Utility function to generate a random color in hexadecimal format
const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const getRandomColorWithOpacity = (): { hex: string; rgba: string } => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  // Generate a random hex color
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  // Convert hex to RGB
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);

  // Fixed alpha value
  const alpha = 0.3;

  // Return both hex color and RGBA string with fixed opacity
  return {
    hex: color,
    rgba: `rgba(${r}, ${g}, ${b}, ${alpha})`,
  };
};
// Utility function to generate initials from the provided text
const generateInitials = (text: string): string => {
  // Split the input text into words
  const words = text.split(" ").filter(Boolean); // Filter to remove any empty strings

  let initials = "";

  // Determine the number of words and set initials accordingly
  if (words.length === 1) {
    // One word: take the first two characters
    initials = words[0].substring(0, 2);
  } else if (words.length === 2) {
    // Two words: take the first character of each word
    initials = words[0][0] + words[1][0];
  } else if (words.length >= 3) {
    // Three or more words: take the first character of each of the first three words
    initials = words[0][0] + words[1][0] + words[2][0];
  }

  return initials.toUpperCase();
};

// Define the props interface for the InitialsDiv component
interface InitialsDivProps {
  text: string;
  size?: number; // Optional size prop for adjustable component size
  link?: any;
}

// React Functional Component using TypeScript
const InitialsDiv: React.FC<InitialsDivProps> = ({ text, size = 60, link }) => {
  const initials = generateInitials(text); // Generate initials from the text
  const [randomColor, setRandomColor] = useState<{ hex: string; rgba: string }>(
    {
      hex: "",
      rgba: "",
    }
  );

  useEffect(() => {
    // Generate random color once when the component is mounted
    setRandomColor(getRandomColorWithOpacity());
  }, []); // Empty dependency array ensures this effect runs only once

  // Return the styled div containing the initials
  return (
    <Link
      to={link}
      style={{
        backgroundColor: randomColor.rgba,
        color: randomColor.hex,
        padding: "20px",
        cursor: "pointer",
        borderRadius: "5px",
        width: `${size}px`,
        height: `${size}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: `20px`,
        fontWeight: "bold",
        textTransform: "uppercase",
        transition: "transform 0.3s ease", // Add smooth transition effect
        marginBottom: "10px",
      }}
      //   onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')} // Scale up on hover
      //   onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')} // Scale down on leave
      aria-label={`Initials: ${initials}`} // Accessible label for screen readers
      title={text} // Tooltip with original text
    >
      {initials}
    </Link>
  );
};

export default InitialsDiv;
