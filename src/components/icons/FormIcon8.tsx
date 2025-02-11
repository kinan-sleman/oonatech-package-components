import React from "react";
import Color from "color";

function FormIcon8({ hovered, color }: { hovered?: boolean; color?: string }) {
  const lightenColor = (color: string, amount: number) => {
    if (color) {
      return Color(color).lighten(amount).hex();
    }
  };
  return (
    <svg
      fill={color ? color : "#5f6774"}
      height={44}
      width={44}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 490 490"
      xmlSpace="preserve"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {"{"}" "{"}"}
        <g>
          {"{"}" "{"}"}
          <ellipse cx="422.868" cy="372.445" rx="38.871" ry="39.518" />
          {"{"}" "{"}"}
          <path d="M422.868,421.75c-37.076,0-67.132,30.556-67.132,68.25H490C490,452.307,459.944,421.75,422.868,421.75z" />
          {"{"}" "{"}"}
          <ellipse cx={245} cy="39.519" rx="38.871" ry="39.519" />
          {"{"}" "{"}"}
          <path d="M177.868,157.073h134.263c0-37.693-30.056-68.25-67.132-68.25S177.868,119.38,177.868,157.073z" />
          {"{"}" "{"}"}
          <ellipse cx="67.132" cy="372.445" rx="38.871" ry="39.518" />
          {"{"}" "{"}"}
          <path d="M67.132,421.75C30.056,421.75,0,452.307,0,490h134.263C134.263,452.307,104.207,421.75,67.132,421.75z" />
          {"{"}" "{"}"}
          <polygon points="403.792,294.766 434.417,294.766 434.417,230.659 260.313,230.659 260.313,193.963 229.688,193.963 229.688,230.659 55.157,230.659 55.157,294.766 85.781,294.766 85.781,261.285 403.792,261.285 " />
          {"{"}" "{"}"}
        </g>
        {"{"}" "{"}"}
      </g>
    </svg>
  );
}

export default FormIcon8;
