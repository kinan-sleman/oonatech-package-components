import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import Icons from "../../assets";
import BoldPath from "../icons/BoldPath";
import Home from "../icons/Home";
// import { ReactSVG } from "react-svg";

interface PageTitleProps {
  label: string;
  path?: string;
  top?: string;
  left?: string;
  isBack?: boolean;
}

const PageTitle: React.FC<PageTitleProps> = ({
  label,
  path = "/ Settings / System Settings",
  isBack = true,
}) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    navigate(-1); // Navigate to the previous page when clicked
  };

  return (
    <div className={`flex flex-col items-start justify-center w-full`}>
      <div className="flex gap-2 justify-center items-center">
        {isBack && (
          <div 
            className="cursor-pointer"
            onClick={handleClick}
          >
            {/* <ReactSVG src={Icons.boldPath} /> */}
            <BoldPath />
          </div>
          // <img
          //   className="cursor-pointer"
          //   onClick={handleClick}
          //   src={Icons.boldPath}
          //   alt=""
          // />
        )}
        <h1 className="text-[18px] font-[700] text-[#333333]">{label}</h1>
      </div>
      <div className="flex items-center justify-center gap-1">
            {/* <ReactSVG src={Icons.home} /> */}
            <Home />
            {/* <img src={Icons.home} alt="" /> */}
        <p className="text-[12px] text-[#A4A4A4]">{path}</p>
      </div>
    </div>
  );
};

export default PageTitle;
