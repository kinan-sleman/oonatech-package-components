import React from "react";

const NewClose = ({
  className,
  color,
  width,
  height,
}: {
  className?: string;
  color?: string;
  width?: string;
  height?: string;
}) => {
  return (
    <svg
      className={className}
      width={width ? width : "16"}
      height={height ? height : "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8308 1.16211L1.15234 14.8405"
        stroke="#858585"
        strokeWidth={2.1}
      />
      <path
        d="M14.8306 14.8405L1.15213 1.16211"
        stroke="#E1E1E1"
        strokeWidth={2.1}
      />
    </svg>
  );
};

export default NewClose;
