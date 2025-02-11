import React from "react";

const Tree = ({
  selected,
  hovered,
}: {
  selected: boolean;
  hovered: boolean;
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4896_22196)">
        <path
          d="M21 17.9985V13.9985H15.958L13 11.0405V8.94848C13.8758 8.82207 14.6712 8.36862 15.2261 7.6794C15.7811 6.99017 16.0544 6.11633 15.991 5.23373C15.9276 4.35113 15.5323 3.5253 14.8846 2.92242C14.2369 2.31954 13.3849 1.98438 12.5 1.98438C11.6151 1.98438 10.7631 2.31954 10.1154 2.92242C9.46767 3.5253 9.07235 4.35113 9.00899 5.23373C8.94562 6.11633 9.21891 6.99017 9.77385 7.6794C10.3288 8.36862 11.1242 8.82207 12 8.94848V11.0225L9.024 13.9985H4V17.9985H2V22.9985H7V17.9985H5V14.9985H8.958L12.49 18.5315L16.024 14.9985H20V17.9985H18V22.9985H23V17.9985H21ZM6 21.9985H3V18.9985H6V21.9985ZM10 5.49848C10 5.00402 10.1466 4.52067 10.4213 4.10955C10.696 3.69843 11.0865 3.378 11.5433 3.18878C12.0001 2.99956 12.5028 2.95005 12.9877 3.04651C13.4727 3.14298 13.9181 3.38108 14.2678 3.73071C14.6174 4.08034 14.8555 4.5258 14.952 5.01075C15.0484 5.4957 14.9989 5.99837 14.8097 6.45519C14.6205 6.912 14.3 7.30245 13.8889 7.57715C13.4778 7.85185 12.9945 7.99848 12.5 7.99848C11.837 7.99848 11.2011 7.73509 10.7322 7.26624C10.2634 6.7974 10 6.16152 10 5.49848ZM12.485 17.1315L9.885 14.5315L12.385 12.0315H12.585L15.085 14.5315L12.485 17.1315ZM22 21.9985H19V18.9985H22V21.9985Z"
          fill={selected ? "#fff" : hovered ? "#1B84FF" : "#E1E1E1"}
          className="transition-[fill] duration-300"
        />
        <circle
          cx="12.5"
          cy="5.5"
          r="3"
          stroke={selected ? "#fff" : hovered ? "#98C7FE" : "#F3F3F3"}
          className="transition-[stroke] duration-300"
        />
        <rect
          x="2.5"
          y="18.5"
          width="4"
          height="4"
          stroke={selected ? "#fff" : hovered ? "#98C7FE" : "#F3F3F3"}
          className="transition-[stroke] duration-300"
        />
        <rect
          x="18.5"
          y="18.5"
          width="4"
          height="4"
          stroke={selected ? "#fff" : hovered ? "#98C7FE" : "#F3F3F3"}
          className="transition-[stroke] duration-300"
        />
      </g>
      <defs>
        <clipPath id="clip0_4896_22196">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Tree;
