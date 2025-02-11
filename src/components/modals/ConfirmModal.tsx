import React from "react";
import NewClose from "../icons/NewClose";
import MainModal from "./Modal";
import { CircularProgress } from "@mui/material";

interface data {
  check: boolean;
  handleConfirm?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose?: (
    e?: React.MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => void;
  type?: "confirm" | "info" | "delete";
  title?: string;
  description?: string;
  mainBtnText?: string;
  loading?: boolean;
}
function ConfirmModal({
  handleConfirm,
  check,
  handleClose,
  type,
  title,
  description,
  mainBtnText,
  loading,
}: data) {
  return (
    <MainModal
      inActiveFormActions
      inActiveHeader
      maxWidth="xs"
      check={check}
      handleClose={handleClose}
    >
      <section className=" pt-5 ">
        <div className="flex items-start justify-between px-6">
          {/* <img
            src={ */}
          {type === "confirm" ? (
            <svg
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.38"
                cx="28.5"
                cy="28.5"
                r="28.5"
                fill="#E1FAF2"
              />
              <ellipse
                opacity="0.38"
                cx="29.0175"
                cy="28.5006"
                rx="21.7636"
                ry="22.2818"
                fill="#D3F8EC"
              />
              <path
                d="M29.0793 38.8735C34.7743 38.8735 39.3911 34.2567 39.3911 28.5617C39.3911 22.8667 34.7743 18.25 29.0793 18.25C23.3843 18.25 18.7676 22.8667 18.7676 28.5617C18.7676 34.2567 23.3843 38.8735 29.0793 38.8735Z"
                stroke="#1FB85C"
                strokeWidth="1.5"
              />
              <path
                d="M24.8711 29.0268L28.3257 32.181L34.1457 25.9102"
                stroke="#1FB85C"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : type === "info" ? (
            <svg
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.38"
                cx="28.5"
                cy="28.5"
                r="28.5"
                fill="#E1FAF2"
              />
              <ellipse
                opacity="0.38"
                cx="29.0175"
                cy="28.5006"
                rx="21.7636"
                ry="22.2818"
                fill="#D3F8EC"
              />
              <path
                d="M29.0793 38.8735C34.7743 38.8735 39.3911 34.2567 39.3911 28.5617C39.3911 22.8667 34.7743 18.25 29.0793 18.25C23.3843 18.25 18.7676 22.8667 18.7676 28.5617C18.7676 34.2567 23.3843 38.8735 29.0793 38.8735Z"
                stroke="#253368"
                strokeWidth="1.5"
              />
              <path
                d="M29.0176 23.8463V23.8359M29.0176 34.1995V26.945"
                stroke="#253368"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="57"
              height="57"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.38"
                cx="28.5"
                cy="28.5"
                r="28.5"
                fill="#FFF1F1"
              />
              <ellipse
                opacity="0.38"
                cx="29.0175"
                cy="28.5006"
                rx="21.7636"
                ry="22.2818"
                fill="#FFCBCB"
              />
              <path
                d="M33.1632 23.8359L23.8359 33.1632"
                stroke="#D14343"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33.1632 33.1632L23.8359 23.8359"
                stroke="#D14343"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M29.0793 38.8735C34.7743 38.8735 39.3911 34.2567 39.3911 28.5617C39.3911 22.8667 34.7743 18.25 29.0793 18.25C23.3843 18.25 18.7676 22.8667 18.7676 28.5617C18.7676 34.2567 23.3843 38.8735 29.0793 38.8735Z"
                stroke="#D14343"
                strokeWidth="1.5"
              />
            </svg>
          )}

          {/* alt="" */}
          {/* /> */}
          <div className="iconCose" onClick={handleClose}>
            <NewClose />
          </div>
        </div>
        <div className="py-5 px-6">
          <h4 className="text-[#333232] font-bold text-sm">{title}</h4>
          <p className="text-[#6A6A6A] font-normal text-sm">{description}</p>
        </div>
        <div className="bg-[#F7F7F7] py-4 mt-2 flex items-center justify-center gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClose?.(e);
            }}
            className="w-[145px] h-[36px] bg-[#E8E8E8] text-xs font-normal text-[#253368] rounded-lg text-center"
          >
            Cancel{" "}
          </button>
          <button
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              handleConfirm?.(e);
            }}
            className={`w-[145px] relative h-[36px]  text-xs font-normal text-white rounded-lg text-center ${
              type === "delete"
                ? "bg-[#FD344C]"
                : type === "info"
                ? "bg-[#00A7E1]"
                : "bg-[#3AE67F]"
            } ${loading ? "opacity-50" : "opacity-100"}`}
          >
            {loading && (
              <CircularProgress
                color="inherit"
                size={20}
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "45%",
                  transform: "translate(-50%, -50%)",
                  color: "#1b84ff",
                }}
              />
            )}
            {mainBtnText}
          </button>
        </div>
      </section>
    </MainModal>
  );
}

export default ConfirmModal;
