import React from "react";
import Color from "color";

function FormIcon28({ hovered, color }: { hovered?: boolean; color?: string }) {
  const lightenColor = (color: string, amount: number) => {
    if (color) {
      return Color(color).lighten(amount).hex();
    }
  };
  return (
    <svg
    width={44}
    height={44}
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill={color ? color : "#5f6774"}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {"{"}" "{"}"}
        <path
          fill={color ? color : "#5f6774"}
          d="M11 1v-1h-6v1h-2v1h-1v14h12v-1h1v-14h-4zM6 1h4v2h-4v-2zM13 15h-10v-12h2v1h6v-1h2v12z"
        />
        {"{"}" "{"}"}
        <path
          fill={color ? color : "#5f6774"}
          d="M8 6c-2.5 0-1.3 3.2-1.3 3.2 0.3 0.4 0.7 0.4 0.7 0.6 0 0.3-0.3 0.3-0.6 0.4-0.5 0.1-0.9-0.1-1.4 0.8-0.3 0.4-0.4 2-0.4 2h6c0 0-0.1-1.6-0.4-2-0.4-0.8-0.9-0.7-1.4-0.8-0.3 0-0.6-0.1-0.6-0.4s0.3-0.2 0.6-0.6c0.1 0 1.3-3.2-1.2-3.2z"
        />
        {"{"}" "{"}"}
      </g>
    </svg>
  );
}

export default FormIcon28;
