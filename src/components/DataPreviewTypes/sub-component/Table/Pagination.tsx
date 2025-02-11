// @ts-nocheck
import React, { useEffect, useState } from "react";
import ArrowLeft from "../../../icons/ArrowLeft";

const Pagination = ({
  total,
  page,
  // setPage,
  handleNextPage,
  handlePrevPage,
  // pageSize,
  handleSearchPage,
  handleItemsNumber,
  data,
}: {
  handleNextPage?: (page?: number | undefined) => void | undefined;
  handlePrevPage?: (page?: number | undefined) => void | undefined;
  handleSearchPage?: ((page?: number) => void) | undefined;
  total?: string | number | undefined;
  page?: string | number | undefined;
  // setPage?: (page: number | ((prev: number) => number)) => void;
  // pageSize?: string | number;
  handleItemsNumber?: any;
  data: any;
}) => {
  const [pageSearch, setpageSearch] = useState(data?.pageIndex || page || 1);
  const [pageSizeNum, setPageSize] = useState(data?.pageSize);

  // useEffect(() => {
  //   if (handleSearchPage) handleSearchPage(pageSearch);
  // }, [pageSearch]);
  // useEffect(() => {
  //   if (handleItemsNumber) handleItemsNumber(pageSizeNum);
  // }, [pageSizeNum]);
  return (
    <div className="flex items-center gap-[6px] justify-center pt-[22px]">
      <button
        className="flex items-center justify-center mr-[6px] cursor-pointer"
        disabled={!data?.previous}
        // onClick={handlePrevPage}
        onClick={() => {
          setpageSearch(pageSearch - 1);
          handlePrevPage(pageSearch - 1);
        }}
      >
        <ArrowLeft />
      </button>
      <p className="text-sm text-[#A4A4A4]">Page</p>
      <input
        // type="number"
        className="size-6 bg-[#fff] rounded border border-[#D6D6D6] text-center text-[#A4A4A4]"
        onKeyDown={(e) => {
          if (
            (e.key === "0" && e.target.value === "") || 
            (!/^[1-9]$/.test(e.key) &&                 
              !["Backspace", "ArrowLeft", "ArrowRight", "Tab", "Delete"].includes(e.key)) 
          ) {
            e.preventDefault();
          }
        }}
        value={pageSearch}
        onChange={(e) => {
          setpageSearch(+e.target.value);
          handleSearchPage && handleSearchPage(+e.target.value);
        }}
      />
      <p className="text-sm text-[#A4A4A4]">of</p>
      <p className="text-sm text-[#A4A4A4]">{total}</p>
      <button
        className="flex items-center justify-center ml-[6px]  cursor-pointer"
        disabled={!data?.next}
        onClick={() => {
          setpageSearch(pageSearch + 1);
          handleNextPage(pageSearch + 1);
        }}
      // onClick={()=>console.log('next page')}
      >
        <ArrowLeft className="rotate-180" />
      </button>
      <div className="ml-4 px-2 py-1 rounded-sm">
        <span className="text-sm text-[#A4A4A4]">Items per page: </span>
        <input
          className="size-6 bg-[#fff] rounded border border-[#D6D6D6] text-center text-[#A4A4A4]"
          value={pageSizeNum || data?.pageSize}
          onKeyDown={(e) => {
            if (
              (e.key === "0" && e.target.value === "") || 
              (!/^[1-9]$/.test(e.key) &&                 
                !["Backspace", "ArrowLeft", "ArrowRight", "Tab", "Delete"].includes(e.key)) 
            ) {
              e.preventDefault();
            }
          }}
          onChange={(e) => {
            setPageSize(e.target.value);
            handleItemsNumber && handleItemsNumber(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
