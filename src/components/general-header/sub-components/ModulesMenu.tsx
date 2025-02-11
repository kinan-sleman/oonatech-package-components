import React, { useState, MouseEvent, useRef } from "react";
import { Link } from "react-router-dom";

// Define the types for the props
interface Module {
  id: string | number;
  title: string;
  description?: string;
  link: string;
  icon?: string;
  isActive?: boolean;
}

interface ModulesMenuProps {
  data: Module[];
  highlightColor?: string;
  onChangeApp?: ((id: string | number) => void | undefined) | undefined;
}

const ModulesMenu: React.FC<ModulesMenuProps> = ({
  data,
  highlightColor,
  onChangeApp,
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

  // const handleLinkClick = (id: string | number) => {
  //   if (onChangeApp) {
  //     onChangeApp(id); // Pass the id to the onChangeApp callback
  //   }
  // };

  return (
    <div
      className="app_modules relative flex flex-col items-end gap-[13px] w-[39px] overflow-x-visible"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <button
        onMouseMove={() => setHoverd(true)}
        onMouseLeave={() => setHoverd(false)}
        // onClick={handleClick}
        className="transition-all cursor-pointer flex items-center justify-center w-[39px] h-[39px] rounded-[5px] "
        style={{
          backgroundColor: hoverd || show ? highlightColor : "",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: hoverd || show ? "rotate(-90deg)" : "",
            transition: "0.3s",
          }}
        >
          <path
            d="M8.95172 3.42188H4.97016C4.11506 3.42188 3.42188 4.11506 3.42188 4.97016V8.95172C3.42188 9.80681 4.11506 10.5 4.97016 10.5H8.95172C9.80681 10.5 10.5 9.80681 10.5 8.95172V4.97016C10.5 4.11506 9.80681 3.42188 8.95172 3.42188Z"
            fill={` ${hoverd || show ? "#00A7E1" : "#99A1B7"}`}
          />
          <path
            d="M19.0298 3.42188H15.0483C14.1932 3.42188 13.5 4.11506 13.5 4.97016V8.95172C13.5 9.80681 14.1932 10.5 15.0483 10.5H19.0298C19.8849 10.5 20.5781 9.80681 20.5781 8.95172V4.97016C20.5781 4.11506 19.8849 3.42188 19.0298 3.42188Z"
            fill={`${hoverd || show ? "#BEDCFF" : "#E0E3E9"}`}
          />
          <path
            d="M8.95172 13.5H4.97016C4.11506 13.5 3.42188 14.1932 3.42188 15.0483V19.0298C3.42188 19.8849 4.11506 20.5781 4.97016 20.5781H8.95172C9.80681 20.5781 10.5 19.8849 10.5 19.0298V15.0483C10.5 14.1932 9.80681 13.5 8.95172 13.5Z"
            fill={`${hoverd || show ? "#BEDCFF" : "#E0E3E9"}`}
          />
          <path
            d="M19.0298 13.5H15.0483C14.1932 13.5 13.5 14.1932 13.5 15.0483V19.0298C13.5 19.8849 14.1932 20.5781 15.0483 20.5781H19.0298C19.8849 20.5781 20.5781 19.8849 20.5781 19.0298V15.0483C20.5781 14.1932 19.8849 13.5 19.0298 13.5Z"
            fill={` ${hoverd || show ? "#00A7E1" : "#99A1B7"}`}
          />
        </svg>
      </button>
      <div
        className={` overflow-y-auto max-h-[400px] ${
          show ? "popup_effect" : "hidden"
        } transition-all  top-[3.8rem] z-20 rounded-lg main-shadow right-0 w-[315px] px-0 py-3 bg-white`}
      >
        <div className="px-6 py-4 w-full">
          <div className="flex items-center justify-between pt-1 pb-7 mb-2 border-b border-[#E7E7E7]">
            <div className="flex flex-col">
              <h4 className="text-[#333232] font-bold text-[16px]">
                Your Applications
              </h4>
            </div>
            <span className="text-[#1B84FF] bg-[#F1F5FF] rounded-[5px] py-1 px-3 text-[11px] font-bold">
              {data.filter((item) => item?.isActive)?.length} Applications
            </span>
          </div>
          <div className="flex flex-col w-full">
            {data?.map((item) =>
              item?.isActive ? (
                <Link
                  onClick={() => onChangeApp && onChangeApp(item?.id)}
                  key={item.id}
                  to={item.link}
                  className="flex items-center gap-3 text-[#333232] text-[14px] font-normal transition-all hover:bg-[#eeececb6] py-2 my-1 px-2 rounded-sm"
                >
                  <span className="w-[31px] h-[31px]">
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-[31px] h-[31px]"
                      />
                    )}
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p className="text-[12px] text-[#A3A3A3] font-normal -mt-[2px]">
                      {item?.description ? item?.description : ""}
                    </p>
                  </div>
                </Link>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulesMenu;
