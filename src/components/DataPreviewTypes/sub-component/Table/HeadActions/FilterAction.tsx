import { Menu, Tooltip } from "@mui/material";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { ColumnsTypes, TableDataTypes } from "../../types/tableTypes";
import Add from "../../../../icons/Add";
import Filter from "../../../../icons/Filter";
import CheckBox from "../../../../formElemnts/CheckBox";

const filterFunc = (val: string, filter: string) => {
  return val.toLowerCase()?.includes(filter.toLowerCase());
};

const FilterAction = ({
  label,
  // filteredData,
  // data,
  // setFilteredData,
  id,
  type,
  filter,
  setFilter,
  handleFilter,
  columns,
  filterOptions,
}: {
  filter?: string;
  setFilter: (val: string) => void;
  type?: ColumnsTypes[0]["type"];
  label?: string;
  setFilteredData?: (
    data: TableDataTypes | ((prev: TableDataTypes) => TableDataTypes)
  ) => void;
  filteredData?: TableDataTypes;
  data?: TableDataTypes;
  id?: string;
  handleFilter?: any;
  columns?: ColumnsTypes;
  filterOptions?: any;
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const open = Boolean(anchorEl);
  const inputRef = useRef();
  const [inputContent, setInputContent] = useState<string | boolean>("");
  // useEffect(() => {
  //   if (filter)
  //     setFilteredData(
  //       data.filter((row: any) =>
  //         type == "user"
  //           ? filterFunc(row[id].name, filter) ||
  //             filterFunc(row[id].email, filter)
  //           : filterFunc(row[id], filter)
  //       )
  //     );
  //   else setFilteredData(data);
  // }, [filter, setFilteredData, data, type, id]);

  return (
    <>
      <Tooltip title={`Filter by ${label}`} placement="top">
        <button
          onClick={(e) => {
            setAnchorEl(e.currentTarget);
            setTimeout(() => {
              if (inputRef.current)
                (inputRef.current as HTMLInputElement | undefined)?.focus();
            }, 1);
          }}
          className={`head-action ${
            inputContent
              ? "bg-[#eef3ff] py-[6px] px-[3px] flex items-center justify-center rounded-[2px]"
              : "bg-transparent"
          } `}
        >
          <Filter color={inputContent ? "#00a7e1" : "#A4A4A4"} />
        </button>
      </Tooltip>
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
          vertical: 70,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => {
          setAnchorEl(null);
          // setInputContent("");
          // if (inputContent) handleFilter(id, "");
        }}
      >
        <div className="flex w-[250px] items-center relative border-b hover:border-[#1B84FF] transition-[border-color]">
          {type == "date" ? (
            <input
              type="date"
              // @ts-ignore
              value={inputContent}
              // @ts-ignore
              ref={inputRef}
              onChange={(e) => {
                handleFilter(id, e.target.value);
                setInputContent(e.target.value);
              }}
              placeholder={`Filter by ${label}`}
              className={`w-full pl-2 py-2 pr-10`}
            />
          ) : type === "switch" || type === "checkbox" ? (
            <div className="p-[7px]">
              <CheckBox
                dark
                label="Filter by Status"
                onChange={(checked) => {
                  setInputContent(checked);
                  handleFilter(id, checked);
                }}
              />
            </div>
          ) : type === "number" ? (
            <div className="flex items-center gap-3">
              <input
                // @ts-ignore
                ref={inputRef}
                // @ts-ignore
                value={inputContent}
                onChange={(e) => {
                  setInputContent(e.target.value);
                  // setFilter((e.target as HTMLInputElement).value);
                  handleFilter(id, e.target.value);
                }}
                type="text"
                placeholder={`Filter by ${label}`}
                className={`w-full pl-2 py-2 pr-10`}
              />
              <input
                // @ts-ignore
                ref={inputRef}
                // @ts-ignore
                value={inputContent}
                onChange={(e) => {
                  setInputContent(e.target.value);
                  // setFilter((e.target as HTMLInputElement).value);
                  handleFilter(id, e.target.value);
                }}
                type="text"
                placeholder={`Filter by ${label}`}
                className={`w-full pl-2 py-2 pr-10`}
              />
            </div>
          ) : type === "progressbar" ? (
            <>
              {" "}
              <input
                type="range"
                // @ts-ignore
                ref={inputRef}
                // @ts-ignore
                value={inputContent}
                onChange={(e) => {
                  setInputContent(e.target.value);
                  handleFilter(id, e.target.value);
                }}
                className={`w-full h-[40px] my-1 mx-5`}
              />
            </>
          ) : type === "multisearch" ? (
            <>
              <select name="" id=""></select>
            </>
          ) : (
            <>
              {filterOptions?.length ? (
                <select
                  className="w-full h-[40px] px-5"
                  //@ts-ignore
                  value={inputContent}
                  onChange={(e) => {
                    setInputContent(e.target.value);
                    handleFilter(id, e.target.value);
                  }}
                >
                  {filterOptions?.map((item: any, i: number) => {
                    return (
                      <option value={item?.value} key={i}>
                        {item?.content}
                      </option>
                    );
                  })}
                </select>
              ) : (
                <input
                  // @ts-ignore
                  ref={inputRef}
                  // @ts-ignore
                  value={inputContent}
                  onChange={(e) => {
                    setInputContent(e.target.value);
                    // setFilter((e.target as HTMLInputElement).value);
                    handleFilter(id, e.target.value);
                  }}
                  type="text"
                  placeholder={`Filter by ${label}`}
                  className={`w-full pl-2 py-2 pr-10`}
                />
              )}
            </>
          )}
          {!filterOptions?.length || type !== "progressbar" ? (
            <button
              className={`transition absolute right-2 rounded-full size-[30px] shrink-0 flex items-center justify-center hover:bg-[#1B84FF10] ${
                inputContent || "pointer-events-none opacity-30"
              }`}
              onClick={() => {
                handleFilter(id, "");
                setInputContent("");
                if (inputRef.current) {
                  //@ts-ignore
                  inputRef.current.value = "";
                }
              }}
            >
              <Add className="rotate-45" color="gray" />
            </button>
          ) : (
            ""
          )}
        </div>
      </Menu>
    </>
  );
};

export default FilterAction;
