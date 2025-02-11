import React from "react";
import Color from "color";

function FormIcon6({ hovered, color }: { hovered?: boolean; color?: string }) {
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
      stroke={color ? color : "#5f6774"}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {"{"}" "{"}"}
        <path fill="#fff" d="M15 2v2h-9v-2h9zM16 1h-11v4h11v-4z" />
        {"{"}" "{"}"}
        <path fill="#fff" d="M0 1h4v4h-4v-4z" />
        {"{"}" "{"}"}
        <path fill="#fff" d="M15 7v2h-9v-2h9zM16 6h-11v4h11v-4z" />
        {"{"}" "{"}"}
        <path fill="#fff" d="M0 6h4v4h-4v-4z" />
        {"{"}" "{"}"}
        <path fill="#fff" d="M15 12v2h-9v-2h9zM16 11h-11v4h11v-4z" />
        {"{"}" "{"}"}
        <path fill="#fff" d="M0 11h4v4h-4v-4z" />
        {"{"}" "{"}"}
      </g>
    </svg>
  );
}

export default FormIcon6;
