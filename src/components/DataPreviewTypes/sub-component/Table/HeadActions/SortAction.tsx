import { Tooltip } from "@mui/material";
import React from "react";
import { ColumnsTypes, TableDataTypes } from "../../types/tableTypes";
import Sort from "../../../../icons/Sort";
import TailedArrowLeft from "../../../../icons/TailedArrowLeft";

const orderingMapping: { [key: string]: number } = {
  ASC: -1,
  DESC: 1,
};

const flipOrintation = (old: string) => {
  let toReturn: string = "DESC";
  switch (old) {
    case "ASC":
      toReturn = "DESC";
      break;
    case "":
      toReturn = "DESC";
      break;
    case "DESC":
      toReturn = "ASC";
      break;
  }
  return toReturn;
};

const SortAction = ({
  label,
  order,
  setOrder,
  id,
  data,
  type,
  setFilteredData,
  filteredData,
  handleSort,
}: {
  label?: string;
  order: {
    by: string | undefined;
    orintation: "DESC" | "ASC" | "";
  };
  setOrder: (val: {
    by: string | undefined;
    orintation: "DESC" | "ASC" | "";
  }) => void;
  id?: string;
  type?: ColumnsTypes[0]["type"];
  data?: TableDataTypes;
  setFilteredData?: (
    data: TableDataTypes | ((prev: TableDataTypes) => TableDataTypes)
  ) => void;
  filteredData?: TableDataTypes;
  handleSort?: any;
}) => {
  return (
    <Tooltip title={`Sort by ${label}`} placement="top">
      <button
        className={` head-action ml-2 ${
          order?.orintation === "ASC" || order?.orintation === "DESC"
            ? "bg-[#eef3ff] py-[9px] px-[2px] flex items-center justify-center rounded-[2px]"
            : "bg-transparent"
        }`}
        onClick={() => {
          setOrder({
            by: id,
            orintation: flipOrintation(order?.orintation) as "DESC" | "ASC",
          });
          handleSort(id, order);
          // setOrder({
          //   by: id,
          //   orintation: flipOrintation(order.orintation) as "DESC" | "ASC",
          // });
          // const tmp = [...data];
          // // console.log(id);

          // tmp.sort((a, b) => {
          //   if (type == "user") {
          //     // @ts-ignore
          //     if (a[id].name < b[id].name)
          //       return -1 * orderingMapping[flipOrintation(order.orintation)];
          //     // @ts-ignore
          //     if (a[id].name > b[id].name)
          //       return 1 * orderingMapping[flipOrintation(order.orintation)];
          //     return 0;
          //   }
          //   if (a[id] < b[id])
          //     return -1 * orderingMapping[flipOrintation(order.orintation)];
          //   if (a[id] > b[id])
          //     return 1 * orderingMapping[flipOrintation(order.orintation)];
          //   return 0;
          // });
          // // console.log(tmp);

          // setFilteredData(tmp);
        }}
      >
        {order?.by == id ? (
          <TailedArrowLeft
            className={`${
              order?.orintation == "ASC" ? "-rotate-90" : "rotate-90"
            } `}
            color={
              order?.orintation === "ASC" || order?.orintation === "DESC"
                ? "#00a7e1"
                : " #A4A4A4"
            }
          />
        ) : (
          <Sort className="[&_path]:fill-[#A4A4A4] [&_path]:stroke-[#A4A4A4]" />
        )}
      </button>
    </Tooltip>
  );
};

export default SortAction;
