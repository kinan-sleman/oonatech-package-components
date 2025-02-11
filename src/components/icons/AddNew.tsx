import React from "react";

function AddNew({ hoverd }: { hoverd: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="transition-[fill] duration-300"
        d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z"
        fill={hoverd ? "#f39843" : "#D9D9D9"}
      />
      #D9D9D9
      <path
        className="transition-[fill] duration-300"
        d="M9.75 7.5H7.5M7.5 7.5H5.25M7.5 7.5V5.25M7.5 7.5V9.75"
        stroke={hoverd ? "#FFF2C2" : "#A5A5A5"}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default AddNew;
