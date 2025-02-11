import React from "react";

const ArrowLeft = ({
  className,
  hovering,
  hovered,
}: {
  className?: string;
  hovering?: boolean;
  hovered?: boolean;
}) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.4666 11.5333C10.7333 11.8 10.7333 12.2 10.4666 12.4667C10.3333 12.6 10.1999 12.6667 9.99992 12.6667C9.79992 12.6667 9.66659 12.6 9.53325 12.4667L5.53325 8.46666C5.26659 8.2 5.26659 7.79999 5.53325 7.53333L9.53325 3.53333C9.79992 3.26666 10.1999 3.26666 10.4666 3.53333C10.7333 3.79999 10.7333 4.19999 10.4666 4.46666L6.93325 8L10.4666 11.5333Z"
        fill="black"
      />
      <mask
        id="mask0_1_2094"
        maskUnits="userSpaceOnUse"
        x="5"
        y="3"
        width="6"
        height="10"
      >
        <path
          d="M10.4666 11.5333C10.7333 11.8 10.7333 12.2 10.4666 12.4667C10.3333 12.6 10.1999 12.6667 9.99992 12.6667C9.79992 12.6667 9.66659 12.6 9.53325 12.4667L5.53325 8.46666C5.26659 8.2 5.26659 7.79999 5.53325 7.53333L9.53325 3.53333C9.79992 3.26666 10.1999 3.26666 10.4666 3.53333C10.7333 3.79999 10.7333 4.19999 10.4666 4.46666L6.93325 8L10.4666 11.5333Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1_2094)">
        <rect
          width="16"
          className="transition-[fill] duration-300"
          height="16"
          fill={hovering ? (hovered ? "#00ff00" : "#A4A4A4") : "#A4A4A4"}
        />
      </g>
    </svg>
  );
};

export default ArrowLeft;
