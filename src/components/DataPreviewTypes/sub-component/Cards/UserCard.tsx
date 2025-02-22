// @ts-nocheck
import { Fade, Menu } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { ColumnsTypes, TableDataTypes } from "../types/tableTypes";
import Trash from "../../../icons/Trash";
import Pen from "../../../icons/Pen";
import MenuDots from "../../../icons/MenuDots";
import { linkCardType } from "../../DataDisplay";
import InitialsDiv from "./GenerateGroupImg";
import { Link } from "react-router-dom";
import Pagination from "../Table/Pagination";
import ImgHelper from "../../../elements/ImgHelper";
import AvatarGruop from "../../../elements/AvatarGruop";

function UserCard({
  data,
  columns,
  linkCard,
  handleNextPage,
  handlePrevPage,
  handleItemsNumber,
  handleSearchPage,
}: {
  linkCard?: linkCardType;
  data: TableDataTypes;
  columns: ColumnsTypes;
  handleNextPage?: (page?: number | undefined) => void | undefined;
  handlePrevPage?: (page?: number | undefined) => void | undefined;
  handleSearchPage?: ((page?: number) => void) | undefined;
  handleItemsNumber?: ((page?: number) => void) | undefined;
}) {
  // const imgRef = useRef
  return (
    <div className="">
      <div className="px-5 flex flex-wrap gap-x-[18px] gap-y-[23px]">
        {data?.items?.map((row, i) => {
          return (
            <Card key={i} columns={columns} row={row} linkCard={linkCard} />
          );
        })}
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

const Card = ({
  row,
  columns,
  setBreakImg,
  linkCard,
}: // cardListView,
  {
    linkCard?: linkCardType;
    // cardListView: boolean | undefined;
    row: TableDataTypes[0];
    columns: ColumnsTypes;
  }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const regex = /^(\d{4}-\d{2}-\d{2})/;
  console.log(row, 'row')
  return (
    <>
      <div className="border flex flex-col items-start justify-between group_box border-[#E9E9E9] p-[18px] rounded-[10px] overflow-y-auto relative max-h-[353px] lg:basis-[calc(100%/4-20px)] md:basis-[calc(100%/3-20px)]">
        <button
          onClick={handleClick}
          className="bg-transparent absolute top-[16px] right-[13px]"
        >
          <MenuDots />
        </button>
        <div className="w-full">
          <div className="mb-[23px]">
            {columns?.map(
              ({ id, isMainForCards, isDescription, isMainTitle }, i) => {
                return (
                  <div key={i} className="flex gap-2 items-center">
                    {isMainForCards && (
                      <div
                      >
                        {row[id]?.url && row[id]?.url.trim() !== "" ? (
                          <img
                            src={row.name.url}
                            alt={row.name.username}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        ) : (
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                            style={{ backgroundColor: row.name.backgroundColor || "#000" }}
                          >
                            {(() => {
                              const nameParts = row.name.username ? row[id]?.username.split(" ") : [];
                              if (nameParts.length >= 2) {
                                return (nameParts[0].charAt(0) + nameParts[1].charAt(0)).toUpperCase();
                              } else if (nameParts.length === 1) {
                                return nameParts[0].substring(0, 2).toUpperCase();
                              }
                              return "--";
                            })()}
                          </div>
                        )}
                      </div>
                    )}

                    {isMainTitle && (
                      <Link
                        to={linkCard?.link ? linkCard?.link(row) : ""}
                        className="font-bold text-sm -mb-1 text-[#333333] leading-[16.25px] cursor-pointer"
                      >
                        {/* @ts-ignore */}
                        {row?.name.username || row?.title}
                      </Link>
                    )}

                    {isDescription && (
                      <p className="text-[#a0a0a0] font-normal text-xs">
                        {row[id]}
                      </p>
                    )}
                  </div>
                );
              }
            )}
          </div>
          <div className="flex flex-col gap-[10px] w-full">
            {/* <div className="py-2 basis-[calc(100%/2-5px)] border-dashed border-[#DEDEDE] border rounded-[10px] px-2"> */}
            {/* <p className="leading-[23px] text-[#A4A4A4] text-xs">ID Number</p> */}
            {/* <div className="flex">
                <span className="text-[#333333] text-xs  font-normal	 mt-[2px]">
                 #{row?.id}
                </span>
              </div> */}
            {/* </div> */}

            {columns?.map(
              (
                { id, label, type, isMainForCards, isDescription, link, isMainTitle },
                i
              ) =>
                !isMainForCards &&
                !isDescription &&
                !isMainTitle && (
                  <div
                    key={i}
                    className="py-2 basis-[calc(100%/2-8px)] border-dashed border-[#DEDEDE] border rounded-[10px] px-2"
                  >
                    <p className="leading-[23px] text-[#A4A4A4] text-xs">{label}</p>
                    <div className="flex">
                      <span className="text-[#333333] text-xs font-normal mt-[2px]">
                        {/* إذا كان نوع العمود "user" */}
                        {type === "user" ? (
                          row[id] && typeof row[id] === "object" ? (
                            <div className="flex items-start space-x-3">
                              {row[id]?.url && row[id]?.url.trim() !== "" ? (
                                <img
                                  src={row[id]?.url}
                                  alt={row[id]?.username}
                                  className="w-10 h-10 rounded-full object-cover"
                                />
                              ) : (
                                <div
                                  className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                                  style={{
                                    backgroundColor: row[id]?.backgroundColor || "#000",
                                  }}
                                >
                                  {(() => {
                                    const nameParts = row[id]?.username
                                      ? row[id]?.username.split(" ")
                                      : [];
                                    if (nameParts.length >= 2) {
                                      return (
                                        nameParts[0].charAt(0) + nameParts[1].charAt(0)
                                      ).toUpperCase();
                                    } else if (nameParts.length === 1) {
                                      return nameParts[0].substring(0, 2).toUpperCase();
                                    }
                                    return "--";
                                  })()}
                                </div>
                              )}
                              {/* عرض معلومات المستخدم */}
                              <div className="flex flex-col">
                                <span className="font-medium text-[12px]">
                                  {row[id]?.username || "--"}
                                </span>
                                <span className="text-xs text-gray-500">
                                  {row[id]?.email}
                                </span>
                              </div>
                            </div>
                          ) : (
                            row[id]
                          )
                        ) : 
                          /* إذا كان الـ id يحتوي على كلمة "designations" */
                          id.toLowerCase().includes("designations") ? (
                            row?.designations &&
                              Array.isArray(row.designations) &&
                              row.designations.length ? (
                              <div className="grid grid-cols-2 gap-3">
                                {row.designations.map((designation) => (
                                  <p
                                    key={designation.id}
                                    className="px-[10px] py-[5px] flex gap-[3px] items-center rounded-[5px] text-xs text-white"
                                    style={{
                                      backgroundColor: designation.color || "#000",
                                    }}
                                  >
                                    {designation.name}
                                  </p>
                                ))}
                              </div>
                            ) : (
                              <>-</>
                            )
                          ) : 
                            /* إذا كان نوع العمود "date" */
                            type === "date" && row[id]?.length ? (
                              row[id]?.split("T")[0]
                            ) : 
                              /* إذا كان نوع العمود "avatar_group" */
                              type === "avatar_group" ? (
                                <>
                                  {link ? (
                                    <Link
                                      to={link(row)}
                                      className="!m-0 [&_.avatar-group]:justify-center"
                                    >
                                      <AvatarGruop data={row[id]} />
                                    </Link>
                                  ) : (
                                    <AvatarGruop data={row[id]} />
                                  )}
                                </>
                              ) : 
                                /* إذا كان القيمة موجودة كنص */
                                row[id]?.length ? (
                                  row[id]
                                ) : (
                                  "--"
                                )}
                      </span>
                    </div>
                  </div>
                )
            )}

          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-[10px] gap-y-3 mt-5">
          {/* @ts-ignore */}
          {linkCard && linkCard?.buttonContent && linkCard?.link(row) && (
            <>
              <Link
                to={linkCard?.link ? linkCard?.link(row) : ""}
                className="button-gray"
              >
                {linkCard?.buttonContent}
              </Link>
            </>
          )}
        </div>
      </div>
      <Menu
        id="fade-menu workforce_menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        sx={{
          borderRadius: "8px",
          zIndex: "10",

          boxShadow: "-1px 3px 15px 0px rgba(0, 0, 0, 0.0588235294)",
          "& .MuiPaper-root": {
            zIndex: "10",
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
              linkCard && linkCard?.handleEdit(row)
                ? linkCard?.handleEdit(row)
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
              linkCard && linkCard?.handleDelete(row)
                ? linkCard?.handleDelete(row)
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
    </>
  );
};

export default UserCard;
