// @ts-nocheck
import { CircularProgress, Collapse, styled, Switch } from "@mui/material";
import React, { ReactNode, useState } from "react";

import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom"; // Use react-router-dom for routing
import { ActionTypes, ColumnsTypes, TableDataTypes } from "../types/tableTypes";
import Delete from "../../../icons/Delete";
import Edit from "../../../icons/Edit";
import ArrowLeft from "../../../icons/ArrowLeft";
import AvatarGruop from "../../../elements/AvatarGruop";
import CoverColor from "../../../elements/CoverColor";
import ProgressBar from "../../../elements/ProgressBar";
import CheckBox from "../../../formElemnts/CheckBox";
import ImgHelper from "../../../elements/ImgHelper";
import Cancel from "../../../icons/Cancel";
import Show from "../../../icons/Show";
import Clone from "../../../icons/Clone";

const AntSwitch = styled(Switch)(() => ({
  width: 38,
  height: 21,
  padding: 0,
  borderRadius: "12px",
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 20,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(12px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2.5,
    "&.Mui-checked": {
      transform: "translateX(17px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#1FCB73",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 15,
    height: 15,
    borderRadius: 15,
    transition: "0.3s",
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const TableBody = ({
  data,
  columns,
  actions,
  checkedIDs,
  setCheckedIDs,
  Page,
  hiddenColumns,
  setHiddenColumns,
  expandContent,
  removeRowSelection,
  loading,
  itemsPerPage = 5,
  onClickRow,
}: {
  expandContent?: (row: any) => ReactNode;
  hiddenColumns?: string[] | undefined;
  setHiddenColumns?: (arr: string[] | ((prev: string[]) => string[])) => void;
  Page?: number;
  data: any;
  checkedIDs?: string[] | undefined;
  setCheckedIDs?: any;
  columns: ColumnsTypes;
  actions?: ActionTypes | undefined;
  removeRowSelection?: boolean;
  loading?: boolean;
  itemsPerPage?: string;
  onClickRow?: (row: any) => void;
}) => {
  return (
    <tbody className="relative">
      {loading && (
        <div
          style={{
            width: " 100%",
            height: "100%",
            backgroundColor: "#ebebeb0d",
            position: "absolute",
            backdropFilter: "blur(1px)",
            zindex: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress
            color="inherit"
            size={30}
            style={{
              color: "#1b84ff",
            }}
          />
        </div>
      )}
      {data?.length ? (
        data.map((row: any, i: number) => (
          <Row
            key={i}
            expandContent={expandContent}
            row={row}
            checkedIDs={checkedIDs}
            setCheckedIDs={setCheckedIDs}
            columns={columns}
            actions={actions}
            hiddenColumns={hiddenColumns}
            removeRowSelection={removeRowSelection}
            onClick={onClickRow}
          />
        ))
      ) : (
        <tr className="relative">
          <td
            colSpan={columns.length}
            className="text-center text-gray-500 text-sm py-5 h-[6rem] flex items-center justify-center "
          >
            <p
              className="absolute left-[50%] top-[55%] italic"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              No results found
            </p>
          </td>
        </tr>
      )}
    </tbody>
  );
};

const Row = ({
  checkedIDs,
  setCheckedIDs,
  columns,
  actions,
  row,
  hiddenColumns,
  expandContent,
  removeRowSelection,
  onClick,
}: {
  checkedIDs: string[];
  setCheckedIDs: any;
  columns: ColumnsTypes;
  actions?: ActionTypes;
  row: any;
  expandContent?: (row: any) => ReactNode;
  hiddenColumns: string[];
  removeRowSelection?: boolean;
  onClick?: any;
}) => {
  const [expanded, setExpanded] = useState(false);
  const expandable = Boolean(expandContent);
  const [readMore, setReadMore] = useState(false);
  // const [checkedIDs, setcheckedIDs] = useState();
  // const router = useRouter();
  return (
    <>
      <tr
        className={`${onClick ? "cursor-pointer" : "cursor-auto"}`}
        onClick={onClick ? () => onClick(row) : ""}
      >
        {!removeRowSelection ? (
          <td className="w-[36px] border-b border-dashed border-[#D8D8D8]">
            <div className="justify-center flex w-fit min-h-[78px] items-center pl-5">
              <CheckBox
                light
                checked={checkedIDs?.includes(row?.id)}
                onChange={() => {
                  const tmp = [...checkedIDs];
                  if (!tmp?.includes(row?.id)) {
                    tmp.push(row?.id);
                  } else {
                    tmp?.splice(tmp.indexOf(row?.id), 1);
                  }

                  setCheckedIDs(tmp);
                }}
              />
            </div>
          </td>
        ) : (
          ""
        )}

        {columns?.map(
          ({ id, align, cell, type, link, onClick, color, width }, j: number) =>
            !hiddenColumns?.includes(id) && (
              <td
                key={j}
                className="border-b border-dashed border-[#D8D8D8]"
                style={{ width }}
              >
                <div
                  className="flex w-full min-h-[70px] py-2 justify-center items-center px-5"
                  style={{
                    justifyContent: align || "flex-start",
                  }}
                >
                  {cell ? (
                    cell(row[id], row, id)
                  ) : type == "progressbar" ? (
                    <div className="w-full gap-[10px] !m-0 flex flex-col items-start [&_div]:!w-full [&_progress]:!w-full">
                      <p className="text-[#333232] text-[10px] -mb-2">
                        {row[id].val}/{row[id].total} Users
                      </p>
                      <div className="flex items-center">
                        <ProgressBar
                          max={row[id].total}
                          value={row[id].val}
                          color={
                            row[id].total / 2 > row[id].val
                              ? "red"
                              : row[id].total == row[id].val
                              ? "green"
                              : "yellow"
                          }
                        />
                        <p className="text-[#333232] text-[10px] ml-1 -mb-1.5 leading-[0]">
                          {row[id].val === 0 && row[id].total === 0
                            ? "100%"
                            : `${Math.floor(
                                (row[id].val / row[id].total) * 100
                              )}%`}
                        </p>
                      </div>
                    </div>
                  ) : type == "avatar_group" ? (
                    <>
                      {link ? (
                        <Link
                          to={link(row)}
                          className="!m-0 [&_.avatar-group]:justify-center"
                        >
                          <AvatarGruop
                            data={row[id]}
                            // handleAvatarGroupClick={() => {
                            //   navigation(
                            //     link ? link : "/configuration/application/users"
                            //   );
                            // router.push("/configuration/application/users")
                          />
                        </Link>
                      ) : (
                        <AvatarGruop data={row[id]} />
                      )}
                    </>
                  ) : type === "date" && row[id]?.length ? (
                    <p className="text-sm font-normal leading-[23px]">
                      {row[id]?.split("T")[0]}
                    </p>
                  ) : type == "status_arr" ? (
                    row[id].length > 0 ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: "5px",
                          flexDirection: "row",
                          width: "100%",
                        }}
                      >
                        {row[id]?.map((status: string, index: number) => (
                          <CoverColor
                            key={index}
                            theme={
                              status === "Hidden"
                                ? "Hidden"
                                : status === "Mandatory"
                                ? "Mandatory"
                                : "Unique"
                            }
                          >
                            {status}
                          </CoverColor>
                        ))}{" "}
                      </div>
                    ) : (
                      "-"
                    )
                  ) : type == "checkbox" ? (
                    <>
                      <input
                        type="radio"
                        name="default"
                        className=" w-[22px] h-[22px] cursor-pointer"
                        // checked={row[id] == true}
                        checked={row[id]}
                        onClick={() => onClick && onClick(row, row[id])}
                      />
                    </>
                  ) : type == "switch" ? (
                    <>
                      <div
                        className={`${
                          row[id] == true ? "checked" : "notChecked"
                        }`}
                        id={`EnabledSwitch${row[id]}`}
                      >
                        <AntSwitch
                          checked={row[id] == true}
                          onChange={() => onClick && onClick(row, row[id])}
                        />
                      </div>
                    </>
                  ) : type == "user" ? (
                    <>
                      {link ? (
                        <Link to={link(row)} className="flex items-center">
                          {row[id] ? (
                            <>
                              <ImgHelper
                                img={row[id]?.url}
                                title={row[id]?.username}
                                color={row[id]?.color}
                                backgroundColor={row[id]?.backgroundColor}
                              />
                              <div className="flex flex-col ml-[6px]">
                                <p className="text-sm text-[#333333] leading-[16.31px]">
                                  {row[id]?.username}
                                </p>
                                {row[id]?.email && (
                                  <span className="text-xs text-[#A4A4A4] leading-[13.98px]">
                                    {row[id]?.email}
                                  </span>
                                )}
                              </div>
                            </>
                          ) : (
                            "---"
                          )}
                        </Link>
                      ) : (
                        <>
                          {row[id] ? (
                            <>
                              <ImgHelper
                                img={row[id]?.url}
                                title={row[id]?.username}
                                color={row[id].color}
                                backgroundColor={row[id].backgroundColor}
                              />
                              <div className="flex flex-col  ml-[6px]">
                                <p className="text-sm text-[#333333] leading-[16.31px]">
                                  {row[id]?.username}
                                </p>
                                {row[id]?.email && (
                                  <span className="text-xs text-[#A4A4A4] leading-[13.98px]">
                                    {row[id]?.email}
                                  </span>
                                )}
                              </div>
                            </>
                          ) : (
                            "---"
                          )}
                        </>
                      )}
                    </>
                  ) : type == "languageFlagClass" ? (
                    <>
                      {
                        <>
                          <ReactCountryFlag
                            countryCode={row[id]}
                            svg
                            style={{ fontSize: "2em" }}
                          />
                        </>
                      }
                    </>
                  ) : type == "file" ? (
                    <>
                      <a
                        target="_blank"
                        href={row[id]?.link}
                        className="text-sm cursor-pointer hover:underline transition-all"
                      >
                        {row[id]?.title}
                      </a>
                    </>
                  ) : (
                    <>
                      {link ? (
                        <Link to={link}>
                          <p
                            className="text-sm font-normal leading-[23px] max-h-[250px] overflow-y-auto"
                            style={{ wordBreak: "break-all" }}
                          >
                            {type == "read_more" && row[id].length > 30 ? (
                              readMore ? (
                                <>
                                  {row[id]}{" "}
                                  <button
                                    className="text-[#37B0B8]"
                                    onClick={() => setReadMore(false)}
                                  >
                                    See less
                                  </button>
                                </>
                              ) : (
                                <>
                                  {row[id]?.slice(0, 30)}...{" "}
                                  <button
                                    className="text-[#37B0B8]"
                                    onClick={() => setReadMore(true)}
                                  >
                                    See more
                                  </button>
                                </>
                              )
                            ) : (
                              row[id] || "-"
                            )}
                          </p>
                        </Link>
                      ) : (
                        <p
                          className="text-sm font-normal leading-[23px] max-h-[250px] overflow-y-auto"
                          style={{ wordBreak: "break-all" }}
                        >
                          {type == "read_more" && row[id].length > 30 ? (
                            readMore ? (
                              <>
                                {row[id]}{" "}
                                <button
                                  className="text-[#37B0B8]"
                                  onClick={() => setReadMore(false)}
                                >
                                  See less
                                </button>
                              </>
                            ) : (
                              <>
                                {row[id]?.slice(0, 30)}...{" "}
                                <button
                                  className="text-[#37B0B8]"
                                  onClick={() => setReadMore(true)}
                                >
                                  See more
                                </button>
                              </>
                            )
                          ) : (
                            row[id] || "-"
                          )}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </td>
            )
        )}

        {actions?.length ? (
          <td className="border-b border-dashed border-[#D8D8D8]">
            <div className="gap-2 flex [&_.box-check]:mr-5 w-full min-h-[78px] items-center px-5 justify-center">
              {(expandable
                ? [
                    ...actions,
                    { type: "expand" as "expand", onClick: () => {} },
                  ]
                : actions
              )?.length > 0 &&
                (expandable
                  ? [
                      ...actions,
                      { type: "expand" as "expand", onClick: () => {} },
                    ]
                  : actions
                )?.map(({ type, onClick, customIcon, status = true }, i: number) => (
                  <Action
                    status={status}
                    type={type}
                    customIcon={customIcon}
                    className={`${
                      type == "expand" && expanded ? "rotate-180" : ""
                    } ${type == "editLangEnable" ? " hidden" : ""}`}
                    onClick={(e) => {
                      onClick(row);
                      if (type == "expand") setExpanded((prev) => !prev);
                    }}
                    key={i}
                    id={`ActionRow${i}`}
                  />
                ))}
            </div>
          </td>
        ) : (
          ""
        )}
      </tr>
      {expandable && (
        <tr className="cursor-auto">
          <td colSpan={columns.length + 2 - hiddenColumns.length}>
            <Collapse in={expanded}>
              <div className="border-b border-dashed border-[#D8D8D8]">
                {expandContent && expandContent(row)}
              </div>
            </Collapse>
          </td>
        </tr>
      )}
    </>
  );
};

const Action = ({
  onClick,
  type,
  className,
  customIcon,
  id,
  status,
}: {
  customIcon?: ReactNode;
  type: ActionTypes[0]["type"];
  onClick: (e: React.MouseEvent) => void;
  className: string;
  id: string;
  status?: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        status && onClick();
      }}
      onMouseOver={() => status && setHovered(true)}
      onMouseLeave={() => status && setHovered(false)}
      className={`size-[28px] rounded transition-all bg-[#F4F4F4] ${
        status
          ? type === "delete" || type === "cancel"
            ? "hover:bg-[#FFD5CF]"
            : type === "edit"
            ? "hover:bg-[#E9F3FF]"
            : type === "show"
            ? "hover:bg-[#6675FF]"
            : type === "clone"
            ? "hover:bg-[#bcffc2]"
            : ""
          : "cursor-not-allowed opacity-75"
      } flex items-center justify-center ${className}`}
      id={id}
    >
      {customIcon || actionsMapping(type, hovered)}
    </button>
  );
};

const actionsMapping = (type: string, hovered: boolean) => {
  const actionsMapping: { [key: string]: ReactNode } = {
    clone: <Clone hovered={hovered} />,
    delete: <Delete hovered={hovered} />,
    edit: <Edit hovered={hovered} />,
    cancel: <Cancel hovered={hovered} />,
    show: <Show hovered={hovered} />,
    expand: <ArrowLeft className="-rotate-90" hovering hovered={hovered} />,
  };

  return actionsMapping[type];
};

export default TableBody;
