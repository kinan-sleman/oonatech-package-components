import React from "react";
import { Link } from "react-router-dom";

export interface pathData {
  id: string;
  title: string;
  link: string;
}

function NavigationList({
  title,
  paths,
  color,
  styles,
  backInHistory,
}: {
  title: string;
  paths?: pathData[];
  color?: string;
  styles?: string;
  backInHistory?: boolean;
}) {
  // sticky left-0 top-0
  return (
    <div className={`${styles ? styles : "mb-2  bg-white"}`}>
      {title ? (
        <h2 className="capitalize text-[#333333]  text-lg font-bold mb-1 flex items-center gap-1">
          {backInHistory ? (
            <button onClick={() => window.history.back()}>
              <svg
                className="h-[20px] w-[20px]  [&amp;_rect]:fill-[#333333]"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4666 11.5333C10.7333 11.8 10.7333 12.2 10.4666 12.4667C10.3333 12.6 10.1999 12.6667 9.99992 12.6667C9.79992 12.6667 9.66659 12.6 9.53325 12.4667L5.53325 8.46666C5.26659 8.2 5.26659 7.79999 5.53325 7.53333L9.53325 3.53333C9.79992 3.26666 10.1999 3.26666 10.4666 3.53333C10.7333 3.79999 10.7333 4.19999 10.4666 4.46666L6.93325 8L10.4666 11.5333Z"
                  fill="black"
                ></path>
                <mask
                  id="mask0_1_2094"
                  maskUnits="userSpaceOnUse"
                  x="5"
                  y="3"
                  width="6"
                  height="10"
                >
                  <path
                    d="M10.4666 11.5333C10.7333 11.8 10.7333 12.2 10.4666 12.4667C10.3333 12.6 10.1999 12.6667 9.99992 12.6667C9.79992 12.6667 9.66659 12.6 9.53325 12.4667L5.53325 8.46666C5.26659 8.2 5.26659 7.79999 5.53325 7.53333L9.53325 3.53333C9.79992 3.26666 10.1999 3.26666 10.4666 3.53333C10.7333 3.79999 10.7333 4.19999 10.4666 4.46666L6.93325 8L10.4666 11.5333Z"
                    fill="white"
                  ></path>
                </mask>
                <g mask="url(#mask0_1_2094)">
                  <rect
                    width="16"
                    className="transition-[fill] duration-300"
                    height="16"
                    fill="#333333"
                  ></rect>
                </g>
              </svg>
            </button>
          ) : (
            ""
          )}
          {title}
        </h2>
      ) : (
        ""
      )}

      <span
        className={` ${
          color ? color : "text-[#A4A4A4]"
        } text-xs font-normal flex items-center gap-1`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.00001 2.125L14.3001 6.85L14.0001 7.75H13.5V13.5H2.50004V7.75H2.00004L1.70004 6.85L8.00001 2.125ZM3.50004 6.75V12.5H12.5V6.75L8.00001 3.375L3.50004 6.75Z"
            fill={` ${color ? color : "#A4A4A4"}`}
          />
        </svg>
        {paths?.map((item, index) => {
          return (
            <>
              {" / "}
              {/* {path?.length != index + 1 && " / "} */}
              <Link
                key={item.id}
                to={item?.link}
                className="hover:underline transition-all hover:text-[#1b84ff]"
              >
                {item?.title}
              </Link>
            </>
          );
        })}
      </span>
    </div>
  );
}

export default NavigationList;
