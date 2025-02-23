import React, { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavigationList from "../NavigationList";

interface IconFunction {
  (hovered: boolean): ReactNode;
}

interface pathData {
  id: string;
  title: string;
  link: string;
}

interface SubLink {
  id: number;
  title: string;
  link: string;
}

// Define the Route interface
interface Route {
  id: number;
  title: string;
  icon: IconFunction;
  width: number;
  link?: string;
  subLinks?: SubLink[];
}

function SideBarWithPreview({
  title,
  section,
  children,
  pageTitle,
  paths,
  routes,
  previewStyleClasses,
  styleSideBar,
  stylesList,
  navListColor,
  sideBarBackgroundColor,
  backInHistory,
}: {
  title?: string;
  section?: string;
  children: React.ReactNode;
  pageTitle: string;
  paths: pathData[];
  routes: Route[];
  previewStyleClasses?: string;
  styleSideBar?: string;
  navListColor?: string;
  stylesList?: string;
  sideBarBackgroundColor?: string;
  backInHistory?: boolean;
}) {
  const [showSideBar, setShowSideBar] = useState<boolean>(
    localStorage.getItem("sidebarStatus") === "false" ? false : true
  );
  const [hoveredItem, setHoveredItem] = useState<string | number>("");
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    const activeParentMenu = routes.find((route) =>
      route.subLinks?.some((subLink) => pathName.includes(subLink.link))
    );
    if (activeParentMenu) {
      setOpenSubMenu(activeParentMenu.id);
    }
  }, [pathName]);

  const toggleSubMenu = (id: number) => {
    setOpenSubMenu((prevState) => (prevState === id ? null : id));
  };

  const isSubLinkActive = (item: Route) => {
    return item.subLinks?.some((subLink) =>
      pathName.includes(subLink.link)
    ) as boolean;
  };

  // const handleLinkClick = (item: Route) => {
  //   if (!item.subLinks) {
  //     setOpenSubMenu(null);
  //   }
  // };

  return (
    <section className="flex w-full mr-3 gap-[15px] relative"
     style={{ minHeight: 'calc(100vh + -30px)' }}>
      {routes?.length ? (
        <section
          className={`${
            styleSideBar
              ? styleSideBar
              : "absolute z-[5] h-[calc(100%-20px)] top-[15px] left-[4%] overflow-y-auto"
          }`}
        >
          <section
            style={{
              backgroundColor: sideBarBackgroundColor
                ? sideBarBackgroundColor
                : "#F9F9F9",
                minHeight: 'calc(100vh + -50px)'
            }}
            className={` texleft   transition-all duration-300   px-1 py-3 ${
              showSideBar
                ? "w-[220px] rounded-[14px]"
                : "w-[50px] rounded-[24px]"
            }`}
          >
            <div className={``}>
              {showSideBar ? (
                <h3
                  className={`${
                    !showSideBar ? "pl-12" : ""
                  } text-[16px] font-bold  whitespace-nowrap text-textColor pb-5  px-3 mt-4 mb-4 border-b border-[#b5b5b5b7]`}
                >
                  {title}
                </h3>
              ) : (
                <div className="pl-[10px] pt-7 pb-6 border-b"></div>
              )}

              <div className="mt-3 px-3 flex flex-col gap-1">
                {showSideBar && section && (
                  <p className="text-[#949292] text-[12px] font-normal mb-2">
                    {section}
                  </p>
                )}

                <div className="flex flex-col items-center gap-2">
                  {routes?.map((item) => (
                    <div
                      key={item.id}
                      className={`w-full ${
                        showSideBar
                          ? ""
                          : "flex items-center justify-center w-[24px]"
                      }`}
                    >
                      {item?.link ? (
                        <Link
                          to={item.link}
                          id={`${item.id}`}
                          onMouseEnter={() => setHoveredItem(item.id)}
                          onMouseLeave={() => setHoveredItem("")}
                          // onClick={() => handleLinkClick(item)}
                          className={
                            showSideBar
                              ? `text-[14px] relative   transition-all rounded-lg min-w-full pl-3 whitespace-nowrap pr-3 py-3 mx-1  text-left leading-[16px] h-[39px] font-normal text-textColor  flex items-center gap-2 ${
                                  pathName.includes(item.link)
                                    ? "active_sidebar_item"
                                    : "hover_sidebar_item"
                                } `
                              : ` relative rounded-md  p-1  transition-all flex mb-[2px] h-[29px] items-center justify-center ${
                                  pathName.includes(item.link)
                                    ? "hover-close-side"
                                    : "hover-close-sideActive"
                                } `
                          }
                        >
                          {showSideBar ? (
                            <>
                              <span className="w-[24px] flex items-center justify-center relative">
                                {item.icon(
                                  hoveredItem === item.id ||
                                    pathName.includes(item.link)
                                )}
                              </span>
                              {item.title}
                            </>
                          ) : (
                            <>
                              <span className="w-[24px] flex items-center justify-center relative">
                                {item.icon(
                                  hoveredItem === item.id ||
                                    pathName.includes(item.link)
                                )}
                              </span>
                              <span
                                className={`absolute w-fit  transition-all text-white px-3 py-1 whitespace-nowrap block left-9 top-[50%] text-xs bg-[#646464] translate-y-[-50%]  z-[11] rounded-[2px] custom_tooltip ${
                                  hoveredItem === item.id && !showSideBar
                                    ? "scale-100"
                                    : " scale-0"
                                }`}
                              >
                                {item.title}
                              </span>
                            </>
                          )}
                        </Link>
                      ) : (
                        <div className="">
                          <button
                            onClick={() => {
                              toggleSubMenu(item.id);
                              setShowSideBar(true);
                            }}
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem("")}
                            className={
                              showSideBar
                                ? `text-[14px] relative transition-all rounded-lg min-w-full pl-3 whitespace-nowrap pr-3 py-3 mx-1 text-left leading-[16px] h-[39px] font-normal text-textColor flex items-center gap-2 ${
                                    isSubLinkActive(item)
                                      ? "active_sidebar_item"
                                      : "hover_sidebar_item"
                                  } ${
                                    openSubMenu === item.id
                                      ? "text-[#1B84FF]"
                                      : ""
                                  }`
                                : ` relative rounded-md  p-1  transition-all flex mb-[2px] h-[29px] items-center justify-center ${
                                    isSubLinkActive(item)
                                      ? "hover-close-side"
                                      : "hover-close-sideActive"
                                  } ${
                                    openSubMenu === item.id
                                      ? "text-[#1B84FF]"
                                      : ""
                                  } `
                            }
                          >
                            {showSideBar ? (
                              <>
                                <span className="w-[24px] flex items-center justify-center relative">
                                  {item.icon(
                                    hoveredItem === item.id ||
                                      openSubMenu === item.id ||
                                      isSubLinkActive(item)
                                  )}
                                </span>
                                {item.title}

                                <span
                                  className={`ml-auto ${
                                    openSubMenu === item.id
                                      ? "transform rotate-180"
                                      : ""
                                  }`}
                                >
                                  <svg
                                    width="11"
                                    height="6"
                                    viewBox="0 0 11 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10 1L5.5 5.5L1 1"
                                      stroke={
                                        hoveredItem === item.id ||
                                        openSubMenu === item.id ||
                                        isSubLinkActive(item)
                                          ? "#1B84FF"
                                          : "#333232"
                                      }
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>{" "}
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="w-[24px] flex items-center justify-center relative">
                                  {item.icon(
                                    hoveredItem === item.id ||
                                      openSubMenu === item.id ||
                                      isSubLinkActive(item)
                                  )}
                                </span>
                                <span
                                  className={`absolute w-fit  transition-all text-white px-3 py-1 whitespace-nowrap block left-9 top-[50%] text-xs bg-[#646464] translate-y-[-50%]  z-[11] rounded-[2px] custom_tooltip ${
                                    hoveredItem === item.id
                                      ? "scale-100"
                                      : " scale-0"
                                  }`}
                                >
                                  {item.title}
                                </span>
                              </>
                            )}
                          </button>
                          {openSubMenu === item.id &&
                            item.subLinks &&
                            showSideBar && (
                              <div className="pl-[3.2rem]">
                                {item.subLinks.map((subLink) => (
                                  <Link
                                    key={subLink.id}
                                    to={subLink.link}
                                    className={`block py-2 text-[12px] ${
                                      pathName.includes(subLink.link)
                                        ? "text-blue-500"
                                        : "hover:text-blue-500"
                                    }`}
                                  >
                                    {subLink.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <button
            className="absolute top-[24px]  right-[12px] border w-[25px] h-[25px] border-[#E2E2E2] flex items-center justify-center rounded-full p-2 bg-white main-shadow"
            onClick={() => {
              localStorage.setItem("sidebarStatus", String(!showSideBar));
              setShowSideBar(!showSideBar);
            }}
          >
            <svg
              className={` transition-all ${showSideBar ? "" : "rotate-180"}`}
              width="6"
              height="11"
              viewBox="0 0 6 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 10L1 5.5L5.5 1"
                stroke="#595959"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </section>
      ) : (
        ""
      )}
      <section
        className={` transition-all relative ${
          routes?.length ? "main-content ml-auto" : "pl-[2.5%] w-full"
        }  pr-[2.5%] mt-[12px]  ${
          showSideBar && "open"
        } ${previewStyleClasses}`}
      >
        {paths?.length ? (
          <NavigationList
            title={pageTitle}
            paths={paths}
            styles={stylesList}
            color={navListColor}
            backInHistory={backInHistory}
          />
        ) : (
          ""
        )}
        <section>{children}</section>
      </section>
    </section>
  );
}

export default SideBarWithPreview;
