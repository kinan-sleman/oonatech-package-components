import React from "react";

const Table = ({
  selected,
  hovered,
}: {
  selected: boolean;
  hovered: boolean;
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.25 7C3.25 6.58579 3.58579 6.25 4 6.25H20C20.4142 6.25 20.75 6.58579 20.75 7C20.75 7.41421 20.4142 7.75 20 7.75H4C3.58579 7.75 3.25 7.41421 3.25 7Z"
        className="transition-[fill] duration-300"
        fill={selected ? "#fff" : hovered ? "#3793FF" : "#E1E1E1"}
      />
      <path
        opacity="0.7"
        d="M3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12Z"
        className="transition-[fill] duration-300"
        fill={selected ? "#fff" : hovered ? "#98C8FF" : "#E1E1E1aa"}
      />
      <path
        opacity="0.4"
        d="M3.25 17C3.25 16.5858 3.58579 16.25 4 16.25H9C9.41421 16.25 9.75 16.5858 9.75 17C9.75 17.4142 9.41421 17.75 9 17.75H4C3.58579 17.75 3.25 17.4142 3.25 17Z"
        className="transition-[fill] duration-300"
        fill={selected ? "#fff" : hovered ? "#B7D8FF" : "#E1E1E177"}
      />
    </svg>
  );
};

export default Table;
