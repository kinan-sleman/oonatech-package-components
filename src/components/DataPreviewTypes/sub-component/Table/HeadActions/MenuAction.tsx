// @ts-nocheck
import {
  FilterListOffRounded,
  SortRounded,
  ViewColumnRounded,
  VisibilityOffRounded,
} from "@mui/icons-material";
import { Menu } from "@mui/material";
import React, { ReactNode, useState } from "react";
import { ColumnsTypes, TableDataTypes } from "../../types/tableTypes";
import MenuDots from "../../../../icons/MenuDots";

const MenuAction = ({
  label,
  id,
  filter,
  setFilter,
  order,
  setOrder,
  data,
  setFilteredData,
  filteredData,
  hiddenColumns,
  setHiddenColumns,
  columns,
}: {
  columns: ColumnsTypes;
  hiddenColumns?: string[];
  setHiddenColumns?: (arr: string[] | ((prev: string[]) => string[])) => void;
  filter?: string;
  setFilter?: (val: string) => void;
  label?: string;
  id?: string;
  order?: {
    by: string | undefined;
    orintation: "DESC" | "ASC" | "";
  };
  setOrder?: any;
  data?: TableDataTypes | undefined;
  setFilteredData?: (
    data: TableDataTypes | ((prev: TableDataTypes) => TableDataTypes)
  ) => void;
  filteredData?: TableDataTypes;
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const open = Boolean(anchorEl);

  const actions: {
    disabled?: boolean;
    text: string;
    icon: (sx: any) => ReactNode;
    onClick: any;
  }[] = [
    {
      text: "Show all column",
      icon: (sx: any) => <ViewColumnRounded sx={sx} />,
      onClick: () => {
        setHiddenColumns && setHiddenColumns([]);
      },
      disabled: !hiddenColumns?.length,
    },
    {
      text: `Hide ${label} column`,
      icon: (sx: any) => <VisibilityOffRounded sx={sx} />,
      onClick: () => {
        setHiddenColumns && setHiddenColumns((prev) => [...prev, id]);
      },
      disabled: hiddenColumns?.length == columns.length - 1,
    },
    {
      text: "Clear filter",
      icon: (sx: any) => <FilterListOffRounded sx={sx} />,
      disabled: !filter,
      onClick: () => {
        setFilter && setFilter("");
        setFilteredData && setFilteredData(data);
      },
    },
    {
      text: "Clear sort",
      icon: (sx: any) => <SortRounded sx={sx} />,
      disabled: !order?.by,
      onClick: () => {
        setFilteredData && setFilteredData(data);
        setOrder({
          by: null,
          orintation: "",
        });
      },
    },
  ];

  return (
    <>
      <button
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
        className="bg-transparent hover:bg-[#1B84FF10] rounded-full size-[30px] flex items-center justify-center"
      >
        <MenuDots className=" [&_path]:fill-[#A4A4A4]" />
      </button>
      <Menu
        slotProps={{
          paper: {
            elevation: 1,
          },
        }}
        sx={{
          ul: {
            p: 0,
          },
        }}
        transformOrigin={{
          horizontal: 125,
          vertical: -10,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <div className="flex flex-col relative transition-[border-color]">
          {actions?.map(({ text, icon, disabled, onClick }, i: number) => (
            <button
              onClick={() => {
                setAnchorEl(null);
                onClick();
              }}
              key={i}
              className={`px-3 py-2 flex justify-start gap-2 text-[#333232] items-center hover:bg-[#1B84FF10] ${
                disabled && "pointer-events-none opacity-30"
              }`}
            >
              {icon({
                color: "#A4A4A4",
              })}
              {text}
            </button>
          ))}
        </div>
      </Menu>
    </>
  );
};

export default MenuAction;
