import React, { ReactNode } from "react";
import { To } from "react-router-dom";

export type TableDataTypes = {
  [key: string]:
    | any[]
    | string
    | number
    | boolean
    | {
        total: number;
        val: number;
      }
    | {
        name: string;
        img: string;
        email?: string;
      };
  id: string;
}[];
export type TableInfoTypes = {
  items: TableDataTypes;
  next: boolean;
  pageIndex: number;
  pageSize: number;
  previous: boolean;
  totalItemsCount: number;
  totalPagesCount: number;
};

export type ColumnsTypes = {
  label: string;
  id: string;
  align?: "flex-start" | "center" | "flex-end";
  cell?: (content: any, row: any, id: any) => ReactNode;
  type?:
    | "user"
    | "read_more"
    | "switch"
    | "checkbox"
    | "status_arr"
    | "avatar_group"
    | "progressbar"
    | "default"
    | "file"
    | "date"
    | "languageFlagClass"
    | "multisearch"
    | "number";
  minWidth?: number;
  img?: any;
  isMainForCards?: boolean;
  link?: (row: any) => string;
  onClick?: (row: any, checked: boolean) => void | any;
  isDescription?: boolean;
  isMainTitle?: boolean;
  color?: string;
  noFilter?: boolean;
  noSort?: boolean;
  noThreeDots?: boolean;
  filterOptions?: any;
  width?: string;
}[];
type optionType = {
  id: string | number;
  value: string | number;
  option: string;
};
export type ToolBarBtnsTypes = {
  icon: ReactNode;
  text: string;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  width?: number;
  color?: "light" | "dark";
  className?: string;
  status?: boolean;
  type?: string;
  options?: optionType[];
  exportPDF?: () => any;
  exportExcel?: () => any;
}[];

export type ActionTypes = {
  type:
    | "delete"
    | "edit"
    | "clone"
    | "expand"
    | "custom"
    | "editLangEnable"
    | "cancel"
    | "show";
  onClick: (row: any) => void;
  customIcon?: ReactNode;
  status?: boolean;
}[];

export type AvailableViews = ("table" | "tree" | "cards")[];
