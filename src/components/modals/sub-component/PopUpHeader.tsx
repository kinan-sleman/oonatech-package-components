import React from "react";
import NewClose from "../../icons/NewClose";

interface PopUpHeaderProps {
  title: string | undefined;
  onClose?: () => void; // Optional function prop
}
function PopUpHeader({ title, onClose }: PopUpHeaderProps) {
  return (
    <>
      <div className="header-popUp text-base sticky left-0 top-0 w-full bg-wite z-50">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "rgb(255, 255, 255)",
            height: "55px",
            padding: "0 35px",
            borderBottom: "1px solid #F4F4F4",
            borderRadius: "10px 10px 0 0",
          }}
        >
          <h3 className="font-bold">{title}</h3>

          <div className="iconCose" onClick={onClose}>
            <NewClose />
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUpHeader;
