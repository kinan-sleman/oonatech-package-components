import React from "react";
import Color from "color";

function FormIcon15({ hovered, color }: { hovered?: boolean; color?: string }) {
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
        {" "}
        <path fill={color ? color : "#5f6774"} d="M3 0h1v3h-1v-3z" />{" "}
        <path fill={color ? color : "#5f6774"} d="M11 0h1v3h-1v-3z" />{" "}
        <path
          fill={color ? color : "#5f6774"}
          d="M9 14.1c0-0.1 0-0.1 0 0l-8-0.1v-8h13v1.2c0.4 0.1 0.7 0.3 1 0.6v-6.8h-2v3h-3v-3h-5v3h-3v-3h-2v14h9v-0.9z"
        />{" "}
        <path
          fill={color ? color : "#5f6774"}
          d="M15 10c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"
        />{" "}
        <path
          fill={color ? color : "#5f6774"}
          d="M13.9 12h-1.8c-1.1 0-2.1 0.9-2.1 2.1v1.9h6v-1.9c0-1.2-0.9-2.1-2.1-2.1z"
        />{" "}
      </g>
    </svg>
  );
}

export default FormIcon15;
