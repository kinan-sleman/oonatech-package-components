// @ts-nocheck
import React, { Dispatch, SetStateAction } from "react";
import { headActions, mainDataType } from "../../DataDisplay";
import {
  ActionTypes,
  ColumnsTypes,
  TableDataTypes,
  TableInfoTypes,
} from "../types/tableTypes";
import HeadActions from "./HeadActions";
import CheckBox from "../../../formElemnts/CheckBox";

const TableHead = ({
  columns,
  data,
  checkedIDs,
  setCheckedIDs,
  filteredData,
  setFilteredData,
  hiddenColumns,
  setHiddenColumns,
  actions,
  tableHeadActions,
  removeRowSelection,
}: {
  hiddenColumns?: string[];
  setHiddenColumns?: (arr: string[] | ((prev: string[]) => string[])) => void;
  setFilteredData?: Dispatch<SetStateAction<mainDataType>> | undefined;
  filteredData?: TableDataTypes;
  data: any;
  checkedIDs?: string[];
  setCheckedIDs?: any;
  columns: ColumnsTypes;
  actions?: ActionTypes;
  tableHeadActions?: headActions[];
  removeRowSelection?: boolean;
}) => {
  return (
    <thead className="sticky top-0 z-[11]">
      <tr>
        {!removeRowSelection ? (
          <th className="w-[36px] bg-[#FCFCFC] border-b border-dashed border-[#D8D8D8]">
            <div className="flex w-fit h-[56px] items-center pl-5">
              <CheckBox
                light
                checked={checkedIDs?.length == data?.length}
                onChange={(checked) => {
                  setCheckedIDs(
                    checked
                      ? data?.map(({ id }: { id: number | string }) => id)
                      : []
                  );
                }}
              />
            </div>
          </th>
        ) : (
          ""
        )}

        {columns?.map(
          (
            {
              label,
              align,
              id,
              type,
              minWidth,
              noFilter,
              noSort,
              filterOptions,
              width,
            },
            i: number
          ) =>
            !hiddenColumns?.includes(id) && (
              <th
                key={i}
                // style={{
                //   width,
                // }}
                className="bg-[#FCFCFC] border-b border-dashed border-[#D8D8D8]"
              >
                <div
                  className="flex [&_.box-check]:mr-5 w-full h-[56px] items-center px-5"
                  style={{
                    justifyContent: align || "flex-start",
                  }}
                >
                  <p className="text-sm font-normal leading-[23px] whitespace-nowrap text-[#333232]">
                    {label}
                  </p>
                  <HeadActions
                    columns={columns}
                    hiddenColumns={hiddenColumns}
                    setHiddenColumns={setHiddenColumns}
                    type={type}
                    setFilteredData={setFilteredData}
                    filteredData={filteredData}
                    data={data}
                    id={id}
                    label={label}
                    tableHeadActions={tableHeadActions}
                    noFilter={noFilter}
                    noSort={noSort}
                    filterOptions={filterOptions}
                  />
                </div>
              </th>
            )
        )}
        {actions?.length && actions?.length > 0 ? (
          <th className="bg-[#FCFCFC] border-b border-dashed border-[#D8D8D8]">
            <div className="justify-center flex [&_.box-check]:mr-5 w-full h-[56px] items-center px-5">
              <p className="text-sm font-normal leading-[23px] text-[#333232]">
                Action
              </p>
            </div>
          </th>
        ) : (
          ""
        )}
      </tr>
    </thead>
  );
};

export default TableHead;
