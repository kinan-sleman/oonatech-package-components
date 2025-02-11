import React from "react";
import Color from "color";

function FormIcon19({ hovered, color }: { hovered?: boolean; color?: string }) {
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
        <path
          fill={color ? color : "#5f6774"}
          d="M2 0v16h12v-16h-12zM13 15h-4v-3h-2v3h-4v-14h10v14z"
        />{" "}
        <path fill={color ? color : "#5f6774"} d="M4 9h2v2h-2v-2z" />{" "}
        <path fill={color ? color : "#5f6774"} d="M7 9h2v2h-2v-2z" />{" "}
        <path fill={color ? color : "#5f6774"} d="M10 9h2v2h-2v-2z" />{" "}
        <path fill={color ? color : "#5f6774"} d="M4 6h2v2h-2v-2z" />{" "}
        <path fill={color ? color : "#5f6774"} d="M7 6h2v2h-2v-2z" />{" "}
        <path fill={color ? color : "#5f6774"} d="M10 6h2v2h-2v-2z" />{" "}
        <path fill={color ? color : "#5f6774"} d="M4 3h2v2h-2v-2z" />{" "}
        <path fill={color ? color : "#5f6774"} d="M7 3h2v2h-2v-2z" />{" "}
        <path fill={color ? color : "#5f6774"} d="M10 3h2v2h-2v-2z" />{" "}
      </g>
    </svg>
  );
}

export default FormIcon19;
