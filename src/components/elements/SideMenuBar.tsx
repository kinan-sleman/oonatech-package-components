import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApplicationView from "./ApplicationView";
import { VerticalDropdown } from "./VerticalDropdown";

type sideData = {
  id: string | number;
  url: string;
  icon: unknown;
  name: string;
};
function SideMenuBar({ data }: { data: sideData[] }) {
  const [clicked, setClicked] = useState("/");

  return (
    <section className="fixed top-0 left-0 flex flex-col justify-between bg-[#E9F3FF] h-full z-[5] w-[55px] py-[0.8rem]">
      {/* <Link to={"/attendance"}>
          <img src={main_logo} width={40} className="mx-auto mb-2" />
        </Link> */}
      <div className="mt-16">
        {data?.map((item, i) => {
          return (
            <Link
              to={item?.url}
              onClick={() => setClicked(item?.url)}
              className={`mx-auto mb-1 flex items-center justify-center size-[35px]
                transform transition duration-300 ease-in-out hover:scale-[1.15] flex-shrink-0 
                ${clicked === item?.url ? " shadow-none" : ""}`}
            >
              <ApplicationView img={item?.icon} title={item?.name?.trim()} />
              {/* <img src={item?.icon} width={40} className="mx-auto" /> */}
            </Link>
          );
        })}
        {/* {applicationData?.slice(0, 2)?.map((item, i) => {
          return (
            <Link
              to={item?.url}
              onClick={() => setClicked(item?.url)}
              className={`mx-auto mb-1 flex items-center justify-center size-[35px]
                transform transition duration-300 ease-in-out hover:scale-[1.15] flex-shrink-0 
                ${clicked === item?.url ? " shadow-none" : ""}`}
            >
              <ApplicationView img={icons[i + 6]} title={item?.name?.trim()} />
            </Link>
          );
        })} */}
      </div>
      <VerticalDropdown />
    </section>
  );
}

export default SideMenuBar;
