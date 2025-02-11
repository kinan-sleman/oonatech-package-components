import React from "react";

function Cancel({ hovered }: { hovered: boolean }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="transition-[fill] duration-300"
        d="M11.6241 1.37061L1.36523 11.6294"
        stroke={hovered ? "#F7604B" : "#D2D2D2"}
        stroke-width="2.1"
        stroke-linecap="round"
      />
      <path
        className="transition-[fill] duration-300"
        d="M11.623 11.6294L1.36422 1.37061"
        stroke={hovered ? "#FFAFA4" : "#D2D2D2"}
        stroke-width="2.1"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default Cancel;
