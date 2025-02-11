import React, { ReactNode } from "react";
import NewClose from "../icons/NewClose";

interface sideModal {
  check: boolean;
  children: ReactNode;
  handleClose?: () => void;
  title?: string;
  inActiveHeader?: boolean;
  handleSave?: (e: any) => Promise<void>;
  styles?: string;
  width?: string;
  zindex?: string;
}

function SideModal({
  check,
  handleClose,
  inActiveHeader,
  children,
  styles,
  width = "400px",
  title = "Form header",
  zindex = "50",
  handleSave,
}: sideModal) {
  return (
    <>
      {check && (
        <div className="fixed top-0 left-0 h-full w-full overflow-hidden bg-[#00000088]  transition-all duration-300 z-40"></div>
      )}
      <form
        onSubmit={handleSave}
        className={` h-screen overflow-y-auto fixed top-0 bg-white px-5 py-2  ${
          check ? "right-0" : " -right-20"
        }  overflow-x-hidden transition-all duration-500 ${styles}`}
        style={{
          width: check ? width : "0px",
          zIndex: zindex,
        }}
      >
        {inActiveHeader ? (
          <div className="header-popUp text-base sticky left-0 top-0 w-full bg-wite z-50 mb-3">
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "rgb(255, 255, 255)",
                height: "45px",
                borderBottom: "1px solid #F4F4F4",
                borderRadius: "10px 10px 0 0",
              }}
            >
              <h3 className="font-bold">{title}</h3>

              <div className="iconCose" onClick={handleClose}>
                <NewClose />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {children}
      </form>
    </>
  );
}

export default SideModal;
