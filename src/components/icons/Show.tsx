import React from "react";

function Show({ hovered }: { hovered: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="transition-[fill] duration-300"
        d="M9 3.9375C5.58788 3.9375 2.69887 6.0615 1.6875 9C2.69887 11.9385 5.58788 14.0625 9 14.0625C12.4121 14.0625 15.3011 11.9385 16.3125 9C15.3011 6.0615 12.4121 3.9375 9 3.9375Z"
        stroke={hovered ? "#FFFFFF" : "#AAAAAA"}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        className="transition-[fill] duration-300"
        d="M9 11.8125C10.5533 11.8125 11.8125 10.5533 11.8125 9C11.8125 7.4467 10.5533 6.1875 9 6.1875C7.4467 6.1875 6.1875 7.4467 6.1875 9C6.1875 10.5533 7.4467 11.8125 9 11.8125Z"
        stroke={hovered ? "#FFFFFF" : "#D2D2D2"}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Show;
