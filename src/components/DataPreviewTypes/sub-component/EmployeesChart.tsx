import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Fade, Menu, MenuItem } from "@mui/material";
import MenuDots from "../../icons/MenuDots";
import Pen from "../../icons/Pen";
import Trash from "../../icons/Trash";
import { data } from "./types/demoData";

const EmployeesChart = () => {
  const [usersCount, setUsersCount] = useState(12);
  const { id } = useParams();
  return (
    <>
      <div className="relative isolate w-fit mx-auto">
        <div className="grid grid-cols-3 gap-x-[55px]">
          <div></div>
          <Item
            line
            main
            employeeName={data[0].employeeName}
            id={data[0].id}
            position={data[0].position}
            department={data[0].department}
            img={data[0].avatar}
          />
          <div></div>
          <div></div>
          <Item
            line={!!id}
            main
            employeeName={data[1].employeeName}
            id={data[1].id}
            position={data[1].position}
            department={data[1].department}
            img={data[1].avatar}
          />
          <div></div>
          {id && (
            <>
              <div></div>
              <Item
                employeeName={data[1].employeeName}
                id={data[1].id}
                position={data[1].position}
                department={data[1].department}
                img={data[1].avatar}
              />
              <div></div>
            </>
          )}
          <div></div>
          <p className="text-sm text-[#595959] text-center mt-[21px] mb-[28px]">
            People reporting to Floyd Miles ({data.length - (id ? 3 : 2)})
          </p>
          <div></div>
          {data?.slice(1, usersCount - 2)?.map((user, i: number) => (
            <Item
              key={i}
              employeeName={user.employeeName}
              id={user.id}
              position={user.position}
              department={user.department}
              img={user.avatar}
            />
          ))}
        </div>
        <div
          className={`-bottom-[45px] border-[3px] border-[#F1F1F1] ${
            id ? `h-[calc(100%-138px)]` : `h-[calc(100%-60px)]`
          }
           w-[calc(100%-30%)] absolute left-[50%] translate-x-[-50%] -z-10`}
        ></div>
      </div>
      <button
        onClick={() => {
          setUsersCount((prev) =>
            usersCount >= data.length + 2 ? 12 : prev + 6
          );
        }}
        className="mx-auto w-fit block text-[#52B4C9] relative text-sm underline mb-10"
      >
        {usersCount > data.length + 2 ? "Collapse" : "See More"}
      </button>
    </>
  );
};

const Item = ({
  line,
  employeeName,
  id,
  position,
  department,
  img,
  main,
}: {
  line?: boolean;
  employeeName: string | undefined;
  id: string | undefined;
  position: string | undefined;
  department: string | undefined;
  img: string;
  main?: boolean;
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <a
      href={`/organization/employees/employees-chart/${
        main ? "" : id?.replace("#", "")
      }`}
      className={`hover:bg-[#f4f4f4] transition mb-[14px] lg:w-[323px] w-full mx-auto flex items-center border border-[#E8E8E8] shadow-[0_4px_18px_0_#00000008] bg-white rounded-[20px] py-[7px] pl-[9px] pr-[11px] relative ${
        line &&
        "after:content-[''] after:absolute after:border-l-[3px] after:border-[#F1F1F1] after:top-[100%] after:left-[50%] after:h-[20px] after:-z-10 isolate"
      }`}
    >
      <img
        className="rounded-full mr-[9px] w-[46px] h-[46px]"
        src={img}
        alt={`${employeeName} img`}
      />
      <div className="flex flex-col gap-1">
        <div className="flex gap-[5px]">
          <p className="text-[#333333] text-xs font-bold leading-[13.93px]">
            {employeeName}
          </p>
          <span className="text-[#BBBBBB] text-xs leading-[13.98px]">{id}</span>
        </div>
        <div className="flex gap-[6px]">
          <p className="text-[#595959] text-xs leading-[13.98px]">{position}</p>
          <span className="text-[#EF6D6D] text-xs leading-[13.98px]">
            {department}
          </span>
        </div>
      </div>
      <button onClick={handleClick} className="ml-auto bg-transparent">
        <MenuDots />
      </button>
      <Menu
        id="fade-menu workforce_menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        classes={{
          paper: "rounded-[5px]",
        }}
        anchorOrigin={{
          horizontal: -130,
          vertical: 20,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <div className="flex flex-col w-36">
          <button className="flex items-center border-b border-[#EDEDED] text-xs text-[#333232] pb-[9px] pt-[1px] px-[15px] gap-2">
            <Pen className="[&_path]:fill-[#4198FF]" />
            Edit
          </button>
          <button className="flex items-center text-xs text-[#333232] pt-[9px] pb-[1px] px-[15px] gap-2">
            <Trash />
            Delete
          </button>
        </div>
      </Menu>
    </a>
  );
};

export default EmployeesChart;
