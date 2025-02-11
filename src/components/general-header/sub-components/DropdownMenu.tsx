import React, { useEffect, useState, MouseEvent, useRef } from "react";
import { Button } from "@mui/material";
import ArrowDown from "../../icons/ArrowDown";
import { useLocation } from "react-router-dom";

// Define the types for the props
interface SubLink {
  isList?: string;
  url?: string;
  icon?: string;
  transMenuValue?: string;
  translationDashboardValue?: string;
  order?: number;
  id?: string;
  description?: string;
  isActive?: boolean;
  type?: string;
}

interface DropdownMenuProps {
  data: {
    isList: string;
    url: string;
    icon?: string;
    transMenuValue?: string;
    translationDashboardValue?: string;
    order?: number;
    id?: string;
    isActive?: boolean;
    subMenus?: SubLink[];
    type?: string;
  };
  highlightColor?: string;
  fontColor?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  data,
  highlightColor,
  fontColor,
}) => {
  const [show, setShow] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const pathName = useLocation()?.pathname;

  const handleClose = () => {
    setShow(false);
  };
  const updateDropdownStatus = () => {
    const ifMatch = data?.subMenus?.filter((item) => {
      if (
        (window.location.pathname === "/" || window.location.pathname === "") &&
        (window.location.href.endsWith("/")
          ? window.location.href.slice(0, -1)
          : window.location.href) ===
          (item?.url?.endsWith("/") ? item?.url?.slice(0, -1) : item?.url)
      ) {
        return true;
      } else if (
        window.location.pathname !== "/" &&
        window.location.pathname !== "" &&
        window.location.origin !==
          (item?.url?.endsWith("/") ? item?.url?.slice(0, -1) : item?.url) &&
        //@ts-ignore
        window.location.href.includes(item?.url)
      ) {
        return true;
      } else {
        return false;
      }
    });
    if (ifMatch?.length) {
      setActiveDropdown(true);
    } else {
      setActiveDropdown(false);
    }
  };
  const handleCloseDropdown = () => {
    setShow(false);
    updateDropdownStatus();
  };
  useEffect(() => {
    updateDropdownStatus();
  }, [pathName]);

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

  return (
    <div
      className={`w-fit relative  flex flex-col items-start gap-[14px] whitespace-nowrap`}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <Button
        sx={{
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        className={`text-[13px]  !px-3 font-normal capitalize flex items-center gap-2  dashboard_section header_link_normalMD transition-all duration-300  ${
          activeDropdown ? "active_header_link" : ""
        } `}
      >
        <div className="flex items-center gap-1">
          {data?.icon && (
            <img src={data.icon} alt="" className="max-w-[22px] max-h-[22px]" />
          )}
          <span
            className={` text-[13px] font-normal capitalize`}
            style={{ color: fontColor ? fontColor : "#333232" }}
          >
            {data?.transMenuValue || data?.translationDashboardValue}
          </span>
        </div>
        <ArrowDown />
      </Button>

      <div
        className={`${
          show ? "popup_effect" : "hidden"
        } transition-all fixed top-16 mt-3 z-20 w-full max-w-[120px] h-[350px] overflow-visible `}
      >
        <div className="px-2 w-[250px] bg-white  main-shadow max-h-[300px] overflow-y-auto h-fit  rounded-lg py-4 ">
          <div>
            <ul className="mb-0">
              {data?.subMenus?.length ? (
                data?.subMenus?.map((item) =>
                  item?.isActive || data?.type === "dashboard" ? (
                    <li
                      onClick={handleCloseDropdown}
                      key={item.id}
                      className="mb-[5px] py-2 transition-all hover:bg-[#eeecec75] cursor-pointer px-3 rounded-sm"
                    >
                      <a
                        href={item?.url}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <span className="w-[23px] h-[23px]">
                          {item?.icon && (
                            <img
                              src={item?.icon}
                              alt=""
                              className="max-w-[22px] max-h-[22px]"
                              width={22}
                            />
                          )}
                        </span>

                        <div>
                          <h5 className="text-sm text-[#333232] font-normal">
                            {item?.transMenuValue ||
                              item?.translationDashboardValue}
                          </h5>
                          <p className="text-[10px] text-[#A3A3A3] font-normal mt-[-1px]">
                            {item?.description}
                          </p>
                        </div>
                      </a>
                    </li>
                  ) : (
                    ""
                  )
                )
              ) : (
                <span className="block text-xs font-normal px-[25px] py-[8px] w-full text-gray-500 italic">
                  No Links Found
                </span>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
