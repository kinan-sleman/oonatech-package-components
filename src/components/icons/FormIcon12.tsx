import React from "react";
import Color from "color";

function FormIcon12({ hovered, color }: { hovered?: boolean; color?: string }) {
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
          d="M6.6 14h-5.6v-8h13v0.6c0.4 0.2 0.7 0.4 1 0.7v-6.3h-2v3h-3v-3h-5v3h-3v-3h-2v14h7.3c-0.3-0.3-0.5-0.6-0.7-1z"
        />{" "}
        <path fill={color ? color : "#5f6774"} d="M14 12h-3v-3h1v2h2z" />{" "}
        <path
          fill={color ? color : "#5f6774"}
          d="M11.5 8c1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5zM11.5 7c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5v0z"
        />{" "}
      </g>
    </svg>
  );
}

export default FormIcon12;
