import React, { useEffect, useRef, useState } from "react";
import useClickOutside from "./useClickOutside";
import ArrowDown from "../icons/ArrowDown";
import CheckBox from "./CheckBox";
import { CircularProgress, Collapse } from "@mui/material";
import MainInput from "./MainInput";
import ImgHelper from "../elements/ImgHelper";

const MultiSelect = ({
  placeholder,
  height,
  px,
  required,
  data,
  onChange,
  selected,
  searchPlaceholder,
  popupItemsGrid,
  loading,
  fetchMore,
}: {
  placeholder?: string;
  height?: number;
  px?: number;
  required?: boolean;
  data: {
    id: string;
    title: string;
    img?: string;
    subTitle?: string;
    filterArray?: string[];
    color?: string;
    backgroundColor?: string;
  }[];
  popupItemsGrid?: number;
  onChange?: (selected: string[] | ((prev: string[]) => string[])) => void;
  selected?: string[];
  searchPlaceholder?: string;
  loading?: boolean;
  fetchMore?: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const domNode = useClickOutside(() => {
    setOpen(false);
  });
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(200);
  const [isTop, setIsTop] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null); // Ref for the scrollable div

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        if (fetchMore) {
          fetchMore();
        }
      }
    }
  };

  useEffect(() => {
    const updateMaxHeight = () => {
      if (inputRef.current) {
        const rect = inputRef.current.getBoundingClientRect();
        const bool = window.innerHeight - rect.bottom < 230;
        const availableSpaceBelow =
          window.innerHeight - (!bool ? rect.bottom : rect.top);
        setIsTop(bool);
        const maxHeight = Math.min(
          availableSpaceBelow,
          200 + (bool ? 80 : 130)
        );
        setMaxHeight(maxHeight - (bool ? 80 : 130));
      }
    };

    if (open) {
      updateMaxHeight();
      window.addEventListener("resize", updateMaxHeight);
    }

    return () => {
      window.removeEventListener("resize", updateMaxHeight);
    };
  }, [open]);

  return (
    <div className="w-full relative" ref={domNode}>
      <div
        className="relative  border border-[#0000003b] hover:border-[#000000de] rounded-[10px]"
        ref={inputRef}
      >
        {selected?.length ? (
          <div
            className="bg-[#f6f6f6] text-black w-full rounded-[9px] flex items-center gap-[12px] cursor-pointer relative"
            onClick={() => setOpen((prev) => !prev)}
            style={{
              height: height || 48,
              paddingInline: px || 28,
            }}
          >
            {selected.slice(0, 2).map((id, i) => {
              let index = -1;
              data.forEach((item, i) => {
                if (item.id == id) index = i;
              });
              const item = data[index];
              return (
                <div
                  key={i}
                  className="flex bg-[#FFFFFF] rounded-full h-[calc(100%-15px)] items-center px-[4px] pop-to-right"
                >
                  <ImgHelper
                    img={item?.img}
                    title={item?.title}
                    color={item?.color}
                    backgroundColor={item?.backgroundColor}
                  />
                  {/* {item.img ? (
                    <img
                      className="h-[calc(100%-8px)] rounded-full"
                      src={item.img}
                      alt=""
                    />
                  ) : (
                    <p
                      className="mr-[4px] rounded-full text-[10px] flex items-center justify-center h-[calc(100%-8px)] aspect-square"
                      style={{
                        color: item?.color,
                        backgroundColor: item?.backgroundColor,
                      }}
                    >
                      {item.title.split(" ")[0][0].toUpperCase() +
                        (item.title.split(" ")[1]
                          ? item.title.split(" ")[1][0].toUpperCase()
                          : "")}
                    </p>
                  )} */}
                  <p className="text-[11px] text-[#333333] mr-[11px] ml-[5px]">
                    {item?.title}
                  </p>
                  <button
                    className="h-[calc(100%-8px)]"
                    type="button"
                    onClick={() => {
                      setOpen((prev) => !prev);
                      const s = selected;
                      s.splice(selected.indexOf(id), 1);
                      onChange && onChange([...s]);
                    }}
                  >
                    <span className="h-full">
                      <svg
                        className="h-full"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#F3F3F3" />
                        <path
                          d="M9.29724 8.72476L12.5001 11.9276L15.703 8.72476C15.78 8.65427 15.8813 8.61621 15.9857 8.61853C16.0901 8.62084 16.1895 8.66334 16.2634 8.73718C16.3372 8.81101 16.3797 8.91049 16.382 9.01488C16.3843 9.11928 16.3463 9.22054 16.2758 9.29757L13.0746 12.5004L16.2766 15.7025C16.3157 15.7398 16.347 15.7845 16.3686 15.8341C16.3902 15.8836 16.4016 15.937 16.4023 15.991C16.403 16.045 16.3928 16.0986 16.3725 16.1487C16.3521 16.1988 16.322 16.2443 16.2838 16.2825C16.2456 16.3207 16.2002 16.351 16.1501 16.3714C16.1001 16.3918 16.0465 16.402 15.9925 16.4014C15.9384 16.4008 15.8851 16.3894 15.8355 16.3679C15.7859 16.3464 15.7411 16.3152 15.7038 16.2761L12.5001 13.0741L9.29724 16.2769C9.2202 16.3474 9.11894 16.3855 9.01455 16.3832C8.91015 16.3809 8.81068 16.3384 8.73684 16.2645C8.66301 16.1907 8.6205 16.0912 8.61819 15.9868C8.61588 15.8824 8.65393 15.7812 8.72443 15.7041L11.9273 12.5013L8.72443 9.29757C8.68531 9.26029 8.65403 9.21556 8.63245 9.16602C8.61086 9.11648 8.5994 9.06313 8.59873 9.00909C8.59806 8.95506 8.6082 8.90143 8.62855 8.85137C8.6489 8.80131 8.67906 8.75582 8.71724 8.71759C8.75543 8.67935 8.80087 8.64913 8.8509 8.6287C8.90093 8.60828 8.95454 8.59806 9.00858 8.59866C9.06262 8.59925 9.11599 8.61064 9.16556 8.63215C9.21513 8.65367 9.2599 8.68488 9.29724 8.72395V8.72476Z"
                          fill="#7D7D7D"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              );
            })}
            {selected.length - 2 >= 1 ? (
              <>
                <p className="text-[#A4A4A4]">-</p>
                <p className="bg-[#1B84FF] h-[calc(100%-15px)] aspect-square rounded-full text-xs font-bold flex items-center justify-center text-white">
                  {selected.length - 2}
                </p>
              </>
            ) : (
              ""
            )}
          </div>
        ) : (
          <button
            type="button"
            className="bg-[#f6f6f6] text-black w-full rounded-[10px] flex items-center gap-[5px] cursor-pointer relative"
            onClick={() => setOpen((prev) => !prev)}
            style={{
              height: height || 48,
              paddingInline: px || 28,
            }}
          ></button>
        )}
        <ArrowDown
          className={`pointer-events-none absolute top-[50%] transition-[top] -translate-y-[50%] ${
            open ? "rotate-180" : ""
          } z-20 right-[21px]`}
        />
        <p
          className="absolute transition-all -translate-y-[50%] select-none pointer-events-none"
          style={{
            left: px || 28,
            top: selected?.length ? 0 : "50%",
            fontSize: selected?.length ? 11 : 12,
            color: selected?.length ? "#1b84ff" : "#9D9D9D",
          }}
        >
          {placeholder}
          {required ? <span className="text-[#E16464]">*</span> : ""}
        </p>
      </div>
      <div
        className="absolute z-[100] w-full"
        style={{
          [isTop ? "bottom" : "top"]: "110%",
        }}
      >
        <Collapse in={open}>
          <div className="bg-white rounded-[14px] w-full shadow-[0px_4px_28px_0px_#00000014] py-[17px]">
            <div className="flex px-[30px] pb-[17px] items-center">
              <CheckBox
                label="All"
                labelClass="text-[#333333] text-xs font-bold"
                checked={data.length == selected?.length}
                onChange={(checked) =>
                  onChange && onChange(checked ? data.map(({ id }) => id) : [])
                }
              />
              <p className="ml-[7px] text-[#A4A4A4] text-xs">
                {selected?.length || "0"}/{data.length} selected
              </p>
              <button
                className="ml-auto text-[10px] text-[#333232] bg-[#F4F4F4] px-[12px] py-[6px] rounded-[5px]"
                onClick={() => {
                  onChange && onChange([]);
                }}
                type="button"
              >
                Reset all
              </button>
            </div>
            <div className="px-[30px] [&_img]:size-[15px] relative">
              <MainInput
                type="text"
                height="38px"
                px={3}
                placeholder={searchPlaceholder || "Search..."}
                icon={search ? "Xclose" : "searchIcon"}
                onIconClick={() => search && setSearch("")}
                value={search}
                onChange={(value, e) => {
                  setSearch(value as string);
                }}
                onKeyPress={(e) => {
                  if (e.key !== "Enter") return;
                  e.preventDefault();
                  let tmp = data
                    .filter(
                      ({ title, subTitle, filterArray }) =>
                        title.toLowerCase().includes(search.toLowerCase()) ||
                        (subTitle &&
                          subTitle
                            .toLowerCase()
                            .includes(search.toLowerCase())) ||
                        (filterArray &&
                          filterArray
                            .join(", ")
                            .toLowerCase()
                            .includes(search.toLowerCase()))
                    )
                    .map(({ id }) => id);
                  if (!onChange || !selected) return;
                  if (!selected.includes(tmp[0])) {
                    tmp = [...selected, ...tmp];
                    return onChange([...new Set(tmp)]);
                  }
                  const s = selected;
                  tmp.forEach((id) => {
                    s.splice(selected.indexOf(id), 1);
                  });
                  onChange([...s]);
                }}
              />
              {/* {loading ? (
                <span className="w-full h-full cursor-not-allowed absolute top-0 left-0 z-[100]"></span>
              ) : (
                ""
              )} */}
              {loading ? (
                <CircularProgress
                  color="inherit"
                  size={16}
                  style={{
                    position: "absolute",
                    top: "27%",
                    left: "6.3%",
                    transform: "translate(-50%, -50%)",
                    color: "#1b84ff",
                    zIndex: "200",
                  }}
                />
              ) : (
                ""
              )}
            </div>
            <div
              className="overflow-y-scroll px-[30px] pt-[17px] grid  [&_label:hover]:bg-[#f6f6f6] [&_input:hover]:bg-white [&_label]:p-[10px]"
              style={{
                maxHeight: `${maxHeight}px`,
                gridTemplateColumns: `repeat(${
                  popupItemsGrid || 2
                }, minmax(0, 1fr))`,
              }}
              ref={scrollRef}
              onScroll={handleScroll}
            >
              {data
                .filter(
                  ({ title, subTitle, filterArray }) =>
                    title?.toLowerCase()?.includes(search?.toLowerCase()) ||
                    (subTitle &&
                      subTitle
                        ?.toLowerCase()
                        ?.includes(search?.toLowerCase())) ||
                    (filterArray &&
                      filterArray
                        ?.join(", ")
                        ?.toLowerCase()
                        ?.includes(search?.toLowerCase()))
                )
                .map(
                  ({ img, title, subTitle, id, color, backgroundColor }, i) => {
                    return (
                      <CheckBox
                        key={i}
                        onChange={(checked) => {
                          if (!onChange || !selected) return;
                          if (!selected.includes(id))
                            return onChange([...selected, id]);
                          const s = selected;
                          s.splice(selected.indexOf(id), 1);
                          onChange([...s]);
                        }}
                        checked={selected?.includes(id)}
                        label={
                          <div className="flex items-center">
                            <ImgHelper
                              title={title}
                              img={img}
                              color={color}
                              backgroundColor={backgroundColor}
                            />
                            <div className="flex flex-col  ml-[6px]">
                              <p className="text-xs text-[#333333]">{title}</p>
                              <span className="text-[10px] text-[#A4A4A4]">
                                {subTitle}
                              </span>
                            </div>
                          </div>
                        }
                      />
                    );
                  }
                )}
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default MultiSelect;
