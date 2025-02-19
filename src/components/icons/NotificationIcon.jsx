import React from "react";

function NotificationIcon() {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15.7412" cy="15.4395" r="15" fill="#F5F5F5" />
      <g clipPath="url(#clip0_10594_2176)">
        {/* <mask
          id="mask0_10594_2176"
          style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="5"
          y="4"
          width="22"
          height="22"
        >
          <path
            d="M26.2412 4.93945H5.24121V25.9395H26.2412V4.93945Z"
            fill="white"
          />
        </mask> */}
        <g mask="url(#mask0_10594_2176)">
          <path
            d="M13.5542 21.5645C13.0253 21.5645 11.3775 21.5645 10.1567 21.5645C9.50623 21.5645 9.08396 20.8799 9.37485 20.2982L10.1222 18.8035C10.3652 18.3175 10.4917 17.7822 10.4917 17.2388C10.4917 16.5653 10.4917 15.5649 10.4917 14.5645C10.4917 12.8145 11.3667 9.31445 15.7417 9.31445C20.1167 9.31445 20.9917 12.8145 20.9917 14.5645C20.9917 15.5649 20.9917 16.5653 20.9917 17.2388C20.9917 17.7822 21.1182 18.3175 21.3612 18.8035L22.1085 20.2982C22.3994 20.8799 21.9763 21.5645 21.3259 21.5645H17.9292M13.5542 21.5645C13.5542 23.3145 14.4292 24.1895 15.7417 24.1895C17.0542 24.1895 17.9292 23.3145 17.9292 21.5645M13.5542 21.5645C14.921 21.5645 17.9292 21.5645 17.9292 21.5645"
            stroke="#595959"
            strokeLinejoin="round"
          />
          <path
            d="M15.7412 9.31445V7.56445"
            stroke="#595959"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_10594_2176">
          <rect
            width="21"
            height="21"
            fill="white"
            transform="translate(5.24121 4.93945)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default NotificationIcon;
