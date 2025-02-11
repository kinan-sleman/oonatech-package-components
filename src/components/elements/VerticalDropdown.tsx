import React, { useState } from "react";
import CartIcon from "../icons/CartIcon";
import ContactUs from "../icons/ContactUs";
import GeneralConfig from "../icons/GeneralConfig";

export const VerticalDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onMouseLeave={() => (isOpen ? toggleDropdown() : null)}
      className="fixed bottom-3 left-2 flex flex-col items-center"
    >
      <div
        className={`
          flex flex-col items-center gap-2 transition-all duration-300 
          ${
            isOpen
              ? "opacity-100 -translate-y-3"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
      >
        <div
          className="bg-white rounded-md shadow-md w-10 h-10 flex justify-center items-center cursor-pointer"
          onClick={() => toggleDropdown()}
        >
          <CartIcon />
        </div>
        <div
          className="bg-white rounded-md shadow-md w-10 h-10 flex justify-center items-center cursor-pointer"
          onClick={() => toggleDropdown()}
        >
          <ContactUs />
        </div>
        <div
          className="bg-white rounded-md shadow-md w-10 h-10 flex justify-center items-center cursor-pointer"
          onClick={() => toggleDropdown()}
        >
          <GeneralConfig />
        </div>
        {/* <img
          src={testImg1}
          alt=""
          onClick={() => toggleDropdown()}
          className="w-10 h-10 rounded-full shadow-md flex justify-center items-center cursor-pointer"
        /> */}
      </div>
      <button
        onMouseEnter={() => toggleDropdown()}
        className="flex items-center justify-center w-10 h-10 bg-[#234062] hover:bg-[#00A7E1] rounded-full
        text-white shadow-md hover:rotate-45 duration-300 outline-none transition-all"
      >
        +
      </button>
    </div>
  );
};
