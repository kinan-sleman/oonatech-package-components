import React from "react";

const Export = ({ color }: { color: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6998 7.4165C16.6998 7.67484 17.9248 9.2165 17.9248 12.5915V12.6998C17.9248 16.4248 16.4331 17.9165 12.7081 17.9165H7.28307C3.55807 17.9165 2.06641 16.4248 2.06641 12.6998V12.5915C2.06641 9.2415 3.27474 7.69984 6.22474 7.42484"
        stroke={color ? color : "#253368"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.4999V3.0166"
        stroke={color ? color : "#253368"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7918 4.87516L10.0001 2.0835L7.2085 4.87516"
        stroke={color ? color : "#253368"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Export;
