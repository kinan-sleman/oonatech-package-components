import React, { useEffect, useState, useRef } from "react";
import ModulesMenu from "./sub-components/ModulesMenu";
import NotificationMenu from "./sub-components/NotificationMenu";
import SettingsPopup from "./sub-components/SettingsMenuPopup";
import ProfileMenu from "./sub-components/ProfileMenu";
import DropdownMenu from "./sub-components/DropdownMenu";
import { Button } from "@mui/material";
import { NavLink, Link, useLocation } from "react-router-dom";
import Search from "../icons/Search";

// Define the types for the props
interface HeaderLink {
  isList: string;
  url: string;
  icon?: string;
  transMenuValue: string;
  order?: number;
  id?: string;
  isActive?: boolean;
  isSystem?: boolean;
}

interface GeneralHeaderProps {
  logo?: string;
  logoLink: string;
  logoStyle?: string;
  modulesData?: any[];
  notificationData?: any[];
  settingsData?: any[];
  settingsImg?: string;
  settingsTitle?: string;
  newNotificationNumber?: number;
  viewAllLink?: string;
  showMoreText?: string;
  languageList?: any[];
  welcomeText?: string;
  handleLogout: () => void;
  username: string;
  userEmail: string;
  userRole: string;
  userImg?: string;
  profileLink: string;
  handleChangeLanguage: (language: string) => void;
  activeLanguage: {
    id: string | number;
    name: string;
    code: string;
  };
  headerLinks?: HeaderLink[];
  mainBgColor?: string;
  highlightColor?: string;
  fontColor?: string;
  zIndex?: string;
  onChangeApp?: ((id: string | number) => void | undefined) | undefined;
  onSearch?: (query: string) => void;
  withSearch?: boolean;
  settingsLink?: string;
}

const GeneralHeader: React.FC<GeneralHeaderProps> = ({
  logo,
  logoLink,
  logoStyle,
  modulesData,
  notificationData,
  settingsData,
  settingsImg,
  settingsTitle,
  newNotificationNumber,
  viewAllLink,
  showMoreText,
  languageList,
  welcomeText,
  handleLogout,
  username,
  userEmail,
  userRole,
  userImg,
  profileLink,
  handleChangeLanguage,
  activeLanguage,
  headerLinks,
  mainBgColor,
  highlightColor = "#FFF",
  fontColor = "#fff",
  zIndex,
  onChangeApp,
  onSearch,
  withSearch,
  settingsLink,
}) => {
  const [hoverLogo, setHoverLogo] = useState(false);
  const pathName = useLocation()?.pathname;
  const [search, setSearch] = useState(false);
  const [hoverSearch, setHoverSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearch(false);
      }
    };

    if (search) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [search, setSearch]);
  return (
    <section
      className={`topBarShadow  w-full pt-0 pb-0  relative ${
        zIndex ? zIndex : "z-[1000]"
      } `}
      style={{
        backgroundColor: "#e9f3ff82",
      }}
    >
      <section className="flex items-start justify-between containerh h-[55px]">
        <div className="relative w-[15rem] h-[2.3rem] pl-12  pt-[12px] rounded-lg flex items-center basis-[30%]">
          {/* <Search className="absolute left-2 top-[0.62rem] pointer-events-none" />
          <input
            onChange={(e) => console.log(e.target.value)}
            type="text"
            placeholder="Search..."
            className="w-full pl-6 pr-3 text-xs"
          /> */}
          <Link
            to={logoLink}
            className="cursor-pointer py-1 px-1 mt-[10px] mr-8 transition-all overflow-hidden max-h-[58px] flex items-center justify-center"
            onMouseMove={() => setHoverLogo(true)}
            onMouseLeave={() => setHoverLogo(false)}
            style={{ backgroundColor: hoverLogo ? highlightColor : "" }}
          >
            {logo && (
              <img
                src={logo}
                alt=""
                className={` max-w-[132px] max-h-[28px] ${
                  logoStyle ? logoStyle : ""
                }`}
              />
            )}
          </Link>
        </div>
        <div className="flex items-start gap-5 h-full max-w-[calc(100%-240px)] pl-5  basis-[40%]">
          <div
            className="flex w-full justify-center items-start pt-[10px] !gap-8 overflow-x-auto overflow-y-hidden"
            style={{ gap: "16px" }}
          >
            {headerLinks?.length &&
              headerLinks?.map((item) => {
                return item?.isList && item?.isActive ? (
                  <DropdownMenu
                    key={item.id}
                    data={item}
                    highlightColor={highlightColor}
                    fontColor={fontColor}
                  />
                ) : item?.isActive && item?.isSystem ? (
                  <NavLink
                    key={item.id}
                    to={item.url}
                    end
                    className={({ isActive }) =>
                      isActive
                        ? "header_link_normalMD transition-all duration-300 relative whitespace-nowrap h-[2.8rem] text-[0.85rem] pt-2 px-2 opacity-[1] capitalize border-b-[3px] border-[#00A7E1] !text-[#00A7E1]"
                        : "header_link_normalMD  duration-300 transition-colors relative whitespace-nowrap h-[2.8rem] text-[0.85rem] pt-2 px-2 opacity-[0.8] capitalize hover:text-[#00A7E1] hover:border-b-[3px] hover:border-[#00A7E1]"
                    }
                  >
                    {item.icon ? (
                      <img
                        src={item.icon}
                        alt=""
                        className="max-w-[22px] max-h-[22px]"
                      />
                    ) : (
                      ""
                    )}
                    {item.transMenuValue}
                  </NavLink>
                ) : item?.isActive && !item?.isSystem ? (
                  <a
                    key={item.id}
                    href={item.url}
                    className={` header_link_normalMD transition-all duration-300 relative whitespace-nowrap ${
                      (window.location.pathname === "/" ||
                        window.location.pathname === "") &&
                      (window.location.href.endsWith("/")
                        ? window.location.href.slice(0, -1)
                        : window.location.href) ===
                        (item?.url.endsWith("/")
                          ? item?.url.slice(0, -1)
                          : item?.url)
                        ? "active_header_link"
                        : window.location.pathname !== "/" &&
                          window.location.pathname !== "" &&
                          window.location.origin !==
                            (item?.url.endsWith("/")
                              ? item?.url.slice(0, -1)
                              : item?.url) &&
                          window.location.href.includes(item?.url)
                        ? "active_header_link"
                        : ""
                    } `}
                  >
                    <Button
                      className="flex !px-3 items-center gap-1 capitalize"
                      sx={{
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      {item.icon ? (
                        <img
                          src={item.icon}
                          alt=""
                          className="max-w-[22px] max-h-[22px]"
                        />
                      ) : (
                        ""
                      )}
                      <span
                        className={` text-[13px] font-normal capitalize `}
                        style={{ color: fontColor ? fontColor : "#333232" }}
                      >
                        {item.transMenuValue}
                      </span>
                    </Button>
                  </a>
                ) : (
                  ""
                );
              })}
          </div>
        </div>
        <div className="flex items-start gap-[2px] pt-[8px] basis-[30%] justify-end">
          {/* {modulesData?.length ? (
            <ModulesMenu
              data={modulesData}
              highlightColor={highlightColor}
              onChangeApp={onChangeApp}
            />
          ) : (
            ""
          )} */}
          {withSearch ? (
            <div
              className={` relative flex items-center gap-[13px] transition-all pt-1`}
              dir="rtl"
              ref={searchRef}
            >
              <input
                placeholder="Search .."
                className={`${
                  search
                    ? "w-[250px] focus:border-[#00A7E1] p-3 px-4 border opacity-100"
                    : "w-0 overflow-hidden opacity-0"
                } transition-all rounded-md bg-[#ffffffb8]  placeholder:text-xs placeholder:font-normal duration-300 h-[32px]  text-[13px]`}
                dir="ltr"
                onChange={(e) => onSearch && onSearch(e.target.value)}
              />
              <button
                onMouseMove={() => setHoverSearch(true)}
                onMouseLeave={() => setHoverSearch(false)}
                style={{
                  backgroundColor: hoverSearch && !search ? "#FFF" : "",
                }}
                className="transition-all cursor-pointer absolute right-0 flex items-center justify-center w-[39px] h-[39px] rounded-[5px] "
                onClick={() => setSearch(!search)}
              >
                {" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.4666 10.5335L14.4666 13.5335C14.7333 13.8002 14.7333 14.2002 14.4666 14.4668C14.3333 14.6002 14.1333 14.6668 13.9999 14.6668C13.8666 14.6668 13.6666 14.6002 13.5333 14.4668L10.5333 11.4668C9.53325 12.2002 8.33325 12.6668 6.99992 12.6668C3.86659 12.6668 1.33325 10.1335 1.33325 7.00016C1.33325 3.86683 3.86659 1.3335 6.99992 1.3335C10.1333 1.3335 12.6666 3.86683 12.6666 7.00016C12.6666 8.3335 12.1999 9.60016 11.4666 10.5335ZM6.99992 2.66683C4.59992 2.66683 2.66659 4.60016 2.66659 7.00016C2.66659 9.40016 4.59992 11.3335 6.99992 11.3335C8.19992 11.3335 9.26659 10.8668 10.0666 10.0668C10.8666 9.26683 11.3333 8.20016 11.3333 7.00016C11.3333 4.60016 9.39992 2.66683 6.99992 2.66683Z"
                    fill={hoverSearch && !search ? "#00A7E1" : "#99A1B7"}
                  />
                  <mask
                    id="mask0_1499_551"
                    maskUnits="userSpaceOnUse"
                    x="1"
                    y="1"
                    width="14"
                    height="14"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.4666 10.5335L14.4666 13.5335C14.7333 13.8002 14.7333 14.2002 14.4666 14.4668C14.3333 14.6002 14.1333 14.6668 13.9999 14.6668C13.8666 14.6668 13.6666 14.6002 13.5333 14.4668L10.5333 11.4668C9.53325 12.2002 8.33325 12.6668 6.99992 12.6668C3.86659 12.6668 1.33325 10.1335 1.33325 7.00016C1.33325 3.86683 3.86659 1.3335 6.99992 1.3335C10.1333 1.3335 12.6666 3.86683 12.6666 7.00016C12.6666 8.3335 12.1999 9.60016 11.4666 10.5335ZM6.99992 2.66683C4.59992 2.66683 2.66659 4.60016 2.66659 7.00016C2.66659 9.40016 4.59992 11.3335 6.99992 11.3335C8.19992 11.3335 9.26659 10.8668 10.0666 10.0668C10.8666 9.26683 11.3333 8.20016 11.3333 7.00016C11.3333 4.60016 9.39992 2.66683 6.99992 2.66683Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_1499_551)">
                    <rect
                      width="16"
                      height="16"
                      fill={hoverSearch && !search ? "#00A7E1" : "#99A1B7"}
                    />
                  </g>
                </svg>
              </button>
            </div>
          ) : (
            ""
          )}
          {settingsData?.length ? (
            <SettingsPopup
              data={settingsData}
              settingsImg={settingsImg}
              title={settingsTitle}
              highlightColor={highlightColor}
            />
          ) : (
            ""
          )}
          {notificationData?.length ? (
            <NotificationMenu
              data={notificationData}
              newNotificationNumber={newNotificationNumber}
              viewAllLink={viewAllLink}
              showMoreText={showMoreText}
              highlightColor={highlightColor}
            />
          ) : (
            ""
          )}

          <ProfileMenu
            username={username}
            userEmail={userEmail}
            userRole={userRole}
            userImg={userImg}
            languageList={languageList}
            welcomeText={welcomeText}
            handleLogout={handleLogout}
            profileLink={profileLink}
            activeLanguage={activeLanguage}
            handleChangeLanguage={handleChangeLanguage}
            settingsLink={settingsLink}
          />
        </div>
      </section>
    </section>
  );
};

export default GeneralHeader;
