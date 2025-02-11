// import { ColumnsTypes, TableDataTypes } from "../../../types/tableTypes";
import React, { useState } from "react";
import { headActions } from "../../../DataDisplay";
import { ColumnsTypes, TableDataTypes } from "../../types/tableTypes";
import FilterAction from "./FilterAction";
import MenuAction from "./MenuAction";
import SortAction from "./SortAction";
// import { headActions } from "../../../elements/DataDisplay";

const HeadActions = ({
  label,
  filteredData,
  data,
  setFilteredData,
  id,
  type,
  hiddenColumns,
  setHiddenColumns,
  columns,
  tableHeadActions,
  noFilter,
  noSort,
  filterOptions,
}: {
  columns: ColumnsTypes;
  hiddenColumns?: string[];
  setHiddenColumns?: (arr: string[] | ((prev: string[]) => string[])) => void;
  type?: ColumnsTypes[0]["type"];
  label?: string;
  setFilteredData?: (
    data: TableDataTypes | ((prev: TableDataTypes) => TableDataTypes)
  ) => void;
  filteredData?: TableDataTypes;
  data?: any;
  id?: string;
  tableHeadActions?: headActions[];

  noFilter: Boolean;
  noSort: boolean;
  filterOptions?: any;
}) => {
  const [filter, setFilter] = useState<string>("");
  const [order, setOrder] = useState<{
    by: string | undefined;
    orintation: "DESC" | "ASC" | "";
  }>({
    by: "",
    orintation: "",
  });

  return (
    <div className="flex items-center ml-2">
      {!noFilter && (
        <FilterAction
          filter={filter}
          setFilter={setFilter}
          data={data}
          filteredData={filteredData}
          id={id}
          label={label}
          setFilteredData={setFilteredData}
          type={type}
          handleFilter={
            tableHeadActions &&
            (tableHeadActions[1]?.type === "filter"
              ? tableHeadActions[1]?.onClick
              : tableHeadActions[0]?.onClick)
          }
          columns={columns}
          filterOptions={filterOptions}
        />
      )}
      {!noSort && (
        <SortAction
          data={data}
          filteredData={filteredData}
          id={id}
          label={label}
          order={order}
          setFilteredData={setFilteredData}
          setOrder={setOrder}
          type={type}
          handleSort={
            tableHeadActions &&
            (tableHeadActions[0]?.type === "sort"
              ? tableHeadActions[0]?.onClick
              : tableHeadActions[1]?.onClick)
          }
        />
      )}

      <MenuAction
        columns={columns}
        hiddenColumns={hiddenColumns}
        setHiddenColumns={setHiddenColumns}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        data={data}
        id={id}
        label={label}
        filter={filter}
        setFilter={setFilter}
        order={order}
        setOrder={setOrder}
      />
    </div>
  );
};

export default HeadActions;
