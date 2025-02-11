import React from "react";
import Color from "color";

function FormIcon9({ hovered, color }: { hovered?: boolean; color?: string }) {
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
          <path d="M299.312,288.57c-58.289-46.296-108.698-0.045-109.221,0.419l10.497,11.155c1.63-1.555,41.227-37.743,89.183,0.419 L299.312,288.57z" />
          {"{"}" "{"}"}
          <path d="M314.699,266.633l9.54-11.993c-84.802-67.351-157.985-0.269-158.733,0.419l10.483,11.17 C178.576,263.792,240.469,207.596,314.699,266.633z" />
          {"{"}" "{"}"}
          <path d="M342.453,233.107l9.54-11.993c-114.365-90.858-212.984-0.493-213.986,0.419l10.497,11.155 C152.108,229.279,238.391,150.384,342.453,233.107z" />
          {"{"}" "{"}"}
          <ellipse cx={245} cy="381.741" rx="35.798" ry="36.394" />
          {"{"}" "{"}"}
          <path d="M245,427.147c-34.144,0-61.823,28.14-61.823,62.853h123.647C306.823,455.287,279.144,427.147,245,427.147z" />
          {"{"}" "{"}"}
          <ellipse cx="61.823" cy="36.394" rx="35.798" ry="36.394" />
          {"{"}" "{"}"}
          <path d="M0,144.653h123.647c0-34.713-27.679-62.853-61.823-62.853C27.679,81.8,0,109.94,0,144.653z" />
          {"{"}" "{"}"}
          <ellipse cx="428.177" cy="36.394" rx="35.798" ry="36.394" />
          {"{"}" "{"}"}
          <path d="M428.177,81.8c-34.144,0-61.823,28.14-61.823,62.853H490C490,109.94,462.321,81.8,428.177,81.8z" />
          {"{"}" "{"}"}
        </g>
        {"{"}" "{"}"}
      </g>
    </svg>
  );
}

export default FormIcon9;
