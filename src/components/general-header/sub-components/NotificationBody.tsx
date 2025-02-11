import React from "react";
import NotificationIcon from "../../icons/NotificationIcon";

// Define the type for the data prop
interface NotificationData {
  id?: string;
  title: string;
  time: string;
  message?: string;
}

// Define the type for the component props
interface NotificationBodyProps {
  data: NotificationData;
}

const NotificationBody: React.FC<NotificationBodyProps> = ({ data }) => {
  return (
    <div className="flex items-center gap-2 w-full py-3 my-2 pr-[10px] cursor-pointer hover:bg-[#eeecec75] transition-all px-1 rounded-sm">
      <NotificationIcon />
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between w-full">
          <h5 className="text-[13px] text-[#7A7A7A] font-normal leading-[15px]">
            {data?.title}
          </h5>
          <span className="text-[#AEAEAE] text-[10px] font-medium">
            {data?.time}
          </span>
        </div>

        <p className="text-[11px] text-[#939393] font-normal leading-[15px] mt-1">
          {data?.message}
        </p>
        {/* <p className="flex items-center gap-1"> */}
        {/* <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 11.375C9.19241 11.375 11.375 9.19241 11.375 6.5C11.375 3.80761 9.19241 1.625 6.5 1.625C3.80761 1.625 1.625 3.80761 1.625 6.5C1.625 9.19241 3.80761 11.375 6.5 11.375Z"
              stroke="#AEAEAE"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 3.25V6.5"
              stroke="#AEAEAE"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.79667 8.79667L6.5 6.5"
              stroke="#AEAEAE"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}

        {/* <span className="text-[#AEAEAE] text-[10px] font-medium">
            {data?.time}
          </span> */}
        {/* </p> */}
      </div>
    </div>
  );
};

export default NotificationBody;
