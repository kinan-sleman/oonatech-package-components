import React from "react";
import { Link } from "react-router-dom"; // استيراد Link من react-router-dom
import NotificationIcon from "../../icons/NotificationIcon";
interface NotificationData {
  id?: string;
  title?: string;
  creationTime?: string;
  isRead?: boolean;
  redirectUrl?: string;
  message?: string;
}
interface NotificationBodyProps {
  data: NotificationData;
}

const NotificationBody: React.FC<NotificationBodyProps> = ({ data }) => {
  const bgColor = data.isRead ? "bg-transparent" : "bg-[#D7F4F8FF]";
  const notificationContent = (
    <div className={`flex items-center gap-2 w-full py-3 my-2 pr-[10px] cursor-pointer hover:bg-[#eeecec75] transition-all px-1 rounded-sm ${bgColor}`}>
      <NotificationIcon />
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between w-full">
          <h5 className="text-[13px] text-[#7A7A7A] font-normal leading-[15px]">
            {data.title}
          </h5>
          <span className="text-[#AEAEAE] text-[10px] font-medium">
            {data.creationTime}
          </span>
        </div>

        {data.message && (
          <p className="text-[11px] text-[#939393] font-normal leading-[15px] mt-1">
            {data.message}
          </p>
        )}
      </div>
    </div>
  );
  return data.redirectUrl ? (
    <Link to={data.redirectUrl}>{notificationContent}</Link>
  ) : (
    <div>{notificationContent}</div>
  );
};

export default NotificationBody;
