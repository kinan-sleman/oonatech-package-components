import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NotificationBody from "./NotificationBody";

// Define the type for each notification item
interface NotificationItem {
  id?: string;
  title: string;
  time: string;
  message?: string;
}

// Define the type for the component props
interface NotificationMenuProps {
  data: NotificationItem[];
  newNotificationNumber: number | undefined;
  viewAllLink: any;
  showMoreText?: string; // Optional prop
  highlightColor?: string;
}

const NotificationMenu: React.FC<NotificationMenuProps> = ({
  data,
  newNotificationNumber,
  viewAllLink,
  highlightColor,
  showMoreText,
}) => {
  const [show, setShow] = useState(false);
  const [hoverd, setHoverd] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShow(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShow(false);
    }, 100); // Delay before hiding
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div
      className="notification_part relative flex flex-col items-end gap-[13px] w-[39px] overflow-x-visible"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <button
        onMouseMove={() => setHoverd(true)}
        onMouseLeave={() => setHoverd(false)}
        className=" transition-all cursor-pointer flex items-center justify-center w-[39px] h-[39px] rounded-[5px] "
        style={{
          backgroundColor: hoverd || show ? "#FFF" : "",
        }}
      >
        <svg
          className={`${hoverd ? "bellRing" : ""}`}
          width="24"
          height="27"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            // transform: hoverd || show ? "rotate(45deg)" : "",
            transition: "0.3s",
          }}
        >
          <path
            d="M3.49985 16.9124V16.7079C3.53477 16.0531 3.74142 15.4187 4.09931 14.8677C4.69608 14.1991 5.10632 13.3869 5.28928 12.5119C5.33402 11.8452 5.28928 11.1607 5.33402 10.485C5.65612 7.24024 8.86815 5 11.946 5H12.0354C15.1669 5 18.2985 7.24024 18.6384 10.485C18.7011 11.1518 18.6384 11.8452 18.6921 12.5119C18.8706 13.3884 19.2814 14.2017 19.8821 14.8677C20.2555 15.4124 20.4693 16.0495 20.4995 16.7079V16.9124C20.505 17.7993 20.1871 18.6582 19.6047 19.3304C18.8576 20.1274 17.8419 20.624 16.7506 20.7261C13.5637 21.135 10.3372 21.135 7.15029 20.7261C6.07164 20.6157 5.0701 20.1197 4.33194 19.3304C3.7678 18.6518 3.47197 17.7921 3.49985 16.9124Z"
            fill={`${hoverd || show ? "#BEDCFF" : "#E0E3E9"}`}
          />
          <path
            d="M13.1627 22.095C12.5275 22.0505 12.0086 22.095 11.4896 22.095C10.975 22.0861 10.4612 22.1398 9.95966 22.255C9.53019 22.3528 9.06494 22.5839 9.06494 23.0728C9.11 23.5454 9.36618 23.9729 9.76282 24.2374C10.5269 24.8209 11.4897 25.0856 12.447 24.9753C13.3775 24.9066 14.2279 24.427 14.7643 23.6685C15.0607 23.2841 14.9931 22.7348 14.6122 22.4328C14.1611 22.2123 13.6654 22.0967 13.1627 22.095Z"
            fill={` ${hoverd || show ? "#00A7E1" : "#99A1B7"}`}
          />
          <rect
            x="13"
            y="1"
            width="8.84444"
            height="8.84445"
            rx="4.42222"
            fill="#FF6A55"
          />
          <rect
            x="13"
            y="1"
            width="8.84444"
            height="8.84445"
            rx="4.42222"
            stroke="#FCFCFC"
            strokeWidth="2"
          />
        </svg>
      </button>
      <div
        className={`${
          show ? "popup_effect" : "hidden"
        } transition-all rounded-lg main-shadow w-[325px] z-[20] h-[380px] overflow-y-auto  px-0 py-3 bg-white`}
      >
        <div className="px-6 w-full h-full">
          <div className="flex items-center justify-between border-b-[1px] py-4 border-[#E7E7E7]">
            <h4 className="text-[#333232] font-bold text-[16px]">
              Notifications
            </h4>
            <span className="text-[#F8285A] bg-[#FFE3EA] rounded-[5px] py-1 px-3 text-[11px] font-bold">
              {newNotificationNumber} New
            </span>
          </div>
          <ul>
            {/* {data?.length > 3
              ? data?.slice(0, 3)?.map((item) => (
                  <li key={item?.id}>
                    <NotificationBody data={item} />
                    <span className="border-b-[1px] w-full border-[#E7E7E7] bg-[#E7E7E7] h-[1px] block"></span>
                  </li>
                ))
              : data?.map((item) => (
                  <li key={item?.id}>
                    <NotificationBody data={item} />
                    <span className="border-b-[1px] w-full border-[#E7E7E7] bg-[#E7E7E7] h-[1px] block"></span>
                  </li>
                ))} */}
            {data?.map((item) => (
              <li key={item?.id}>
                <NotificationBody data={item} />
                <span className="border-b-[1px] w-full border-[#E7E7E7] bg-[#E7E7E7] h-[1px] block"></span>
              </li>
            ))}
          </ul>
          {/* {data?.length > 3 && (
            <Link
              to={viewAllLink}
              className="text-center w-full mt-4 block text-[#20B0BA] font-medium text-[12px]"
            >
              {showMoreText ? showMoreText : " View All"}
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default NotificationMenu;
