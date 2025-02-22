// @ts-ignore
import React, { ReactNode, useState } from "react";

import {
  ActionTypes,
  AvailableViews,
  ColumnsTypes,
  ToolBarBtnsTypes,
  TableInfoTypes,
} from "./sub-component/types/tableTypes";
import ToolBar from "./sub-component/ToolBar";
import Table from "./sub-component/Table";
import Cards from "./sub-component/Cards";
import ListCard from "./sub-component/Cards/ListCard";
import GroupCard from "./sub-component/Cards/GroupCard";
import EmployeesChart from "./sub-component/EmployeesChart";
import Export from "../icons/Export";
import { Add } from "@mui/icons-material";
import UserCard from "./sub-component/Cards/UserCard";

export interface headActions {
  type: "sort" | "filter";
  onClick: (...args: any[]) => void;
}
type dataRowsType = {
  [key: string]: any;
};
export interface mainDataType {
  next?: boolean;
  pageIndex?: number | string;
  pageSize?: number | string;
  totalItemsCount?: number | string;
  totalPagesCount?: number | string;
  previous?: boolean;
  items: dataRowsType[];
}
export type linkCardType = {
  link?: (row: any) => string | any;
  buttonContent?: string;
  handleEdit?: (row: any) => any;
  handleDelete?: (row: any) => any;
  cardContentText?: string;
  type?: "role" | "Permission";
  showMoreTitle?: string;
};
interface DataPreviewTypes {
  data: mainDataType | any;
  columns: ColumnsTypes;
  actions?: ActionTypes;
  views?: AvailableViews;
  toolBarBtns?: ToolBarBtnsTypes;
  expandContent?: (row: any) => ReactNode;
  mainView?: AvailableViews[0];
  handleNextPage?: (page?: number | undefined) => void | undefined;
  handlePrevPage?: (page?: number | undefined) => void | undefined;
  handleSearchPage?: ((page?: number) => void) | undefined;
  handleItemsNumber?: any;
  handleSearchInput?: (query?: string) => void | undefined;
  toolbarActions?: ("add" | "export")[];
  cardType?: "list" | "view" | "group" | "user";
  // cardListView?: boolean;
  titleCard?: string;
  linkCard?: linkCardType;
  page?: number;
  setPage?: () => void;
  tableHeadActions?: headActions[] | undefined;
  handleDeleteSelected?: (e: any) => any;
  pageSize?: string | number | undefined;
  checkedIDs: any;
  setCheckedIDs: any;
  removeRowSelection?: boolean;
  mainWidth?: string;
  loading?: boolean;
  disableShadow?: boolean;
  onClickRow?: (row: any) => void;
  mainTitle?: string;
  disableSearch?: boolean;
  tableHeight?: string;
  hideCheckedOptions?: boolean;
}

function DataPreviewTypes({
  data,
  columns,
  actions,
  expandContent,
  views,
  mainView,
  handleNextPage,
  handlePrevPage,
  handleSearchInput,
  toolbarActions,
  cardType,
  // cardListView,
  toolBarBtns,
  titleCard,
  linkCard,
  page,
  setPage,
  handleSearchPage,
  tableHeadActions,
  handleDeleteSelected,
  pageSize,
  handleItemsNumber,
  checkedIDs,
  setCheckedIDs,
  removeRowSelection,
  mainWidth,
  loading,
  disableShadow,
  onClickRow,
  mainTitle,
  disableSearch,
  tableHeight,
  hideCheckedOptions=false,
}: DataPreviewTypes) {
  const [filteredData, setFilteredData] = useState(data);
  const [view, setView] = useState<AvailableViews[0]>(mainView || "table");

  const viewsMapping: { [key: string]: ReactNode } = {
    table: (
      <Table
        actions={actions}
        checkedIDs={checkedIDs}
        columns={columns}
        data={data}
        tableHeadActions={tableHeadActions}
        filteredData={filteredData}
        setCheckedIDs={setCheckedIDs}
        setFilteredData={setFilteredData}
        expandContent={expandContent}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handleSearchPage={handleSearchPage}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        handleItemsNumber={handleItemsNumber}
        removeRowSelection={removeRowSelection}
        loading={loading}
        disableShadow={disableShadow}
        onClickRow={onClickRow}
        tableHeight={tableHeight}
      />
    ),
    cards:
      cardType == "view" ? (
        <Cards data={data} columns={columns} />
      ) : cardType == "list" ? (
        <ListCard
          data={data}
          titleCard={titleCard}
          linkCard={linkCard}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handleItemsNumber={handleItemsNumber}
          handleSearchPage={handleSearchPage}
        />
      ) : cardType == "user" ? (
        <UserCard
          data={data}
          columns={columns}
          // cardListView={cardListView}
          linkCard={linkCard}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handleItemsNumber={handleItemsNumber}
          handleSearchPage={handleSearchPage}
        />
      ) : (
        <GroupCard
          data={data}
          columns={columns}
          // cardListView={cardListView}
          linkCard={linkCard}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          handleItemsNumber={handleItemsNumber}
          handleSearchPage={handleSearchPage}
        />
      ),
    tree: <EmployeesChart />,
  };
  const toolBarBtnsStatic: ToolBarBtnsTypes = [
    {
      icon: <Export color="#1B84FF" />,
      text: "Export",
      color: "light",
      width: 108,
      status: toolbarActions?.some((action) => action === "export"),
    },
    {
      icon: <Add className="[&_path]:fill-white" />,
      text: "Add New",
      color: "dark",
      width: 127,
      href: "/organization/employees/add-new/login-details",
      status: toolbarActions?.some((action) => action === "add"),
    },
  ];
  return (
    <div
      className={` h-full overflow-y-hidden ${
        disableShadow ? "" : "shadow-[0_4px_41px_0_#0000000A]"
      } rounded-[10px] pb-[22px] ${mainWidth ? mainWidth : "w-full"} `}
    >
      <ToolBar
        view={view}
        setView={setView}
        views={views}
        checkedIDs={checkedIDs}
        setCheckedIDs={setCheckedIDs}
        btns={toolBarBtns ? toolBarBtns : toolBarBtnsStatic}
        setFilteredData={setFilteredData}
        handleSearchInput={handleSearchInput}
        filteredData={filteredData}
        searching={disableSearch}
        data={data}
        mainTitle={mainTitle}
        handleDeleteSelected={handleDeleteSelected}
        hideCheckedOptions={hideCheckedOptions}
      />
      {viewsMapping[view]}
    </div>
  );
}

export default DataPreviewTypes;
