// @ts-nocheck

import React, { useState } from "react";

import { Fade, Menu } from "@mui/material";
import MenuDots from "../../../icons/MenuDots";
import Trash from "../../../icons/Trash";
import Pen from "../../../icons/Pen";
import Pagination from "../Table/Pagination";
import { TableDataTypes } from "../types/tableTypes";
import { linkCardType } from "../../DataDisplay";
import { Link } from "react-router-dom";
import NewClose from "../../../icons/NewClose";

type cardTypes = {
  // cardListView: boolean | undefined;
  data?: any; // Array of Card objects
  titleCard?: string;
  linkCard?: linkCardType | undefined;
  handleNextPage?: (page?: number | undefined) => void | undefined;
  handlePrevPage?: (page?: number | undefined) => void | undefined;
  handleSearchPage?: ((page?: number) => void) | undefined;
  handleItemsNumber?: ((page?: number) => void) | undefined;
};

// const cardsListArr: Card[] = [];
function ListCard({
  data,
  titleCard,
  linkCard,
  handleNextPage,
  handlePrevPage,
  handleItemsNumber,
  handleSearchPage,
}: cardTypes) {
  return (
    <div>
      <div className="px-5 grid grid-cols-4 gap-x-[18px] gap-y-[23px]">
        {data?.items &&
          data?.items?.map((row: any, index: number) => (
            <Card key={index} item={row} linkCard={linkCard} />
          ))}
      </div>
      <Pagination
        total={data.totalPagesCount}
        page={data.pageIndex}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handleSearchPage={handleSearchPage}
        handleItemsNumber={handleItemsNumber}
        data={data}
      />
    </div>
  );
}
const TruncatedText = ({ text }) => {
  return (
    <div className="relative w-full">
      <span
        className="text-xs font-normal text-[#A4A4A4] mb-3 truncated-text whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer max-w-full w-full block"
        title={text}
      >
        {text}
      </span>
      {/* <span className="absolute w-[30%] right-0 bottom-0 transition-all bg-white px-3 py-2 rounded-[8px] box-shadow ">
          {text}
        </span> */}
    </div>
  );
};
const Card = ({
  item,
  linkCard,
  key,
}: {
  item: any;
  linkCard?: linkCardType;
  key?: any;
}) => {
  // console.log("linkCard", linkCard);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div key={key}>
      <div
        className={`border flex flex-col items-start justify-between gap-[14px] group_box  border-[#E9E9E9] py-5 bg-white px-6 rounded-[10px] relative ${
          linkCard?.type === "role" ? "max-h-[340px]" : "max-h-[274px]"
        } `}
      >
        <button
          onClick={handleClick}
          className="bg-transparent absolute top-[16px] right-[13px]"
        >
          <MenuDots />
        </button>
        <div className="w-full">
          <h3 className="text-[14px] font-bold text-primay text-textColor">
            {item?.name}
          </h3>

          <TruncatedText text={item?.description} />
          {linkCard?.cardContentText && linkCard?.type === "role" ? (
            <div className="text-[#595959] text-[13px] font-normal mt-3 mb-1">
              {linkCard?.cardContentText} :{" "}
              {/* {linkCard?.type === "role" ? item?.totalUsers : item?.totalRole} */}
              {item?.totalUsers}
            </div>
          ) : (
            ""
          )}
          {linkCard?.type === "role" && item?.applicationName ? (
            <div className="py-2 w-full border-dashed border-[#DEDEDE] border rounded-[10px] px-2 mb-2 mt-2">
              <p className="leading-[23px] text-[#A4A4A4] text-xs">
                Application
              </p>
              <div className="flex">
                <span className="text-[#333333] text-xs  font-normal	 mt-[2px]">
                  {item?.applicationName}
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
          <ul className={`mt-3  `}>
            <span className="text-[12px] mb-[6px]]">
              {linkCard?.type === "role" ? "Permissions" : "Roles"}
            </span>
            {(linkCard?.type === "role" ? item?.permissions : item?.roles)
              ?.length ? (
              (linkCard?.type === "role" ? item?.permissions : item?.roles)
                ?.slice(0, 4)
                ?.map((sub: any, i: any) => {
                  return (
                    <li
                      className="text-[#A4A4A4] text-[12px] mb-2 font-normal flex items-center gap-2"
                      key={i}
                    >
                      <span className="bg-[#700FD2] inline-block rounded-lg h-[2px] w-2"></span>
                      {sub?.name}
                    </li>
                  );
                })
            ) : (
              <span className="text-[#a0a0a0] font-normal mt-[5px] text-xs italic">
                No {linkCard?.type === "role" ? "permissions" : "roles"} added
              </span>
            )}
            {(linkCard?.type === "role" ? item?.permissions : item?.roles)
              ?.length -
              4 >
              0 && (
              <li className="text-[#A4A4A4] text-[12px] mb-2 font-normal flex items-center gap-2 relative">
                <span className="bg-[#700FD2] inline-block rounded-lg h-[2px] w-2"></span>
                <span onClick={() => setShow(!show)} className="cursor-pointer">
                  and{" "}
                  {(linkCard?.type === "role" ? item?.permissions : item?.roles)
                    ?.length - 4}{" "}
                  more
                </span>
                <div
                  className={`absolute  bottom-3 left-0 bg-white w-[200px] px-2 py-3 rounded-[5px] transition-all ${
                    show ? "opacity-1 z-10" : "opacity-0 -z-1"
                  }`}
                  style={{ boxShadow: " 3px 1px 41px 0px #00000014" }}
                >
                  <div className="w-full flex items-center justify-between mb-4">
                    <span className="text-[#333232] text-[11px] font-bold">
                      {linkCard?.showMoreTitle
                        ? linkCard?.showMoreTitle
                        : "Show more"}
                    </span>{" "}
                    <button className="iconCose" onClick={() => setShow(!show)}>
                      <NewClose width="12" height="12" />
                    </button>
                  </div>
                  <div className="bg-[#00A7E1] flex items-center text-white w-full h-[29px] px-2 rounded-[2px] text-[11px] font-normal mb-[3px] z-10">
                    {linkCard?.type === "role" ? "Permssions" : "Roles"}
                  </div>
                  <ul>
                    {(linkCard?.type === "role"
                      ? item?.permissions
                      : item?.roles
                    )
                      ?.slice(4)
                      ?.map((sub: any, i: any) => {
                        return (
                          <li
                            key={i}
                            className="text-[11px] text-[#333232] font-normal flex items-center gap-1 h-[29px] bg-[#F4F4F4] rounded-[2px] px-2 mb-[3px]"
                          >
                            <span className="text-[#00A7E1] text-[15px]">
                              &#9679;
                            </span>{" "}
                            {sub?.name}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </li>
            )}
          </ul>
        </div>
        {linkCard && linkCard?.buttonContent && linkCard?.link && (
          <>
            <Link
              to={linkCard?.link ? linkCard?.link(item) : ""}
              className="button-gray"
            >
              {linkCard?.buttonContent}
            </Link>
          </>
        )}
      </div>
      <Menu
        id="fade-menu workforce_menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        sx={{
          zIndex: "10",
          borderRadius: "8px",
          boxShadow: "-1px 3px 15px 0px rgba(0, 0, 0, 0.0588235294)",
          "& .MuiPaper-root": {
            borderRadius: "8px",
            boxShadow: "-1px 3px 15px 0px rgba(0, 0, 0, 0.0588235294)",
          },
          "& ul": {
            padding: "0px !important",
          },
        }}
        // classes={{
        //   paper: "rounded-[5px]",
        // }}
        slotProps={{
          paper: {
            elevation: 1,
          },
        }}
        anchorOrigin={{
          horizontal: -130,
          vertical: 20,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <div className="flex flex-col w-36">
          <button
            onClick={() =>
              linkCard && linkCard?.handleEdit(item)
                ? linkCard?.handleEdit(item)
                : console.log("edit")
            }
            className="flex transition-all hover:bg-[#f9f9f9] items-center border-b border-[#EDEDED] text-xs text-[#333232] gap-2"
            style={{
              padding: "10px 16px",
            }}
          >
            <Pen className="[&_path]:fill-[#4198FF]" />
            Edit
          </button>
          <button
            onClick={() =>
              linkCard && linkCard?.handleDelete(item)
                ? linkCard?.handleDelete(item)
                : console.log("delete")
            }
            className="flex transition-all hover:bg-[#f9f9f9] items-center text-xs text-[#333232]  gap-2"
            style={{
              padding: "10px 16px",
            }}
          >
            <Trash />
            Delete
          </button>
        </div>
      </Menu>
    </div>
  );
};
export default ListCard;
