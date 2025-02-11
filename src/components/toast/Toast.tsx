import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface toastType {
  type?: "success" | "error" | "warning" | "info";
  content: string;
  delay: number | false | undefined;
  position:
    | "bottom-right"
    | "top-left"
    | "top-right"
    | "top-center"
    | "bottom-left"
    | "bottom-center";
}
// toast types switch
function MainToastAlert({ type, content, delay, position }: toastType) {
  switch (type) {
    case "success":
      return toast.success(
      
        <div className="toastBox bg-[#ECFFF8] ">
          <div className="content">
            <h3 className="success-toast text-[#333232] font-bold !text-sm">
              Success
            </h3>
            <p className="msg-toast text-[#595959] font-normal !text-sm">
              {content}
            </p>
          </div>
        </div>,
        {
          position: position,
          className: "custom-toast-success",
          autoClose: delay,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    case "error":
      return toast.error(
        <div className="toastBox bg-[#FFF8F7]">
          <div className="content">
            <h3 className="success-toast text-[#333232] font-bold text-sm">
              Error!
            </h3>
            <p className="msg-toast text-[#595959] font-normal text-sm">
              {content}
            </p>
          </div>
        </div>,

        {
          position: position,
          className: "custom-toast-error",
          autoClose: delay,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );

    case "warning":
      return toast.warning(
        <div className="toastBox bg-[#FFFAEB]">
          <div className="content">
            <h3 className="warning-toast text-[#333232] font-bold text-sm">
              Warning!
            </h3>
            <p className="msg-toast text-[#595959] font-normal text-sm">
              {content}
            </p>
          </div>
        </div>,

        {
          position: position,
          autoClose: delay,
          className: "custom-toast-warning",
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    case "info":
      return toast.info(
        <div className="toastBox bg-[#E8F7FF]">
          <div className="content">
            <h3 className="warning-toast text-[#333232] font-bold text-sm">
              Info!
            </h3>
            <p className="msg-toast text-[#595959] font-normal text-sm">
              {content}
            </p>
          </div>
        </div>,

        {
          position: position,
          autoClose: delay,
          className: "custom-toast-info",
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );

    default:
      return toast.warning(
        <div className="toastBox">
          <div className="content">
            <h3 className="warning-toast">Warniang!</h3>
            <p className="msg-toast text-[#595959] font-normal text-sm">
              {content}
            </p>
          </div>
        </div>,
        {
          position: position,
          autoClose: delay,
          className: "custom-toast-error",
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
  }
}

export default MainToastAlert;
