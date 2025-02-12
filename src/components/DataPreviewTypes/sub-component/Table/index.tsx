// @ts-nocheck
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import Pagination from "./Pagination";

import { headActions, mainDataType } from "../../DataDisplay";
import {
  TableInfoTypes,
  ActionTypes,
  ColumnsTypes,
  TableDataTypes,
} from "../types/tableTypes";

const Table = ({
  columns,
  data,
  checkedIDs,
  setCheckedIDs,
  filteredData,
  setFilteredData,
  expandContent,
  actions,
  handleNextPage,
  handlePrevPage,
  handleItemsNumber,
  handleSearchPage,
  page,
  setPage,
  tableHeadActions,
  pageSize,
  removeRowSelection,
  loading,
  disableShadow,
  onClickRow,
  tableHeight,
}: {
  setFilteredData?: Dispatch<SetStateAction<mainDataType>> | undefined;
  filteredData?: any;
  data: mainDataType;
  checkedIDs?: string[];
  setCheckedIDs?: Dispatch<SetStateAction<never[]>>;
  columns: ColumnsTypes;
  expandContent?: (row: any) => ReactNode;
  actions?: ActionTypes;
  handleNextPage?: (page?: number | undefined) => void | undefined;
  handlePrevPage?: (page?: number | undefined) => void | undefined;
  handleSearchPage?: ((page?: number) => void) | undefined;
  page?: number;
  setPage?: () => void;
  tableHeadActions?: headActions[];
  pageSize?: any;
  handleItemsNumber?: any;
  removeRowSelection?: boolean;
  loading?: boolean;
  disableShadow?: boolean;
  onClickRow?: (row: any) => void;
  tableHeight?: string;
}) => {
  const [hiddenColumns, setHiddenColumns] = useState<string[]>([]);
  return (
    <>
      <div
        className="w-full overflow-x-auto overflow-y-auto"
        style={{ height: tableHeight }}
      >
        <table className="w-full relative z-[0]">
          <TableHead
            hiddenColumns={hiddenColumns}
            setHiddenColumns={setHiddenColumns}
            data={data?.items?.length ? data?.items : data}
            setFilteredData={setFilteredData}
            filteredData={filteredData}
            checkedIDs={checkedIDs}
            setCheckedIDs={setCheckedIDs}
            columns={columns}
            actions={actions}
            tableHeadActions={tableHeadActions}
            removeRowSelection={removeRowSelection}
          />
          <TableBody
            expandContent={expandContent}
            hiddenColumns={hiddenColumns}
            setHiddenColumns={setHiddenColumns}
            Page={page}
            checkedIDs={checkedIDs}
            setCheckedIDs={setCheckedIDs}
            data={data?.items?.length ? data?.items : data}
            columns={columns}
            itemsPerPage={data?.pageSize}
            actions={actions}
            removeRowSelection={removeRowSelection}
            loading={loading}
            onClickRow={onClickRow}
          />
        </table>
        <Pagination
          data={data}
          total={data?.totalPagesCount}
          page={data?.pageIndex}
          setPage={setPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handleSearchPage={handleSearchPage}
          // pageSize={pageSize}
          handleItemsNumber={handleItemsNumber}
        />
      </div>
    </>
  );
};

export default Table;
