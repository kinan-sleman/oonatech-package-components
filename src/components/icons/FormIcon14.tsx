import React from "react";
import Color from "color";

function FormIcon14({ hovered, color }: { hovered?: boolean; color?: string }) {
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
          <path d="M61.25,0v490h367.5V76.563L359.844,0H61.25z M398.125,459.375H91.875V30.625h254.33l6.301,7.001v47.549H395.3l2.825,3.139 V459.375z" />
          {"{"}" "{"}"}
          <path d="M302.113,201.126c-11.016,0-21.091,4.094-28.803,10.829l-41.923-19.683c0.234-1.833,0.369-3.697,0.369-5.592 c0-24.195-19.679-43.874-43.874-43.874c-24.18,0-43.859,19.679-43.859,43.874c0,24.18,19.679,43.859,43.859,43.859 c11.202,0,21.431-4.224,29.192-11.155l41.61,19.536c-0.277,1.988-0.43,4.016-0.43,6.079c0,2.827,0.279,5.59,0.792,8.27 l-40.301,18.912c-7.932-7.858-18.838-12.721-30.862-12.721c-24.18,0-43.859,19.679-43.859,43.859 c0,24.195,19.679,43.874,43.859,43.874c24.195,0,43.874-19.679,43.874-43.874c0-1.128-0.057-2.242-0.141-3.348l43.515-20.421 c7.448,5.833,16.813,9.324,26.982,9.324c24.195,0,43.874-19.679,43.874-43.874S326.308,201.126,302.113,201.126z M187.882,199.915 c-7.297,0-13.234-5.936-13.234-13.234c0-7.312,5.937-13.249,13.234-13.249c7.312,0,13.249,5.937,13.249,13.249 C201.131,193.978,195.194,199.915,187.882,199.915z M187.882,316.568c-7.297,0-13.234-5.936-13.234-13.249 c0-7.297,5.937-13.234,13.234-13.234c7.312,0,13.249,5.936,13.249,13.234C201.131,310.631,195.194,316.568,187.882,316.568z M302.113,258.249c-7.297,0-13.234-5.936-13.234-13.249s5.937-13.249,13.234-13.249c7.312,0,13.249,5.937,13.249,13.249 S309.425,258.249,302.113,258.249z" />
          {"{"}" "{"}"}
        </g>
        {"{"}" "{"}"}
      </g>
    </svg>
  );
}

export default FormIcon14;
