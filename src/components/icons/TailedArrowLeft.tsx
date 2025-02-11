import React from "react";

const TailedArrowLeft = ({
  className,
  color,
}: {
  className?: string;
  color: string;
}) => {
  return (
    <svg
      className={className}
      width="16"
      height="8"
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.667 4.00001L1.33366 4.00001M1.33366 4.00001L4.66699 7.33334M1.33366 4.00001L4.66699 0.666677"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TailedArrowLeft;
