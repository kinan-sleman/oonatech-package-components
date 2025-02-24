import React, { useState, MouseEvent, MouseEventHandler, useRef } from "react";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";

interface Language {
  id: number | number;
  icon: string;
  name: string;
}

interface ProfileMenuProps {
  languageList: Language[] | undefined;
  welcomeText?: string;
  username: string;
  userEmail: string;
  userRole: string;
  userImg: string | undefined;
  handleLogout: () => void;
  profileLink?: string;
  activeLanguage: {
    id: string | number;
    name: string;
    code: string;
  };
  handleChangeLanguage: any;
  settingsLink?: string;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  languageList,
  welcomeText,
  username,
  userEmail,
  userRole,
  userImg,
  handleLogout,
  profileLink,
  activeLanguage,
  handleChangeLanguage,
  settingsLink,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [show, setShow] = useState(false);
  const [showLang, setShowLang] = useState(false);

  // const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

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
      className="relative flex flex-col items-end gap-[13px] w-[93px] overflow-x-visible"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div
        className="flex items-center gap-1 cursor-pointer ml-[15px]"
      // onMouseMove={handleMouseEnter}
      >
        <div className="flex flex-col text-right">
          <h5 className="text-[#A4A4A4] text-[12px] font-normal -mb-[2px]">
            {welcomeText ? welcomeText : "Hello"}
          </h5>

          {/* text-[#333232] */}
          <span className="text-[black] text-[13px] font-normal">
            {username?.split(" ")[0]}
          </span>
        </div>
        {userImg ? (
          <img src={userImg} className={`rounded-full transition-shadow duration-200 hover:shadow-[1px_0px_3px_2px_rgba(162,228,255,1)] ${show ? "shadow-[1px_0px_3px_2px_rgba(162,228,255,1)]" : ""} p-[2px]`} alt="img" width={42} />
        ) : (
          <div className="rounded-full uppercase w-[40px] h-[40px] flex items-center justify-center p-1 text-white bg-green-400">
            {username
              ? username.split(" ").length > 1
                ? `${username.split(" ")[0].charAt(0)}${username.split(" ")[1]?.charAt(0) || ""}`
                : username.slice(0, 2).toUpperCase() 
              : "OT"} 
          </div>
        )}
      </div>

      <div
        className={`${show ? "popup_effect" : "hidden"
          } transition-all  rounded-lg main-shadow z-20  w-[265px]  px-0 py-5  bg-white`}
      >
        <div className="flex items-center justify-between pt-2  mb-2 pb-5 border-b-[1px] px-5 border-[#DDDDDD]">
          <div className="flex items-start gap-2">
            {userImg ? (
              <img src={userImg} className="rounded-full transition-shadow duration-200 hover:shadow-[1px_0px_3px_2px_rgba(162,228,255,1)] p-[2px]" alt="img" width={42} />
            ) : (
              <div className="rounded-full uppercase w-[40px] h-[40px] flex items-center justify-center p-1 text-white bg-green-400">
                {username
                  ? username.split(" ").length > 1
                    ? `${username.split(" ")[0].charAt(0)}${username.split(" ")[1]?.charAt(0) || ""}`
                    : username.slice(0, 2).toUpperCase() 
                  : "OT"} 
              </div>
            )}
            <div className="flex flex-col">
              <h4 className="text-[#333232] font-normal text-[14px]   text-left">
                {username ? username : ""}
              </h4>
              <p className="text-[#B5B5B5] font-normal text-[11px] text-left">
                {userEmail ? userEmail : "oonatech@gmail.com"}
              </p>
            </div>
          </div>
          <span className="text-[#2CE2A0] text-[10px] font-normal bg-[#D9FFE6] rounded-[7px] px-2 py-[2px]">
            {userRole ? userRole : ""}
          </span>
        </div>

        {profileLink?.length ? (
          <div className="px-3">
            <Link
              to={profileLink}
              className="flex gap-2 text-sm text-[#333232] pt-3 pb-3 px-2   w-full items-center transition-all hover:bg-[#eeececb6]"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.87678 6.50625C6.87678 4.78168 8.27501 3.38344 9.9999 3.38344C11.7248 3.38344 13.123 4.78168 13.123 6.50625C13.123 8.23114 11.7248 9.62937 9.9999 9.62937C8.27502 9.62937 6.87678 8.23114 6.87678 6.50625ZM9.9999 2.45C7.75979 2.45 5.94365 4.26614 5.94365 6.50625C5.94365 8.74636 7.75978 10.5628 9.9999 10.5628C12.24 10.5628 14.0562 8.74667 14.0562 6.50625C14.0562 4.26614 12.24 2.45 9.9999 2.45Z"
                  fill="#333232"
                  stroke="black"
                  strokeWidth="0.1"
                />
                <path
                  d="M3.38344 17.0834C3.38344 13.6854 6.31852 10.8834 10 10.8834C13.6812 10.8834 16.6166 13.6854 16.6166 17.0834C16.6166 17.2072 16.6657 17.3259 16.7533 17.4135C16.8408 17.501 16.9595 17.5502 17.0833 17.5502C17.2071 17.5502 17.3258 17.501 17.4133 17.4135C17.5008 17.3259 17.55 17.2072 17.55 17.0834C17.55 13.1173 14.1428 9.95 10 9.95C5.85752 9.95 2.45 13.1173 2.45 17.0834C2.45 17.2072 2.49917 17.3259 2.5867 17.4135C2.67423 17.501 2.79294 17.5502 2.91672 17.5502C3.0405 17.5502 3.15921 17.501 3.24674 17.4135C3.33427 17.3259 3.38344 17.2072 3.38344 17.0834Z"
                  fill="#333232"
                  stroke="black"
                  strokeWidth="0.1"
                />
              </svg>
              Profile
            </Link>
          </div>
        ) : (
          ""
        )}

        <div
          className="the_lang_dev px-3"
          onMouseLeave={() => setShowLang(false)}
          onMouseMove={() => setShowLang(true)}
        >
          <button className="flex gap-3 !capitalize text-sm !text-[#333232] py-3 px-2 justify-between  w-full items-center transition-all hover:bg-[#eeececb6]">
            <div className="flex items-center gap-3">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 0C3.357 0 0 3.357 0 7.5C0 11.643 3.357 15 7.5 15C11.643 15 15 11.643 15 7.5C15 3.357 11.643 0 7.5 0ZM6.531 0.855C5.802 1.761 5.235 2.772 4.845 3.846C4.065 3.636 3.303 3.33 2.58 2.928C3.6 1.833 4.98 1.077 6.531 0.855ZM2.244 3.321C3.021 3.762 3.84 4.098 4.683 4.326C4.392 5.262 4.23 6.243 4.206 7.245H0.789C0.843 5.766 1.38 4.407 2.244 3.321ZM0.789 7.752H4.206C4.23 8.757 4.392 9.735 4.683 10.671C3.84 10.902 3.021 11.235 2.244 11.676C1.38 10.593 0.843 9.234 0.789 7.752ZM2.58 12.069C3.303 11.67 4.062 11.364 4.845 11.151C5.238 12.228 5.805 13.236 6.531 14.142C4.98 13.92 3.6 13.167 2.58 12.069ZM7.248 14.208C6.414 13.263 5.772 12.189 5.34 11.031C5.967 10.896 6.606 10.818 7.248 10.803V14.208ZM7.248 10.299C6.552 10.314 5.859 10.401 5.175 10.551C4.893 9.654 4.737 8.715 4.713 7.752H7.248V10.299ZM7.248 7.248H4.713C4.737 6.285 4.893 5.346 5.175 4.449C5.856 4.602 6.552 4.686 7.248 4.701V7.248ZM7.248 4.194C6.609 4.179 5.97 4.101 5.34 3.966C5.769 2.808 6.411 1.734 7.248 0.789V4.194ZM14.211 7.248H10.791C10.767 6.261 10.608 5.28 10.314 4.329C11.16 4.098 11.982 3.762 12.759 3.321C13.62 4.407 14.157 5.766 14.211 7.248ZM12.42 2.931C11.697 3.333 10.932 3.639 10.149 3.849C9.762 2.787 9.201 1.773 8.466 0.855C10.02 1.077 11.4 1.833 12.42 2.931ZM7.755 0.792C8.601 1.749 9.234 2.829 9.657 3.969C9.03 4.104 8.394 4.179 7.755 4.197V0.792ZM7.755 4.701C8.448 4.686 9.141 4.602 9.822 4.449C10.107 5.358 10.263 6.3 10.284 7.245H7.755V4.701ZM7.755 7.752H10.284C10.26 8.697 10.107 9.639 9.822 10.548C9.141 10.398 8.451 10.314 7.755 10.296V7.752ZM7.755 10.806C8.394 10.821 9.03 10.896 9.657 11.034C9.234 12.174 8.601 13.254 7.755 14.211V10.806ZM8.469 14.145C9.204 13.227 9.765 12.213 10.152 11.151C10.935 11.361 11.697 11.667 12.423 12.069C11.4 13.167 10.02 13.923 8.469 14.145ZM12.756 11.679C11.979 11.238 11.157 10.902 10.311 10.671C10.605 9.723 10.764 8.739 10.788 7.752H14.208C14.157 9.234 13.62 10.593 12.756 11.679Z"
                  fill="#333232"
                />
              </svg>

              <span>Languages</span>
            </div>
            {activeLanguage?.id && (
              <span className="text-xs bg-[#fdba74] text-white px-2 py-1 rounded-md w-fit text-center">
                {
                  languageList?.filter(
                    (item) => item.id === activeLanguage?.id
                  )[0].name
                }
              </span>
            )}
          </button>
          <ul
            className={`${showLang ? "block" : "hidden"
              } transition-all absolute top-[13rem]  rounded-lg main-shadow max-h-[200px] overflow-y-auto  right-[16rem] w-[195px] bg-white z-[2]`}
          >
            {languageList?.map((lng) => (
              <li
                key={lng.id}
                className={`flex gap-3 hover:bg-[#eeececb6] transition-all text-sm  cursor-pointer px-3 py-2`}
                onClick={() => handleChangeLanguage(lng?.id)}
              >
                <ReactCountryFlag
                  //@ts-ignore
                  countryCode={lng?.code}
                  svg
                  style={{ fontSize: "18px" }}
                />
                <span>{lng.name}</span>
                {/* {activeLanguage === lng.id && (
                  
                )} */}
              </li>
            ))}
          </ul>
        </div>
        {settingsLink ? (
          <div className="px-3">
            {settingsLink?.startsWith("http") ? (
              <a
                href={settingsLink}
                className="flex gap-3 text-sm text-[#333232] pt-3 pb-3 px-2   w-full items-center transition-all hover:bg-[#eeececb6]"
              >
                <svg
                  fill="#333232"
                  height="17"
                  width="17"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 54 54"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M51.22,21h-5.052c-0.812,0-1.481-0.447-1.792-1.197s-0.153-1.54,0.42-2.114l3.572-3.571
		c0.525-0.525,0.814-1.224,0.814-1.966c0-0.743-0.289-1.441-0.814-1.967l-4.553-4.553c-1.05-1.05-2.881-1.052-3.933,0l-3.571,3.571
		c-0.574,0.573-1.366,0.733-2.114,0.421C33.447,9.313,33,8.644,33,7.832V2.78C33,1.247,31.753,0,30.22,0H23.78
		C22.247,0,21,1.247,21,2.78v5.052c0,0.812-0.447,1.481-1.197,1.792c-0.748,0.313-1.54,0.152-2.114-0.421l-3.571-3.571
		c-1.052-1.052-2.883-1.05-3.933,0l-4.553,4.553c-0.525,0.525-0.814,1.224-0.814,1.967c0,0.742,0.289,1.44,0.814,1.966l3.572,3.571
		c0.573,0.574,0.73,1.364,0.42,2.114S8.644,21,7.832,21H2.78C1.247,21,0,22.247,0,23.78v6.439C0,31.753,1.247,33,2.78,33h5.052
		c0.812,0,1.481,0.447,1.792,1.197s0.153,1.54-0.42,2.114l-3.572,3.571c-0.525,0.525-0.814,1.224-0.814,1.966
		c0,0.743,0.289,1.441,0.814,1.967l4.553,4.553c1.051,1.051,2.881,1.053,3.933,0l3.571-3.572c0.574-0.573,1.363-0.731,2.114-0.42
		c0.75,0.311,1.197,0.98,1.197,1.792v5.052c0,1.533,1.247,2.78,2.78,2.78h6.439c1.533,0,2.78-1.247,2.78-2.78v-5.052
		c0-0.812,0.447-1.481,1.197-1.792c0.751-0.312,1.54-0.153,2.114,0.42l3.571,3.572c1.052,1.052,2.883,1.05,3.933,0l4.553-4.553
		c0.525-0.525,0.814-1.224,0.814-1.967c0-0.742-0.289-1.44-0.814-1.966l-3.572-3.571c-0.573-0.574-0.73-1.364-0.42-2.114
		S45.356,33,46.168,33h5.052c1.533,0,2.78-1.247,2.78-2.78V23.78C54,22.247,52.753,21,51.22,21z M52,30.22
		C52,30.65,51.65,31,51.22,31h-5.052c-1.624,0-3.019,0.932-3.64,2.432c-0.622,1.5-0.295,3.146,0.854,4.294l3.572,3.571
		c0.305,0.305,0.305,0.8,0,1.104l-4.553,4.553c-0.304,0.304-0.799,0.306-1.104,0l-3.571-3.572c-1.149-1.149-2.794-1.474-4.294-0.854
		c-1.5,0.621-2.432,2.016-2.432,3.64v5.052C31,51.65,30.65,52,30.22,52H23.78C23.35,52,23,51.65,23,51.22v-5.052
		c0-1.624-0.932-3.019-2.432-3.64c-0.503-0.209-1.021-0.311-1.533-0.311c-1.014,0-1.997,0.4-2.761,1.164l-3.571,3.572
		c-0.306,0.306-0.801,0.304-1.104,0l-4.553-4.553c-0.305-0.305-0.305-0.8,0-1.104l3.572-3.571c1.148-1.148,1.476-2.794,0.854-4.294
		C10.851,31.932,9.456,31,7.832,31H2.78C2.35,31,2,30.65,2,30.22V23.78C2,23.35,2.35,23,2.78,23h5.052
		c1.624,0,3.019-0.932,3.64-2.432c0.622-1.5,0.295-3.146-0.854-4.294l-3.572-3.571c-0.305-0.305-0.305-0.8,0-1.104l4.553-4.553
		c0.304-0.305,0.799-0.305,1.104,0l3.571,3.571c1.147,1.147,2.792,1.476,4.294,0.854C22.068,10.851,23,9.456,23,7.832V2.78
		C23,2.35,23.35,2,23.78,2h6.439C30.65,2,31,2.35,31,2.78v5.052c0,1.624,0.932,3.019,2.432,3.64
		c1.502,0.622,3.146,0.294,4.294-0.854l3.571-3.571c0.306-0.305,0.801-0.305,1.104,0l4.553,4.553c0.305,0.305,0.305,0.8,0,1.104
		l-3.572,3.571c-1.148,1.148-1.476,2.794-0.854,4.294c0.621,1.5,2.016,2.432,3.64,2.432h5.052C51.65,23,52,23.35,52,23.78V30.22z"
                    />
                    <path
                      d="M27,18c-4.963,0-9,4.037-9,9s4.037,9,9,9s9-4.037,9-9S31.963,18,27,18z M27,34c-3.859,0-7-3.141-7-7s3.141-7,7-7
		s7,3.141,7,7S30.859,34,27,34z"
                    />
                  </g>
                </svg>
                General Settings
              </a>
            ) : (
              <Link
                to={settingsLink}
                className="flex gap-3 text-sm text-[#333232] pt-3 pb-3 px-2   w-full items-center transition-all hover:bg-[#eeececb6]"
              >
                <svg
                  fill="#333232"
                  height="17"
                  width="17"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 54 54"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M51.22,21h-5.052c-0.812,0-1.481-0.447-1.792-1.197s-0.153-1.54,0.42-2.114l3.572-3.571
		c0.525-0.525,0.814-1.224,0.814-1.966c0-0.743-0.289-1.441-0.814-1.967l-4.553-4.553c-1.05-1.05-2.881-1.052-3.933,0l-3.571,3.571
		c-0.574,0.573-1.366,0.733-2.114,0.421C33.447,9.313,33,8.644,33,7.832V2.78C33,1.247,31.753,0,30.22,0H23.78
		C22.247,0,21,1.247,21,2.78v5.052c0,0.812-0.447,1.481-1.197,1.792c-0.748,0.313-1.54,0.152-2.114-0.421l-3.571-3.571
		c-1.052-1.052-2.883-1.05-3.933,0l-4.553,4.553c-0.525,0.525-0.814,1.224-0.814,1.967c0,0.742,0.289,1.44,0.814,1.966l3.572,3.571
		c0.573,0.574,0.73,1.364,0.42,2.114S8.644,21,7.832,21H2.78C1.247,21,0,22.247,0,23.78v6.439C0,31.753,1.247,33,2.78,33h5.052
		c0.812,0,1.481,0.447,1.792,1.197s0.153,1.54-0.42,2.114l-3.572,3.571c-0.525,0.525-0.814,1.224-0.814,1.966
		c0,0.743,0.289,1.441,0.814,1.967l4.553,4.553c1.051,1.051,2.881,1.053,3.933,0l3.571-3.572c0.574-0.573,1.363-0.731,2.114-0.42
		c0.75,0.311,1.197,0.98,1.197,1.792v5.052c0,1.533,1.247,2.78,2.78,2.78h6.439c1.533,0,2.78-1.247,2.78-2.78v-5.052
		c0-0.812,0.447-1.481,1.197-1.792c0.751-0.312,1.54-0.153,2.114,0.42l3.571,3.572c1.052,1.052,2.883,1.05,3.933,0l4.553-4.553
		c0.525-0.525,0.814-1.224,0.814-1.967c0-0.742-0.289-1.44-0.814-1.966l-3.572-3.571c-0.573-0.574-0.73-1.364-0.42-2.114
		S45.356,33,46.168,33h5.052c1.533,0,2.78-1.247,2.78-2.78V23.78C54,22.247,52.753,21,51.22,21z M52,30.22
		C52,30.65,51.65,31,51.22,31h-5.052c-1.624,0-3.019,0.932-3.64,2.432c-0.622,1.5-0.295,3.146,0.854,4.294l3.572,3.571
		c0.305,0.305,0.305,0.8,0,1.104l-4.553,4.553c-0.304,0.304-0.799,0.306-1.104,0l-3.571-3.572c-1.149-1.149-2.794-1.474-4.294-0.854
		c-1.5,0.621-2.432,2.016-2.432,3.64v5.052C31,51.65,30.65,52,30.22,52H23.78C23.35,52,23,51.65,23,51.22v-5.052
		c0-1.624-0.932-3.019-2.432-3.64c-0.503-0.209-1.021-0.311-1.533-0.311c-1.014,0-1.997,0.4-2.761,1.164l-3.571,3.572
		c-0.306,0.306-0.801,0.304-1.104,0l-4.553-4.553c-0.305-0.305-0.305-0.8,0-1.104l3.572-3.571c1.148-1.148,1.476-2.794,0.854-4.294
		C10.851,31.932,9.456,31,7.832,31H2.78C2.35,31,2,30.65,2,30.22V23.78C2,23.35,2.35,23,2.78,23h5.052
		c1.624,0,3.019-0.932,3.64-2.432c0.622-1.5,0.295-3.146-0.854-4.294l-3.572-3.571c-0.305-0.305-0.305-0.8,0-1.104l4.553-4.553
		c0.304-0.305,0.799-0.305,1.104,0l3.571,3.571c1.147,1.147,2.792,1.476,4.294,0.854C22.068,10.851,23,9.456,23,7.832V2.78
		C23,2.35,23.35,2,23.78,2h6.439C30.65,2,31,2.35,31,2.78v5.052c0,1.624,0.932,3.019,2.432,3.64
		c1.502,0.622,3.146,0.294,4.294-0.854l3.571-3.571c0.306-0.305,0.801-0.305,1.104,0l4.553,4.553c0.305,0.305,0.305,0.8,0,1.104
		l-3.572,3.571c-1.148,1.148-1.476,2.794-0.854,4.294c0.621,1.5,2.016,2.432,3.64,2.432h5.052C51.65,23,52,23.35,52,23.78V30.22z"
                    />
                    <path
                      d="M27,18c-4.963,0-9,4.037-9,9s4.037,9,9,9s9-4.037,9-9S31.963,18,27,18z M27,34c-3.859,0-7-3.141-7-7s3.141-7,7-7
		s7,3.141,7,7S30.859,34,27,34z"
                    />
                  </g>
                </svg>
                General Settings
              </Link>
            )}
          </div>
        ) : (
          ""
        )}
        <div className="px-3">
          <button
            className="flex gap-3 text-sm text-[#333232] pt-3 pb-3 px-2   w-full items-center transition-all hover:bg-[#eeececb6]"
            onClick={handleLogout}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.66289 3.03945V3.18945V3.787V3.937H9.51289H4.27417C4.19922 3.937 4.12409 3.96654 4.04531 4.0453C4.04531 4.04531 4.0453 4.04531 4.0453 4.04531M9.66289 3.03945L3.93924 15.0721C3.83775 14.9706 3.787 14.8589 3.787 14.7371V4.27418C3.787 4.15239 3.83775 4.04075 3.93924 3.93924L4.0453 4.04531M9.66289 3.03945H9.51289H4.27057C3.93615 3.03945 3.64487 3.16308 3.40397 3.40397C3.16282 3.64513 3.03945 3.93772 3.03945 4.27418V14.7371C3.03945 15.0736 3.16282 15.3662 3.40397 15.6073C3.64487 15.8482 3.93615 15.9719 4.27057 15.9719H9.51289H9.66289V15.8219V15.2243V15.0743H9.51289H4.27417C4.19922 15.0743 4.12409 15.0448 4.04531 14.966M9.66289 3.03945L4.04531 14.966M4.0453 4.04531C3.96654 4.12409 3.937 4.19922 3.937 4.27418V14.7371C3.937 14.8121 3.96654 14.8872 4.04531 14.966M4.0453 4.04531L4.04531 14.966M13.1687 12.152L13.2744 12.2493L13.3762 12.1479L15.9163 9.61532L16.0226 9.50941L15.9167 9.40318L13.3521 6.83102L13.2445 6.72303L13.1383 6.83246L12.7127 7.27093L12.6098 7.37697L12.7143 7.48146L14.2897 9.05687H7.28403H7.13403V9.20687V9.80444V9.95444H7.28403H14.2989L12.7235 11.5299L12.6129 11.6404L12.7279 11.7463L13.1687 12.152Z"
                fill="#333232"
                stroke="#333232"
                strokeWidth="0.3"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
