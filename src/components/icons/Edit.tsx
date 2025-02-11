import React from "react";

const Edit = ({ hovered }: { hovered: boolean }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="transition-[fill] duration-300"
        d="M2.18182 10.9091L10.1818 2.90909L13.0909 5.81818L5.09091 13.8182L2.18182 10.9091ZM11.6364 1.45455L13.0909 0L16 2.90909L14.5455 4.36364L11.6364 1.45455ZM0 16L2.66764 14.9338L1.06618 13.3324L0 16Z"
        fill={hovered ? "#1B84FF" : "#A5A5A5"}
      />
      <path
        className="transition-[fill] duration-300"
        d="M13.091 0L16.0001 2.90909L14.5456 4.36364L11.6365 1.45455L13.091 0Z"
        fill={hovered ? "#BCDBFF" : "#D2D2D2"}
      />
    </svg>
  );
};

export default Edit;
