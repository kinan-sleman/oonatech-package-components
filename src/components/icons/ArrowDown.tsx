import React from "react";

const ArrowDown = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="11"
      height="6"
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1L5.5 5.5L1 1"
        stroke="#333232"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDown;
