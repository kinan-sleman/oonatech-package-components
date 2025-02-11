import React from "react";

const Card = ({
  hovered,
  selected,
}: {
  hovered: boolean;
  selected: boolean;
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4896_22203)">
        <path
          d="M17.2507 7.5H3.75075C3.33653 7.5 3.00075 7.83579 3.00075 8.25V18.75C3.00075 19.1642 3.33653 19.5 3.75075 19.5H17.2507C17.665 19.5 18.0007 19.1642 18.0007 18.75V8.25C18.0007 7.83579 17.665 7.5 17.2507 7.5Z"
          stroke={selected ? "#fff" : hovered ? "#1B84FF" : "#E1E1E1"}
          className="transition-[stroke] duration-300"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.00073 4.5H20.2507C20.4496 4.5 20.6404 4.57902 20.7811 4.71967C20.9217 4.86032 21.0007 5.05109 21.0007 5.25V16.5"
          stroke={selected ? "#fff" : hovered ? "#1B84FF" : "#E1E1E1"}
          className="transition-[stroke] duration-300"
          strokeOpacity="0.45"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4896_22203">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Card;
