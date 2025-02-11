// @ts-ignore

import React, { DragEvent, useState } from "react";
import ActionButton from "../actionButtons/ActionButton";

function FilesUploader({
  formats,
  files,
  setFiles,
  multiple,
  type,
  placeholder,
  icon,
  height,
  px = 14,
  required,
  popup,
  handleDelete,
}: {
  formats?: string;
  files?: FileList | null;
  setFiles?: (fileslist: FileList | null) => void;
  multiple?: boolean;
  type?: "large" | "small";
  placeholder?: string;
  icon?: any;
  height?: number;
  px?: number;
  required?: boolean;
  popup?: boolean;
  handleDelete?: () => void;
}) {
  const [dragOver, setDragOver] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const acceptedFormats = formats
    ?.split(",")
    .map((format) => format.trim().toLowerCase());

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);

    if (e?.dataTransfer?.files && e?.dataTransfer?.files.length > 0) {
      {
        /* @ts-ignore */
      }
      const files = [...e?.dataTransfer?.files].map(({ name }) => {
        const ext = name?.split(".")?.pop()?.toLowerCase();
        return `.${ext}`;
      });

      const allFilesAccepted = files.every((fileFormat) =>
        acceptedFormats?.includes(fileFormat)
      );

      if (allFilesAccepted && setFiles) {
        setFiles(e.dataTransfer.files);
      }
    }
  };

  return type == "small" ? (
    <label
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`bg-[#f6f6f6] border border-[#0000003b] hover:border-[#000000de] text-black w-full rounded-[10px] flex items-center gap-[5px] cursor-pointer relative ${
        dragOver && "[&_*]:pointer-events-none"
      }`}
      style={{
        height: height || 44,
        paddingInline: px || 20,
      }}
    >
      {icon && <img src={icon} alt="" className="w-[29px]" />}
      <p
        className="absolute top-[50%] -translate-y-[50%] transition-all"
        style={{
          left:
            files || dragOver
              ? px || 28
              : `calc(${icon ? "34px + " : ""}${px || 28}px)`,
          top: files || dragOver ? "-2px" : "50%",
          fontSize: files || dragOver ? 11 : 12,
          color: files || dragOver ? "#1b84ff" : "#9D9D9D",
          backgroundImage:
            files || dragOver
              ? "linear-gradient(transparent 55%, rgb(246, 246, 246) 45%)"
              : "",
          padding: files || dragOver ? "0 3px" : "",
        }}
      >
        Drop {placeholder} file or Browse{" "}
        <span className="text-[8px] text-[#A4A4A4]">
          (Supported formats: {formats})
        </span>
        {required ? <span className="text-[#E16464]">*</span> : ""}
      </p>

      {files && (
        <div className="relative">
          <p
            className="text-[#595959] text-xs cursor-help"
            onClick={() => setHovering(true)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            {files[0].name || "Hover to see selected icon"}
          </p>
          {popup && (
            <div
              className="transition-all cursor-default absolute z-50 p-2 w-[200px] bg-white shadow-xl top-[calc(100%+10px)] rounded-[10px] origin-top flex items-center justify-center left-[50%]"
              style={{
                opacity: hovering ? 1 : 0,
                transform: hovering
                  ? "translateX(-50%)"
                  : "translateX(-50%) scale(0)",
              }}
            >
              <div className="absolute border-8 border-transparent border-b-white bottom-[100%]"></div>
              <img
                // @ts-ignore
                src={
                  files[0] && typeof files !== "string"
                    ? URL.createObjectURL(files[0])
                    : files
                }
                alt={files[0].name ? files[0].name : ""}
                className="rounded-[10px]"
              />
            </div>
          )}
        </div>
      )}
      <input
        type="file"
        hidden
        accept={formats}
        onChange={(e) =>
          setFiles && setFiles(e.target.files?.length ? e.target.files : null)
        }
      />
      {files && (
        <div className="absolute right-[10px]">
          <ActionButton
            type="delete"
            onClick={(e) => {
              e.preventDefault();
              handleDelete && handleDelete();
              // setFiles && setFiles(null);
            }}
          />
        </div>
      )}
    </label>
  ) : (
    <div className="w-full block">
      <div
        className={`border  border-[#adadad] rounded-[4px] p-[18px] ${
          dragOver ? "bg-[#ddf]" : ""
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div
          className="border border-dashed border-[#adadad] flex items-center justify-center flex-col p-[16px] rounded-[4px]"
          style={{ pointerEvents: dragOver ? "none" : "auto" }}
        >
          {icon ? (
            <img src={icon} alt="" className="w-[72.39px]" />
          ) : (
            <svg
              style={{ width: "72.39px" }}
              // width="72.39px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="upload"
            >
              <path
                fill="#96d7ff"
                d="M28.94,13.38a11,11,0,0,0-20.5-2.33,8,8,0,0,0,.82,16h4V24.5h-2a1,1,0,0,1-.89-.54,1,1,0,0,1,.07-1l5-7a1,1,0,0,1,1.63,0l5,7a1,1,0,0,1-.81,1.58h-2V27h4a8,8,0,0,0,5.68-13.62Z"
              ></path>
              <path
                fill="#86c3ef"
                d="M2.17,19.44a8,8,0,0,1,7.18-8,11,11,0,0,1,9.82-6,10.8,10.8,0,0,1,4.31.9A10.84,10.84,0,0,0,18.26,5a11,11,0,0,0-9.82,6.05A8,8,0,0,0,6.25,26.41,8,8,0,0,1,2.17,19.44Z"
              ></path>
            </svg>
          )}

          <p className="text-[#333333] text-xs">
            Drag & drop file or{" "}
            <label
              className=" cursor-pointer"
              style={{
                display: "block",
                textAlign: "center",
                background: " #96D7FF",
                padding: "6px 12px",
                textDecoration: "none",
                borderRadius: "4px",
                color: "white",
                width: "fit-content",
                margin: " 8px auto 3px",
              }}
            >
              Browse
              <input
                multiple={multiple}
                type="file"
                hidden
                accept={formats}
                onChange={(e) => {
                  setFiles && setFiles(e.target.files);
                }}
              />
            </label>
          </p>
          <span className="text-[10px] text-[#A4A4A4]">
            Supported formats: {formats}
          </span>
        </div>
        <div style={{ pointerEvents: dragOver ? "none" : "auto" }}>
          {/* @ts-ignore */}
          {files &&
            [...files].map((file, i) => (
              <div
                className="p-2 bg-[#E9F8FF] rounded-[4px] mt-[5px] flex gap-[7px] items-center"
                key={i}
              >
                <svg
                  width="11"
                  height="15"
                  viewBox="0 0 11 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.67774 0C0.752783 0 0 0.814138 0 1.81448V13.1855C0 14.1859 0.752783 15 1.67774 15H9.32226C10.2472 15 11 14.1859 11 13.1855V4.41828C11 4.41103 10.9943 4.40586 10.9933 4.39862C10.9913 4.33785 10.9692 4.27987 10.9311 4.23517L7.10504 0.0972414C7.06597 0.0570391 7.01532 0.0325705 6.96157 0.027931C6.93765 0.0206897 6.91852 0 6.89461 0H1.67774ZM1.67774 0.517241H6.69565V2.8769C6.69565 3.87 7.44174 4.6769 8.35904 4.6769H10.5217V13.1855C10.5217 13.9003 9.98322 14.4828 9.32226 14.4828H1.67774C1.35977 14.4822 1.05498 14.3454 0.830139 14.1022C0.605303 13.859 0.478767 13.5294 0.478261 13.1855V1.81448C0.478261 1.09966 1.01774 0.517241 1.67774 0.517241ZM7.172 0.923793C7.90948 1.71621 9.3873 3.3031 10.1822 4.15966H8.35904C7.70574 4.15966 7.17296 3.58345 7.17296 2.8769L7.172 0.923793Z"
                    fill="#231F20"
                  />
                </svg>

                <p className="text-[#333232] text-[11px]">{file.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default FilesUploader;
