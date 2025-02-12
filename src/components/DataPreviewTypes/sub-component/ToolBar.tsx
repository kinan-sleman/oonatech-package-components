// @ts-nocheck
import React, { ReactNode, useEffect, useState } from "react";
import {
  AvailableViews,
  TableDataTypes,
  ToolBarBtnsTypes,
} from "./types/tableTypes";
import Search from "../../icons/Search";
import TrashOutlined from "../../icons/TrashOutlined";
import Tree from "../../icons/Tree";
import DataDisplay from "../../icons/Table";
import Card from "../../icons/Card";
import { mainDataType } from "../DataDisplay";
import Path from "../../icons/Path";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Button, Menu, MenuItem } from "@mui/material";

const ToolBar = ({
  btns,
  filteredData,
  setFilteredData,
  data,
  checkedIDs,
  setCheckedIDs,
  views,
  view,
  setView,
  searching,
  handleSearchInput,
  handleDeleteSelected,
  mainTitle,
  hideCheckedOptions,
}: {
  view: AvailableViews[0];
  setView: (view: AvailableViews[0]) => void;
  views?: AvailableViews;
  data: mainDataType;
  btns?: ToolBarBtnsTypes;
  setFilteredData?: (
    data: mainDataType | ((prev: TableDataTypes) => TableDataTypes)
  ) => void;
  filteredData?: TableDataTypes;
  checkedIDs?: string[];
  setCheckedIDs?: any;
  searching?: boolean;
  handleSearchInput?: (query: string) => void;
  handleDeleteSelected?: (e: any) => any;
  mainTitle?: string;
  hideCheckedOptions?: boolean;
}) => {
  const [filter, setFilter] = useState("");
  const [SearchQuery, setSearchQuery] = useState("");
  // useEffect(() => {
  //   handleSearchInput && handleSearchInput(SearchQuery);
  // }, [SearchQuery]);
  return (
    <div>
      {mainTitle ? (
        <h3 className="text-[#333232] font-bold text-base p-5 pt-4 pb-4">
          {mainTitle}
        </h3>
      ) : (
        ""
      )}
      <div
        className={`flex justify-between items-center p-5  ${
          mainTitle ? "pt-0" : ""
        }`}
      >
        <div className=" flex items-center gap-3">
          <div
            className={`relative flex w-full max-w-[355px] items-center ${
              searching ? "invisible" : ""
            }`}
          >
            <Search className="absolute left-3 pointer-events-none" />
            <input
              // value={SearchQuery}
              // onChange={(e) => {
              //   setFilteredData((prev) => {
              //     return data.filter((row) => {
              //       let boolean: boolean = false;
              //       Object.values(row).forEach((columns) => {
              //         // console.log(typeof columns);

              //         if (typeof columns == "string") {
              //           if (
              //             columns
              //               .toLowerCase()
              //               .includes(e.target.value.toLowerCase())
              //           )
              //             boolean = true;
              //         } else if (typeof columns == "object") {
              //           Object.values(columns).forEach((item) => {
              //             if (
              //               item
              //                 .toLowerCase()
              //                 .includes(e.target.value.toLowerCase())
              //             )
              //               boolean = true;
              //           });
              //         }
              //       });
              //       return boolean;
              //     });
              //   });
              //   setFilter(e.target.value);
              // }}
              // onChange={(e) => {
              //   setFilteredData((prev) => {
              //     return data.filter((row) => {
              //       let boolean = false;
              //       Object.values(row).forEach((columns) => {
              //         if (columns !== null && columns !== undefined) {
              //           if (typeof columns === "string") {
              //             if (columns.toLowerCase().includes(e.target.value.toLowerCase())) {
              //               boolean = true;
              //             }
              //           } else if (typeof columns === "object") {
              //             Object.values(columns).forEach((item) => {
              //               if (item !== null && item !== undefined) {
              //                 if (item.toLowerCase().includes(e.target.value.toLowerCase())) {
              //                   boolean = true;
              //                 }
              //               }
              //             });
              //           }
              //         }
              //       });
              //       return boolean;
              //     });
              //   });
              //   setFilter(e.target.value);
              // }}
              onChange={(e) => {
                handleSearchInput(e.target.value);
                // setSearchQuery(e.target.value);
              }}
              type="text"
              placeholder="Search..."
              className="border border-[#EAEAEA] rounded-lg text-xs leading-[18px] h-[40px] pl-[34px] pr-[9px] w-full min-w-[250px]"
            />
          </div>
          <div>
            {btns?.map(
              (
                {
                  icon,
                  text,
                  onClick,
                  href,
                  color,
                  width,
                  className,
                  status,
                  type,
                  options,
                  exportPDF,
                  exportExcel,
                },
                i: number
              ) => {
                switch (type) {
                  case "selectBox": {
                    return (
                      <div className="relative" key={i}>
                        <select
                          onChange={onClick}
                          className="border cursor-pointer border-[#EAEAEA] px-2 py-1 h-[40px] rounded-lg min-w-[120px]"
                        >
                          {options?.map((item) => (
                            <option
                              key={item?.id}
                              value={item?.value}
                              selected={item?.selected}
                            >
                              {item?.option}
                            </option>
                          ))}
                        </select>
                        <span
                          className="absolute top-[50%] right-[12px]  cursor-pointer"
                          style={{ transform: "translateY(-50%)" }}
                        >
                          <Path />
                        </span>
                      </div>
                    );
                  }

                  default: {
                    return null;
                  }
                }
              }
            )}
          </div>
        </div>
        {!hideCheckedOptions && (
        <div className="flex flex-row gap-3 items-center">
          <div className="flex gap-2">
            {views?.includes("table") && (
              <ViewButton view="table" current={view} setView={setView} />
            )}
            {views?.includes("cards") && (
              <ViewButton view="cards" current={view} setView={setView} />
            )}
            {views?.includes("tree") && (
              <ViewButton view="tree" current={view} setView={setView} />
            )}
          </div>
          {checkedIDs?.length ? (
            <>
              <p className="text-sm text-[#A4A4A4]">
                {checkedIDs?.length} of {data?.items?.length} row(s) selected
              </p>
              <button
                onClick={() => {
                  setCheckedIDs([]);
                }}
                className={`text-[#1B84FF] flex gap-[6px] rounded-[10px] items-center h-10 justify-center bg-[#E9F3FF] w-[130px]`}
              >
                Clear Selection
              </button>
              <button
                onClick={handleDeleteSelected}
                className={`text-white flex gap-[6px] rounded-[10px] items-center h-10 justify-center bg-[#FD344C] w-[170px]`}
              >
                <TrashOutlined />
                Delete Selected
              </button>
            </>
          ) : (
            btns?.map(
              (
                {
                  icon,
                  text,
                  onClick,
                  href,
                  color,
                  width,
                  className,
                  status,
                  type,
                  options,
                  exportPDF,
                  exportExcel,
                },
                i: number
              ) => {
                const DynamicTag = href ? "a" : "button";
                // console.log(status);
                switch (type) {
                  case "export": {
                    return (
                      <PopupState
                        variant="popover"
                        popupId="demo-popup-menu"
                        key={i}
                      >
                        {(popupState) => (
                          <React.Fragment>
                            <Button
                              sx={{
                                color: "rgb(27, 132, 255)",
                                backgroundColor: "rgb(233, 243, 255)",
                                width: "108px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                gap: "7px",
                                textTransform: "capitalize",
                                borderRadius: "10px",
                              }}
                              {...bindTrigger(popupState)}
                            >
                              <svg
                                width="20"
                                height="20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.6998 7.4165C16.6998 7.67484 17.9248 9.2165 17.9248 12.5915V12.6998C17.9248 16.4248 16.4331 17.9165 12.7081 17.9165H7.28307C3.55807 17.9165 2.06641 16.4248 2.06641 12.6998V12.5915C2.06641 9.2415 3.27474 7.69984 6.22474 7.42484"
                                  stroke="#1B84FF"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M10 12.4999V3.0166"
                                  stroke="#1B84FF"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M12.7918 4.87516L10.0001 2.0835L7.2085 4.87516"
                                  stroke="#1B84FF"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                              Export
                            </Button>
                            <Menu
                              {...bindMenu(popupState)}
                              sx={{
                                "& .MuiPaper-root ": {
                                  width: "170px",
                                  borderRadius: "5px",
                                },
                                "& ul": {
                                  padding: 0,
                                  "& li": {
                                    py: "13px",
                                    color: "#333232",
                                    fontSize: "13px",
                                  },
                                  // backgroundColor: "rgb(233, 243, 255)",
                                  // borderRadius: "10px",
                                },
                              }}
                            >
                              <MenuItem
                                sx={{
                                  borderBottom: "1px solid #EDEDED",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                                onClick={async () => {
                                  exportPDF && (await exportPDF());
                                  popupState.close();
                                }}
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M21.8251 1.2V19.575H2.17505V5.175L7.35005 0H20.6625C21.3001 0 21.8251 0.5625 21.8251 1.2Z"
                                    fill="#EFF2F3"
                                  />
                                  <path
                                    d="M6.2624 5.175H2.2124L7.3499 0L7.3124 4.05C7.3499 4.6875 6.8624 5.175 6.2624 5.175Z"
                                    fill="#DADEDE"
                                  />
                                  <path
                                    d="M13.9125 10.5001C12.825 9.45012 12.0375 8.25012 12.0375 8.25012C12.3375 7.80012 13.05 5.21262 11.9625 4.46262C10.875 3.71262 10.3125 5.10012 10.3125 5.10012C9.82495 6.82512 10.9875 8.40012 10.9875 8.40012L9.67495 11.2876C9.52495 11.2876 5.36245 12.9001 6.78745 14.8876C8.24995 16.8751 10.275 12.0751 10.275 12.0751C11.0625 11.8126 13.4625 11.4751 13.4625 11.4751C14.4 12.7501 15.525 13.1626 15.525 13.1626C17.25 13.6126 17.4375 12.1876 17.4375 12.1876C17.475 10.3126 13.9125 10.5001 13.9125 10.5001ZM7.49995 14.2126C7.46245 14.2126 7.46245 14.1751 7.46245 14.1751C7.23745 13.6501 8.96245 12.6376 8.96245 12.6376C8.96245 12.6376 8.02495 14.4376 7.49995 14.2126ZM11.4 5.13762C11.8875 5.58762 11.475 7.12512 11.475 7.12512C11.475 7.12512 10.9125 5.58762 11.4 5.13762ZM10.95 10.9501L11.625 9.30012L12.675 10.5751L10.95 10.9501ZM16.5 12.1501C16.2 12.6376 14.9625 11.5876 14.85 11.4751C15.0375 11.4751 16.65 11.5876 16.5 12.1501ZM21.825 18.3751V22.8001C21.825 23.4376 21.3 24.0001 20.625 24.0001H3.33745C2.69995 24.0001 2.13745 23.4751 2.13745 22.8001V18.3751H21.825Z"
                                    fill="#FD344C"
                                  />
                                  <path
                                    d="M10.4625 20.3249C10.4625 20.6249 10.35 20.8499 10.1625 21.0374C9.97495 21.1874 9.67495 21.2624 9.29995 21.2624H8.99995V22.3499H8.51245V19.4624H9.37495C9.74995 19.4624 10.0125 19.5374 10.2 19.6874C10.3875 19.8374 10.4625 20.0249 10.4625 20.3249ZM9.03745 20.8874H9.29995C9.52495 20.8874 9.71245 20.8499 9.82495 20.7749C9.93745 20.6999 10.0125 20.5499 10.0125 20.3624C10.0125 20.2124 9.97495 20.0624 9.86245 19.9874C9.74995 19.9124 9.59995 19.8749 9.37495 19.8749H9.03745V20.8874ZM13.425 20.8874C13.425 21.3749 13.275 21.7499 13.0125 21.9749C12.75 22.2374 12.375 22.3499 11.85 22.3499H11.025V19.4624H11.925C12.375 19.4624 12.75 19.5749 13.0125 19.8374C13.275 20.0624 13.425 20.4374 13.425 20.8874ZM12.9 20.8874C12.9 20.1749 12.5625 19.8374 11.925 19.8374H11.5125V21.9374H11.85C12.5625 21.9749 12.9 21.5999 12.9 20.8874ZM14.5125 22.3499H14.025V19.4624H15.675V19.8749H14.5125V20.7749H15.6V21.1874H14.5125V22.3499Z"
                                    fill="#EFF2F3"
                                  />
                                </svg>
                                Export PDF
                              </MenuItem>
                              <MenuItem
                                onClick={async () => {
                                  exportExcel && (await exportExcel());
                                  popupState.close();
                                }}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "6px",
                                }}
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_4814_6176)">
                                    <path
                                      d="M14.9999 1.5H6.99993C6.73479 1.5 6.48052 1.60532 6.29304 1.7928C6.10557 1.98028 6.00024 2.23455 6.00024 2.49968V6.74973L14.9999 11.9995L19.4998 13.8983L23.9996 11.9995V6.74973L14.9999 1.5Z"
                                      fill="#21A366"
                                    />
                                    <path
                                      d="M6.00024 6.75H14.9999V11.9997H6.00024V6.75Z"
                                      fill="#107C41"
                                    />
                                    <path
                                      d="M22.9998 1.5H14.9998V6.74973H23.9994V2.49968C23.9994 2.23455 23.8941 1.98028 23.7066 1.7928C23.5192 1.60532 23.2649 1.5 22.9998 1.5Z"
                                      fill="#33C481"
                                    />
                                    <path
                                      d="M14.9999 11.9995H6.00024V21.4998C6.00024 21.6311 6.0261 21.7611 6.07634 21.8824C6.12658 22.0036 6.20022 22.1138 6.29304 22.2067C6.38587 22.2995 6.49608 22.3731 6.61736 22.4234C6.73865 22.4736 6.86865 22.4995 6.99993 22.4995H23.0004C23.1317 22.4995 23.2617 22.4736 23.383 22.4234C23.5043 22.3731 23.6145 22.2995 23.7073 22.2067C23.8001 22.1138 23.8738 22.0036 23.924 21.8824C23.9743 21.7611 24.0001 21.6311 24.0001 21.4998V17.2492L14.9999 11.9995Z"
                                      fill="#185C37"
                                    />
                                    <path
                                      d="M14.9998 11.9995H23.9994V17.2492H14.9998V11.9995Z"
                                      fill="#107C41"
                                    />
                                    <path
                                      opacity="0.1"
                                      d="M12.4989 5.24951H6.00024V19.4994H12.4989C12.7639 19.499 13.018 19.3938 13.2056 19.2066C13.3932 19.0195 13.4991 18.7657 13.5001 18.5008V6.24919C13.4993 5.98405 13.3936 5.73001 13.2059 5.54266C13.0183 5.35532 12.7641 5.24991 12.4989 5.24951Z"
                                      fill="black"
                                    />
                                    <path
                                      opacity="0.2"
                                      d="M11.7506 6H6.00024V20.2499H11.7506C12.0153 20.2491 12.2689 20.1437 12.4562 19.9566C12.6435 19.7695 12.7492 19.516 12.7503 19.2513V6.99968C12.7495 6.7348 12.6439 6.48099 12.4566 6.29369C12.2693 6.10638 12.0155 6.0008 11.7506 6Z"
                                      fill="black"
                                    />
                                    <path
                                      opacity="0.2"
                                      d="M11.7506 6H6.00024V18.7496H11.7506C12.0155 18.7488 12.2693 18.6432 12.4566 18.4559C12.6439 18.2686 12.7495 18.0148 12.7503 17.75V6.99968C12.7495 6.7348 12.6439 6.48099 12.4566 6.29369C12.2693 6.10638 12.0155 6.0008 11.7506 6Z"
                                      fill="black"
                                    />
                                    <path
                                      opacity="0.2"
                                      d="M11.0007 6H6.00024V18.7496H11.0007C11.2656 18.7488 11.5194 18.6432 11.7067 18.4559C11.894 18.2686 11.9996 18.0148 12.0004 17.75V6.99968C11.9996 6.7348 11.894 6.48099 11.7067 6.29369C11.5194 6.10638 11.2656 6.0008 11.0007 6Z"
                                      fill="black"
                                    />
                                    <path
                                      d="M0.999684 6H11.0016C11.2667 6 11.521 6.10532 11.7085 6.2928C11.8959 6.48028 12.0013 6.73455 12.0013 6.99968V17.0016C12.0013 17.2667 11.8959 17.521 11.7085 17.7085C11.521 17.8959 11.2667 18.0013 11.0016 18.0013H0.999684C0.868275 18.0013 0.738156 17.9754 0.61677 17.925C0.495383 17.8747 0.385111 17.8009 0.292262 17.7079C0.199413 17.6149 0.125809 17.5046 0.0756599 17.3831C0.0255108 17.2616 -0.000199056 17.1315 1.16044e-06 17.0001V6.99968C1.16044e-06 6.73455 0.105325 6.48028 0.292801 6.2928C0.480278 6.10532 0.734552 6 0.999684 6Z"
                                      fill="#107C41"
                                    />
                                    <path
                                      d="M2.64966 15.7499L5.07652 11.9893L2.85376 8.25H4.64242L5.85585 10.6403C5.96721 10.8667 6.04404 11.036 6.08635 11.148H6.10209C6.18197 10.9669 6.26574 10.7909 6.35341 10.62L7.6501 8.25H9.29204L7.01191 11.9685L9.34738 15.7499H7.60187L6.20008 13.124C6.13412 13.0123 6.07822 12.8949 6.03304 12.7732H6.01223C5.97133 12.8922 5.91699 13.0062 5.85027 13.1129L4.40989 15.7499H2.64966Z"
                                      fill="white"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_4814_6176">
                                      <rect
                                        width="24"
                                        height="24"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                Export Excel
                              </MenuItem>
                            </Menu>
                          </React.Fragment>
                        )}
                      </PopupState>
                    );
                  }

                  default: {
                    return (
                      // @ts-ignore
                      <DynamicTag
                        href={href}
                        key={i}
                        onClick={onClick}
                        className={`flex gap-[6px] text-sm rounded-[10px] items-center h-10 justify-center ${className}`}
                        style={{
                          color: color == "light" ? "#1B84FF" : "white",
                          backgroundColor:
                            color == "light" ? "#E9F3FF" : "#1B84FF",
                          paddingInline: width ? 0 : 24,
                          width,
                          display: status ? " flex" : "none",
                        }}
                      >
                        {icon}
                        {text}
                      </DynamicTag>
                    );
                  }
                }
              }
            )
          )}
        </div>
          )}
      </div>
    </div>
  );
};

const iconsMapping: {
  [key: string]: (hovered: boolean, selected: boolean) => ReactNode;
} = {
  table: (hovered, selected) => <DataDisplay {...{ hovered, selected }} />,
  tree: (hovered, selected) => <Tree {...{ hovered, selected }} />,
  cards: (hovered, selected) => <Card {...{ hovered, selected }} />,
};

const ViewButton = ({
  view,
  current,
  setView,
}: {
  view: AvailableViews[0];
  current: AvailableViews[0];
  setView: (view: AvailableViews[0]) => void;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => setView(view)}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: current == view ? "#1B84FF" : "",
      }}
      className="size-[29px] rounded flex items-center justify-center transition duration-300"
    >
      {iconsMapping[view](hovered, current == view)}
    </button>
  );
};

export default ToolBar;
