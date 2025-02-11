import React from "react";

export default function CloseButton({ closeToast = () => {} }) {
  return (
    <div className={`toast-close-btn`} onClick={closeToast}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.45337 14.939L15.3299 5.0625"
          stroke="#31353C"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.3299 14.939L5.45337 5.0625"
          stroke="#31353C"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
