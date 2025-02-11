import { Fade, Menu } from "@mui/material";
import React, { useState } from "react";
import { ColumnsTypes, TableDataTypes } from "../types/tableTypes";
import Pen from "../../../icons/Pen";
import Trash from "../../../icons/Trash";
import MenuDots from "../../../icons/MenuDots";

// const arr = [
//   {
//     title: "Department",
//     value: "IT",
//   },
//   {
//     title: "Position",
//     value: "Manager",
//   },
//   {
//     title: "ID Number",
//     value: "#25666",
//   },
//   {
//     title: "Employee Manager",
//     value: "Jenny Wilson",
//   },
// ];

const Cards = ({
  data,
  columns,
}: {
  data: TableDataTypes;
  columns: ColumnsTypes;
}) => {
  return (
    <div className="px-5 grid grid-cols-4 gap-x-[18px] gap-y-[23px]">
      {data?.map((row, i) => (
        <Card key={i} columns={columns} row={row} />
      ))}
    </div>
  );
};

const Card = ({
  row,
  columns,
  key,
}: {
  row: TableDataTypes[0];
  columns: ColumnsTypes;
  key?: any;
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

  return (
    <div key={key}>
      <div className="border group_box border-[#E9E9E9] pt-[28px] pb-[37px] pl-[32px] pr-[35px] rounded-[10px] relative h-fit">
        <button
          onClick={handleClick}
          className="bg-transparent absolute top-[16px] right-[13px]"
        >
          <MenuDots />
        </button>
        {columns?.map(({ id, isMainForCards }, i) =>
          isMainForCards && row[id] ? (
            <div className="mb-[23px]" key={i}>
              <img
                // @ts-ignore
                src={row[id]?.img}
                className="rounded w-[60px] h-[60px]"
                alt=""
              />
              <p className="mt-3 font-bold text-sm -mb-1 text-[#333333] leading-[16.25px]">
                {/* @ts-ignore */}
                {row[id].name}
              </p>
              {/* @ts-ignore */}
              {row[id].email && (
                <span className="text-[#A4A4A4] text-xs leading-[13.98px]">
                  {/* @ts-ignore */}
                  {row[id].email}
                </span>
              )}
            </div>
          ) : (
            ""
          )
        )}
        <div className="grid grid-cols-2 gap-x-[10px] gap-y-3">
          {columns?.map(
            ({ id, label, type, isMainForCards }, i) =>
              !isMainForCards && (
                <div
                  key={i}
                  className="py-2 border-dashed border-[#DEDEDE] border rounded-[10px] px-2"
                >
                  <p className="leading-[23px] text-[#A4A4A4] text-xs">
                    {label}
                  </p>
                  <div className="flex">
                    {type == "user" && (
                      <img
                        src="/assets/newTestImg1.png"
                        className="rounded mr-[6px] w-[15px] h-[15px]"
                        alt=""
                      />
                    )}
                    <span className="text-[#333333] text-xs leading-[13.98px]">
                      {/* @ts-ignore */}
                      {type == "user" ? row[id].name : row[id]}
                    </span>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <Menu
        id="fade-menu workforce_menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        classes={{
          paper: "rounded-[5px]",
        }}
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
          <button className="flex items-center border-b border-[#EDEDED] text-xs text-[#333232] pb-[9px] pt-[1px] px-[15px] gap-2">
            <Pen className="[&_path]:fill-[#4198FF]" />
            Edit
          </button>
          <button className="flex items-center text-xs text-[#333232] pt-[9px] pb-[1px] px-[15px] gap-2">
            <Trash />
            Delete
          </button>
        </div>
      </Menu>
    </div>
  );
};

export default Cards;
