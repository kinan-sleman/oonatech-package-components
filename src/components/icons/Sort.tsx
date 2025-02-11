import React from "react";

const Sort = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="11"
      height="15"
      viewBox="0 0 11 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.86561 3.59625L4.14 3.31457L2.38219 0.822229L2.2188 0.590558L2.05534 0.822185L0.297529 3.31312L0.571783 3.59491L1.78437 2.78751V14.0625V14.2625H1.98438H2.45312H2.65313V14.0625V2.7878L3.86561 3.59625ZM10.4281 11.4038L9.21562 12.2122V0.9375V0.7375H9.01562H8.54688H8.34688V0.9375V12.2125L7.13428 11.4051L6.86003 11.6869L8.61784 14.1778L8.7813 14.4094L8.94469 14.1778L10.7025 11.6854L10.4281 11.4038Z"
        fill="#A4A4A4"
        stroke="#A4A4A4"
        strokeWidth="0.4"
      />
    </svg>
  );
};

export default Sort;
